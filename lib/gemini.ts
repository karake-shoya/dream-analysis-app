import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { cleanJsonText } from "@/lib/utils";
import { AI_CONFIG, getDreamAnalysisPrompt, ERROR_MESSAGES } from "@/lib/constants";
import type { AnalysisResult } from "@/lib/types";

/**
 * Gemini API を呼び出して夢を分析し、結果を返す
 */
export async function analyzeWithGemini(dream: string): Promise<AnalysisResult> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error(ERROR_MESSAGES.SERVER_CONFIG_ERROR);
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

  const result = await model.generateContent(getDreamAnalysisPrompt(dream));
  const text = result.response.text();
  const analysis = JSON.parse(cleanJsonText(text)) as AnalysisResult;
  return analysis;
}
