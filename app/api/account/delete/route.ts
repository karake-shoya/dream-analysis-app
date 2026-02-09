import { createClient } from "@/lib/supabase/server";
import {
  createClient as createSupabaseClient,
} from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export const runtime = "edge";

type DeleteRequestBody = {
  password?: string;
};

export async function DELETE(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "認証が必要です" },
        { status: 401 }
      );
    }

    const body = (await request.json().catch(() => ({}))) as DeleteRequestBody;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return NextResponse.json(
        { error: "サーバー設定エラー" },
        { status: 500 }
      );
    }

    const isOAuthUser = user.app_metadata?.provider === "google";
    if (!isOAuthUser) {
      if (!user.email) {
        return NextResponse.json(
          { error: "メールアドレスが確認できません" },
          { status: 400 }
        );
      }

      if (!body.password) {
        return NextResponse.json(
          { error: "削除前に現在のパスワード確認が必要です" },
          { status: 400 }
        );
      }

      const verifyClient = createSupabaseClient(supabaseUrl, anonKey, {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      });

      const { error: verifyError } = await verifyClient.auth.signInWithPassword({
        email: user.email,
        password: body.password,
      });

      if (verifyError) {
        return NextResponse.json(
          { error: "現在のパスワードが正しくありません" },
          { status: 401 }
        );
      }
    }

    const adminClient = createSupabaseClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { error: dreamsError } = await adminClient
      .from("dreams")
      .delete()
      .eq("user_id", user.id);

    if (dreamsError) {
      console.error("Dreams deletion error:", dreamsError);
    }

    const { error: deleteError } = await adminClient.auth.admin.deleteUser(user.id);

    if (deleteError) {
      console.error("User deletion error:", deleteError);
      return NextResponse.json(
        { error: "アカウントの削除に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Account deletion error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
