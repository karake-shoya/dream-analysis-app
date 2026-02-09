'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { Settings, User as UserIcon, Lock, Trash2, Loader2, Check, AlertTriangle } from 'lucide-react';
import { getDisplayName, getAvatarUrl } from '@/lib/user';

export default function SettingsPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const [displayName, setDisplayName] = useState('');
  const [savingName, setSavingName] = useState(false);
  const [nameMessage, setNameMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [savingPassword, setSavingPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState('');
  const [deletePassword, setDeletePassword] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push('/');
        return;
      }
      setUser(user);
      setDisplayName(getDisplayName(user));
      setLoading(false);
    };
    getUser();
  }, [supabase, router]);

  const isOAuthUser = user?.app_metadata?.provider === 'google';

  const handleSaveDisplayName = async () => {
    if (!displayName.trim()) {
      setNameMessage({ type: 'error', text: '表示名を入力してください' });
      return;
    }

    setSavingName(true);
    setNameMessage(null);

    try {
      const { error } = await supabase.auth.updateUser({
        data: { display_name: displayName.trim() },
      });

      if (error) throw error;

      setNameMessage({ type: 'success', text: '表示名を更新しました' });
      router.refresh();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'エラーが発生しました';
      setNameMessage({ type: 'error', text: errorMessage });
    } finally {
      setSavingName(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setPasswordMessage({ type: 'error', text: 'パスワードは6文字以上で入力してください' });
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordMessage({ type: 'error', text: '新しいパスワードが一致しません' });
      return;
    }

    setSavingPassword(true);
    setPasswordMessage(null);

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      setPasswordMessage({ type: 'success', text: 'パスワードを変更しました' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'エラーが発生しました';
      setPasswordMessage({ type: 'error', text: errorMessage });
    } finally {
      setSavingPassword(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmText !== '削除する') {
      setDeleteMessage({ type: 'error', text: '「削除する」と入力してください' });
      return;
    }

    if (!isOAuthUser && !deletePassword) {
      setDeleteMessage({ type: 'error', text: '現在のパスワードを入力してください' });
      return;
    }

    setDeleting(true);
    setDeleteMessage(null);

    try {
      const res = await fetch('/api/account/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: deletePassword }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'アカウントの削除に失敗しました');
      }

      await supabase.auth.signOut();
      router.push('/');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'エラーが発生しました';
      setDeleteMessage({ type: 'error', text: errorMessage });
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen text-white p-4 pt-24 bg-[#0f172a] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
      </div>
    );
  }

  const avatarUrl = getAvatarUrl(user);

  return (
    <div className="min-h-screen text-white p-4 pt-24 bg-[#0f172a]">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-8">
          <Settings className="w-8 h-8 text-purple-300" />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-200 via-indigo-200 to-blue-200 font-display">
            セキュリティ設定
          </span>
        </h1>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-purple-400" />
              表示名の変更
            </h2>

            <div className="flex items-center gap-4 mb-4">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={displayName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/30"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-purple-500/30 flex items-center justify-center border-2 border-purple-500/30">
                  <UserIcon className="w-8 h-8 text-purple-300" />
                </div>
              )}
              <div>
                <p className="text-gray-400 text-sm">現在の表示名</p>
                <p className="text-white font-medium">{getDisplayName(user)}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">新しい表示名</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder="表示名を入力"
                />
              </div>

              {nameMessage && (
                <div className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                  nameMessage.type === 'success'
                    ? 'bg-green-500/10 text-green-300 border border-green-500/20'
                    : 'bg-red-500/10 text-red-300 border border-red-500/20'
                }`}>
                  {nameMessage.type === 'success' ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                  {nameMessage.text}
                </div>
              )}

              <button
                onClick={handleSaveDisplayName}
                disabled={savingName}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {savingName ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                保存する
              </button>
            </div>
          </div>

          {!isOAuthUser && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5 text-purple-400" />
                パスワードの変更
              </h2>

              <form onSubmit={handleChangePassword} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">新しいパスワード</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="6文字以上"
                    minLength={6}
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">新しいパスワード（確認）</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    placeholder="もう一度入力"
                    minLength={6}
                  />
                </div>

                {passwordMessage && (
                  <div className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                    passwordMessage.type === 'success'
                      ? 'bg-green-500/10 text-green-300 border border-green-500/20'
                      : 'bg-red-500/10 text-red-300 border border-red-500/20'
                  }`}>
                    {passwordMessage.type === 'success' ? <Check className="w-4 h-4" /> : <AlertTriangle className="w-4 h-4" />}
                    {passwordMessage.text}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={savingPassword || !newPassword || !confirmPassword}
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {savingPassword ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                  パスワードを変更
                </button>
              </form>
            </div>
          )}

          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-red-300 mb-4 flex items-center gap-2">
              <Trash2 className="w-5 h-5" />
              アカウントの削除
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              アカウントを削除すると、全ての夢の記録と診断結果が完全に削除されます。この操作は取り消せません。
            </p>

            {!showDeleteConfirm ? (
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="px-6 py-2.5 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-xl font-medium transition-colors border border-red-500/30"
              >
                アカウントを削除する
              </button>
            ) : (
              <div className="space-y-4 bg-black/20 rounded-xl p-4 border border-red-500/30">
                <p className="text-red-200 text-sm font-medium">
                  本当に削除しますか？確認のため「削除する」と入力してください。
                </p>

                {!isOAuthUser && (
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">現在のパスワード</label>
                    <input
                      type="password"
                      value={deletePassword}
                      onChange={(e) => setDeletePassword(e.target.value)}
                      className="w-full bg-black/30 border border-red-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      placeholder="現在のパスワード"
                    />
                  </div>
                )}

                <input
                  type="text"
                  value={deleteConfirmText}
                  onChange={(e) => setDeleteConfirmText(e.target.value)}
                  className="w-full bg-black/30 border border-red-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                  placeholder="削除する"
                />

                {deleteMessage && (
                  <div className="p-3 rounded-lg text-sm flex items-center gap-2 bg-red-500/10 text-red-300 border border-red-500/20">
                    <AlertTriangle className="w-4 h-4" />
                    {deleteMessage.text}
                  </div>
                )}

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setShowDeleteConfirm(false);
                      setDeleteConfirmText('');
                      setDeletePassword('');
                      setDeleteMessage(null);
                    }}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors"
                  >
                    キャンセル
                  </button>
                  <button
                    onClick={handleDeleteAccount}
                    disabled={deleting || deleteConfirmText !== '削除する' || (!isOAuthUser && !deletePassword)}
                    className="px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-medium transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    完全に削除する
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
