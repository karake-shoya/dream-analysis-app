import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { dream } = await req.json();

    if (!dream) {
      return NextResponse.json(
        { error: "夢の内容が入力されていません。" },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("GEMINI_API_KEY is not set");
      return NextResponse.json(
        { error: "サーバーの設定エラーです。" },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // 使用モデルは gemini-2.5-flash
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      あなたは、夢の断片から日常を彩るヒントを見つける、センスの良い夢診断士です。
      難解な言葉は使わず、友人に話しかけるような軽やかでポジティブな言葉で、ユーザーに気づきを与えてください。

      ## ユーザーが見た夢
      """
      ${dream}
      """

      ## 診断のポイント
      - 堅苦しい敬語（〜でございます等）は避け、自然な「です・ます」調で。
      - 深刻になりすぎず、読んだ後に心が少し軽くなるトーン。
      - 診断結果は心理学的・精神分析的アプローチを基に、夢の意味を詳しく説明する。
      - 風景や場所、物語の象徴を詳しく説明する。
      - lucky_itemとlucky_placeは、心理学的・精神分析的に夢から得られる精神状況を改善するための物や場所を提案する

      ## 出力形式
      JSON形式のみで出力してください。Markdownのコードブロックは不要です。

      {
        "keywords": ["象徴的な言葉1", "象徴的な言葉2"],
        "summary": "この夢が教えてくれる、今のあなたの状態、この夢は「〜」を表しています。（アドバイスは含めない）",
        "advice": "夢の表す意味を踏まえた簡潔で前向きなアドバイス（200文字程度）",
        "lucky_item": "今日持っていると嬉しいもの（一言）",
        "lucky_place": "今日行くと良い気分転換になる場所（一言）"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 万が一Markdownが含まれていた場合のクリーニング
    const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const analysis = JSON.parse(cleanText);

    // ログインユーザーの場合はDBに保存
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
      const { error: dbError } = await supabase
        .from('dreams')
        .insert({
          user_id: user.id,
          content: dream,
          diagnosis_result: analysis,
        });

      if (dbError) {
        console.error('Failed to save to Supabase:', dbError);
      }
    }

    return NextResponse.json(analysis);
  } catch (error) {
    console.error("Analysis Error:", error);
    return NextResponse.json(
      { error: "診断中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
