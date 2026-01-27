import { ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-300 font-sans">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl font-bold text-white mb-8 border-b border-white/10 pb-4">お問い合わせ</h1>

        <div className="space-y-8 leading-relaxed">
          <p className="mb-6">
            当サイトに関するお問い合わせは、以下のメールアドレスまでお願いいたします。
          </p>

          <div className="bg-white/5 p-6 rounded-xl border border-white/10 inline-block">
             <div className="flex items-center space-x-3 text-purple-200">
                <Mail className="w-6 h-6" />
                <span className="text-lg">karake.shoya@gmail.com</span>
             </div>
             <p className="text-sm text-gray-400 mt-2">
               ※ 返信にはお時間をいただく場合がございます。
             </p>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
             <p>運営：Dream Oracle 運営事務局</p>
          </div>
        </div>
      </div>
    </div>
  );
}
