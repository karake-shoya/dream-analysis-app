import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { cleanJsonText } from "@/lib/utils";
import { ERROR_MESSAGES, AI_CONFIG, getDreamAnalysisPrompt } from "@/lib/constants";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { dream } = await req.json();

    if (!dream) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.DREAM_EMPTY },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        { error: ERROR_MESSAGES.SERVER_CONFIG_ERROR },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: AI_CONFIG.MODEL_NAME,
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ],
    });

    const prompt = getDreamAnalysisPrompt(dream);
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Markdown が含まれていた場合のクリーニング
    const cleanText = cleanJsonText(text);
    
    const analysis = JSON.parse(cleanText);

    // 診断不可の場合の処理
    if (analysis.isDiagnosable === false) {
      return NextResponse.json(
        { error: analysis.errorReason || ERROR_MESSAGES.NOT_A_DREAM },
        { status: 400 }
      );
    }

    let dreamId = null;

    // Supabase に保存（診断可能な場合のみ）
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const { data: insertedData, error: dbError } = await supabase
      .from('dreams')
      .insert({
        user_id: user?.id || null,
        content: dream,
        diagnosis_result: analysis,
      })
      .select('id')
      .single();

    if (dbError) {
      console.error('Failed to save to Supabase:', dbError);
    } else if (insertedData) {
      dreamId = insertedData.id;
    }

    return NextResponse.json({ ...analysis, id: dreamId });
  } catch (error) {
    console.error("Analysis Error:", error);
    return NextResponse.json(
      { error: ERROR_MESSAGES.ANALYSIS_ERROR },
      { status: 500 }
    );
  }
}
