import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

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
    // 使用モデルは gemini-1.5-flash を推奨（高速・安価）
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      あなたは経験豊富で、優しく、神秘的な雰囲気を持つ夢占い師です。
      ユーザーが見た夢の内容から、その深層心理を読み解き、前向きになれるようなアドバイスを授けてください。

      ユーザーの夢の内容:
      """
      ${dream}
      """

      以下のJSON形式で結果を出力してください。
      JSON以外の文字列（Markdownのコードブロック \`\`\`json ... \`\`\` や挨拶など）は一切含めないでください。

      {
        "keywords": ["夢の中の重要なキーワード1", "キーワード2"],
        "summary": "夢全体の診断結果（簡潔に）",
        "advice": "ユーザーへの詳細なアドバイス（優しく、励ますような口調で）",
        "lucky_item": "具体的なラッキーアイテム",
        "lucky_color": "具体的なラッキーカラー"
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 万が一Markdownが含まれていた場合のクリーニング
    const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    let analysis;
    try {
      analysis = JSON.parse(cleanText);
    } catch (e) {
      console.error("Failed to parse JSON response:", text);
      return NextResponse.json(
        { error: "診断結果の解析に失敗しました。" },
        { status: 500 }
      );
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
