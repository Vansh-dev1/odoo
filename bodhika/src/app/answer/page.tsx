import { Pencil, X, MoreHorizontal, Rss, CheckCircle, Plus } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    title: 'Is AI going to replace marketers and salespeople in the next 3 years?',
    subtitle: 'No answer yet · Last followed 23m',
    followCount: 1,
    lastFollowed: '23m',
  },
  {
    id: 2,
    title: 'How can I attract money in 6 weeks?',
    subtitle: 'No answer yet · Last followed 6m',
    followCount: 2,
    lastFollowed: '6m',
  },
  {
    id: 3,
    title: 'How would education systems change if we could download knowledge directly into the brain?',
    subtitle: 'No answer yet · Last followed 9m',
    followCount: 1,
    lastFollowed: '9m',
  },
];

export default function AnswerPage() {
  return (
    <div className="min-h-screen bg-[#18191a] flex flex-row justify-center">
      {/* Left Sidebar */}
      <aside className="w-60 bg-[#18191a] border-r border-[#232527] flex flex-col pt-10 px-4 gap-2">
        <nav className="flex flex-col gap-1">
          <button className="text-left px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-red-900/30 text-red-400 border-l-4 border-red-700 shadow-inner">Questions for you</button>
          <button className="text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-200 hover:bg-[#232527] hover:text-white transition">Answer requests</button>
          <button className="text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-200 hover:bg-[#232527] hover:text-white transition">Drafts</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-10 overflow-y-auto min-h-screen">
        <div className="w-full max-w-2xl">
          {/* Questions for you title */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center justify-center bg-red-600/20 rounded-full p-2"><Pencil className="w-5 h-5 text-red-500" /></span>
            <h2 className="text-xl font-bold text-white">Questions for you</h2>
          </div>
          {/* Question Cards */}
          <div className="flex flex-col gap-4">
            {questions.map((q) => (
              <div key={q.id} className="relative bg-[#232527] rounded-xl shadow border border-[#232527]/60 p-6 flex flex-col gap-2">
                {/* Close button */}
                <button className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"><X className="w-5 h-5" /></button>
                {/* Question Title */}
                <Link href="#" className="text-lg font-bold text-white underline hover:text-blue-400 transition mb-1">{q.title}</Link>
                <div className="text-xs text-gray-400 mb-2">{q.subtitle}</div>
                {/* Actions */}
                <div className="flex items-center gap-3 mt-2">
                  <button className="flex items-center gap-1 px-4 py-1.5 border border-gray-500 rounded-full text-gray-200 hover:bg-gray-700 transition text-sm font-medium"><Pencil className="w-4 h-4 mr-1" /> Answer</button>
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-500 rounded-full text-gray-200 hover:bg-gray-700 transition text-sm font-medium"><Rss className="w-4 h-4 mr-1" /> Follow · {q.followCount}</button>
                  <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-500 rounded-full text-gray-200 hover:bg-gray-700 transition text-sm font-medium"><X className="w-4 h-4 mr-1" /> Pass</button>
                  <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-700 transition text-gray-400"><MoreHorizontal className="w-5 h-5" /></button>
                </div>
              </div>
            ))}
          </div>
          {/* More link */}
          <div className="flex justify-center mt-4">
            <button className="text-gray-400 hover:text-blue-400 text-sm font-medium transition flex items-center gap-1">More <MoreHorizontal className="w-4 h-4" /></button>
          </div>
          {/* Add topics section */}
          <div className="mt-8 flex items-center justify-between bg-[#202124] rounded-xl border border-[#232527]/60 p-5">
            <div>
              <div className="font-bold text-white mb-1">Add 5 topics you know about</div>
              <div className="text-gray-400 text-sm mb-2">You'll get better questions if you add more specific topics.</div>
              <button className="flex items-center gap-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition"><Plus className="w-4 h-4" /> Add topics</button>
            </div>
            <div className="flex-shrink-0 ml-4">
              {/* Abstract colorful illustration */}
              <svg width="64" height="48" viewBox="0 0 64 48" fill="none"><rect x="2" y="2" width="20" height="12" rx="6" fill="#fbbf24"/><rect x="24" y="8" width="16" height="10" rx="5" fill="#f472b6"/><rect x="44" y="2" width="18" height="14" rx="7" fill="#38bdf8"/><rect x="6" y="18" width="16" height="10" rx="5" fill="#34d399"/><rect x="26" y="22" width="20" height="12" rx="6" fill="#6366f1"/><rect x="50" y="22" width="12" height="10" rx="5" fill="#f87171"/><rect x="12" y="36" width="16" height="10" rx="5" fill="#f59e42"/><rect x="34" y="38" width="18" height="8" rx="4" fill="#10b981"/></svg>
            </div>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-[#18191a] border-l border-[#232527] flex flex-col pt-10 px-6">
        <div className="bg-[#202124] rounded-2xl border border-[#232527]/60 p-6 flex flex-col items-center">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span className="font-semibold text-white">Topics you know about</span>
          </div>
          <div className="flex flex-col items-center justify-center py-6">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48"><rect x="12" y="18" width="24" height="12" rx="6" fill="#e5e7eb"/><rect x="20" y="8" width="8" height="8" rx="4" fill="#e5e7eb"/><rect x="32" y="28" width="8" height="8" rx="4" fill="#e5e7eb"/><rect x="8" y="32" width="8" height="8" rx="4" fill="#e5e7eb"/></svg>
            <div className="text-gray-400 text-sm mt-4 mb-2 text-center">No topics yet<br />You'll get better questions if you add more specific topics.</div>
            <button className="flex items-center gap-1 px-4 py-2 border border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition mt-2"><Plus className="w-4 h-4" /> Add topics</button>
          </div>
        </div>
      </aside>
    </div>
  );
} 