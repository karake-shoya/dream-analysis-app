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
      以下の5つの視点を中心に、夢の深層心理を多角的に分析してください：
      1. 【感情】：夢の中で感じた喜び、不安、驚きなどの心の動き。
      2. 【方法（相手との関係）】：他者との関わり方や、その状況でとった行動の意味。
      3. 【環境】：場所や天気、雰囲気など、舞台設定が暗示するもの。
      4. 【コントロール】：状況を自分で操れていたか、あるいは翻弄されていたか。
      5. 【結末】：夢がどのように終わったか、その最後が示す未来への示唆。

      - 堅苦しい敬語（〜でございます等）は避け、自然な「です・ます」調で。
      - 相手に寄り添い、読んだ後に前向きな気持ちになれるトーン。
      - 心理学的・精神分析的アプローチをベースにしつつ、象徴的な意味を詳しく説明する。


      ## 出力形式
      JSON形式のみで出力してください。Markdownのコードブロックは不要です。

      {
        "keywords": ["象徴的な言葉1", "象徴的な言葉2"],
        "title": "夢を象徴するキャッチーな一言（例：「未知への扉が開く予感」）",
        "summary": "この夢が教えてくれる、今のあなたの状態、この夢は「〜」を表しています。（アドバイスは含めない）",
        "advice": "夢の表す意味を踏まえた簡潔で前向きなアドバイス（200文字程度）"
      }

    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 万が一Markdownが含まれていた場合のクリーニング
    const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    
    const analysis = JSON.parse(cleanText);
    let dreamId = null;

    // Supabaseに保存（ログインしていればuser_idを紐付け、そうでなければ匿名で保存）
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
      { error: "診断中にエラーが発生しました。" },
      { status: 500 }
    );
  }
}
