'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Moon, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

type DreamDate = {
  id: string;
  date: string;
  title?: string;
};

type Props = {
  dreams: DreamDate[];
  selectedMonth?: string; // "2026-01" 形式
};

export default function DreamCalendar({ dreams, selectedMonth }: Props) {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(() => {
    if (selectedMonth) {
      const [year, month] = selectedMonth.split('-').map(Number);
      return new Date(year, month - 1, 1);
    }
    return new Date();
  });
  const [selectedDay, setSelectedDay] = useState<{ day: number; dreams: DreamDate[] } | null>(null);
  const [popupPosition, setPopupPosition] = useState<{ top: number; left: number } | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 月の最初の日と最後の日を取得
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  // 月の最初の日の曜日（0: 日曜日）
  const startDay = firstDayOfMonth.getDay();
  
  // 月の日数
  const daysInMonth = lastDayOfMonth.getDate();

  // 夢のある日をマップ化
  const dreamsByDate = useMemo(() => {
    const map: Record<string, DreamDate[]> = {};
    dreams.forEach((dream) => {
      const date = new Date(dream.date);
      const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      if (!map[key]) {
        map[key] = [];
      }
      map[key].push(dream);
    });
    return map;
  }, [dreams]);

  // ポップアップ外クリックで閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setSelectedDay(null);
        setPopupPosition(null);
      }
    };

    if (selectedDay) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedDay]);

  // 前月へ
  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDay(null);
    setPopupPosition(null);
  };

  // 次月へ
  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDay(null);
    setPopupPosition(null);
  };

  // 今日かどうか
  const isToday = (day: number) => {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  };

  // 日付クリック時の処理
  const handleDayClick = (day: number, dreamsOnDay: DreamDate[], event: React.MouseEvent) => {
    if (dreamsOnDay.length === 1) {
      // 1件の場合は直接遷移（Linkで処理）
      return;
    }
    
    // 複数件の場合はポップアップを表示
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const calendarRect = (event.currentTarget as HTMLElement).closest('.calendar-container')?.getBoundingClientRect();
    
    if (calendarRect) {
      setPopupPosition({
        top: rect.bottom - calendarRect.top + 8,
        left: Math.max(0, rect.left - calendarRect.left - 50),
      });
    }
    
    setSelectedDay({ day, dreams: dreamsOnDay });
  };

  // カレンダーの日付を生成
  const calendarDays = [];
  
  // 前月の空白
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  
  // 当月の日付
  for (let day = 1; day <= daysInMonth; day++) {
    const key = `${year}-${month}-${day}`;
    const dreamsOnDay = dreamsByDate[key] || [];
    calendarDays.push({ day, dreams: dreamsOnDay });
  }

  const monthNames = [
    '1月', '2月', '3月', '4月', '5月', '6月',
    '7月', '8月', '9月', '10月', '11月', '12月'
  ];

  const dayNames = ['日', '月', '火', '水', '木', '金', '土'];

  // 時刻をフォーマット
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative calendar-container">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevMonth}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-400" />
        </button>
        <button
          onClick={() => {
            const monthStr = `${year}-${String(month + 1).padStart(2, '0')}`;
            router.push(`/dashboard?month=${monthStr}`);
          }}
          className="text-lg font-bold text-white hover:text-purple-300 transition-colors"
        >
          {year}年 {monthNames[month]}
        </button>
        <button
          onClick={nextMonth}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* 曜日ヘッダー */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day, i) => (
          <div
            key={day}
            className={`text-center text-xs font-medium py-2 ${
              i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-gray-500'
            }`}
          >
            {day}
          </div>
        ))}
      </div>

      {/* カレンダーグリッド */}
      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((item, index) => {
          if (!item) {
            return <div key={`empty-${index}`} className="aspect-square" />;
          }

          const { day, dreams: dreamsOnDay } = item;
          const hasDream = dreamsOnDay.length > 0;
          const hasMultiple = dreamsOnDay.length > 1;
          const dayOfWeek = (startDay + day - 1) % 7;

          if (hasDream) {
            // 1件の場合はLinkで直接遷移
            if (!hasMultiple) {
              return (
                <Link
                  key={day}
                  href={`/result/${dreamsOnDay[0].id}`}
                  className={`aspect-square flex flex-col items-center justify-center rounded-lg transition-all relative group
                    ${isToday(day) ? 'ring-2 ring-purple-500' : ''}
                    bg-purple-500/20 hover:bg-purple-500/40 cursor-pointer
                  `}
                >
                  <span
                    className={`text-sm font-medium ${
                      dayOfWeek === 0 ? 'text-red-300' : dayOfWeek === 6 ? 'text-blue-300' : 'text-white'
                    }`}
                  >
                    {day}
                  </span>
                  <Moon className="w-3 h-3 text-purple-300 mt-0.5" />
                  {/* ホバー時のツールチップ */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    {dreamsOnDay[0].title || '夢占い結果'}
                  </div>
                </Link>
              );
            }

            // 複数件の場合はクリックでポップアップ
            return (
              <button
                key={day}
                onClick={(e) => handleDayClick(day, dreamsOnDay, e)}
                className={`aspect-square flex flex-col items-center justify-center rounded-lg transition-all relative group
                  ${isToday(day) ? 'ring-2 ring-purple-500' : ''}
                  ${selectedDay?.day === day ? 'bg-purple-500/50' : 'bg-purple-500/20 hover:bg-purple-500/40'}
                  cursor-pointer
                `}
              >
                <span
                  className={`text-sm font-medium ${
                    dayOfWeek === 0 ? 'text-red-300' : dayOfWeek === 6 ? 'text-blue-300' : 'text-white'
                  }`}
                >
                  {day}
                </span>
                <Moon className="w-3 h-3 text-purple-300 mt-0.5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full text-[10px] flex items-center justify-center text-white">
                  {dreamsOnDay.length}
                </span>
              </button>
            );
          }

          return (
            <div
              key={day}
              className={`aspect-square flex items-center justify-center rounded-lg
                ${isToday(day) ? 'ring-2 ring-purple-500/50' : ''}
                hover:bg-white/5
              `}
            >
              <span
                className={`text-sm ${
                  dayOfWeek === 0 ? 'text-red-400/60' : dayOfWeek === 6 ? 'text-blue-400/60' : 'text-gray-500'
                }`}
              >
                {day}
              </span>
            </div>
          );
        })}
      </div>

      {/* 凡例 */}
      <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-center gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <Moon className="w-3 h-3 text-purple-300" />
          <span>夢の記録あり</span>
        </div>
      </div>

      {/* ポップアップ */}
      {selectedDay && popupPosition && (
        <div
          ref={popupRef}
          className="absolute z-20 bg-gray-900 border border-white/20 rounded-xl shadow-xl min-w-[200px] max-w-[280px]"
          style={{
            top: popupPosition.top,
            left: popupPosition.left,
          }}
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <span className="text-sm font-bold text-white">
              {month + 1}月{selectedDay.day}日の記録
            </span>
            <button
              onClick={() => {
                setSelectedDay(null);
                setPopupPosition(null);
              }}
              className="p-1 hover:bg-white/10 rounded transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          <div className="p-2">
            {selectedDay.dreams.map((dream, index) => (
              <Link
                key={dream.id}
                href={`/result/${dream.id}`}
                className="block px-3 py-2 rounded-lg hover:bg-purple-500/20 transition-colors"
                onClick={() => {
                  setSelectedDay(null);
                  setPopupPosition(null);
                }}
              >
                <p className="text-sm text-white font-medium line-clamp-1">
                  {dream.title || `夢占い結果 ${index + 1}`}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {formatTime(dream.date)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
