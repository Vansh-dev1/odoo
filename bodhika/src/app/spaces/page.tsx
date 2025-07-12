import Image from 'next/image';
import { Home, Bookmark, FileText, Users, Bell, Search, User, Globe, ChevronDown, Plus } from 'lucide-react';

const spaces = [
  {
    name: '1st yr MBBS Guide',
    description: 'A Space specially curated for guiding the 1st yr Medicos.',
    avatar: 'https://i.imgur.com/5cKQF3C.png',
  },
  {
    name: 'Mathematics and Physics',
    description: 'The space is about the beauty of physics and mathematics.',
    avatar: 'https://i.imgur.com/1bX5QH6.png',
  },
  {
    name: 'SSC Aspirants',
    description: '"Excel in SSC exam with our expert guidance. Join now!"',
    avatar: 'https://i.imgur.com/8Km9tLL.png',
  },
  {
    name: 'MISSION NEET',
    description: 'This space is made for NEET Aspirants. Share your experience | Ask your Doubts',
    avatar: 'https://i.imgur.com/2yaf2wb.png',
  },
];

export default function SpacesPage() {
  return (
    <div className="min-h-screen bg-[#111214] flex flex-col">
      {/* Main Content Layout (header removed) */}
      <div className="flex flex-1 w-full max-w-7xl mx-auto pt-10 px-4 gap-8">
        {/* Main Section */}
        <main className="flex-1 flex flex-col gap-8">
          {/* Welcome Card */}
          <div className="bg-[#18191a] rounded-2xl shadow border border-[#232527] p-6 flex items-center justify-between mb-4 relative overflow-hidden">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Welcome to Spaces!</h2>
              <p className="text-gray-400 mb-4">Follow Spaces to explore your interests on Quora.</p>
              <div className="flex gap-3">
                <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-400 font-semibold bg-[#18191a] hover:bg-blue-900/30 transition">Create a Space</button>
                <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-400 font-semibold bg-[#18191a] hover:bg-blue-900/30 transition">Discover Spaces</button>
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-0 h-full">
              {/* Abstract illustration */}
              <svg width="220" height="120" viewBox="0 0 220 120" fill="none"><rect x="20" y="60" width="56" height="16" rx="8" fill="#38bdf8"/><rect x="100" y="36" width="24" height="24" rx="12" fill="#fbbf24"/><circle cx="180" cy="48" r="24" fill="#34d399"/><circle cx="160" cy="100" r="16" fill="#f472b6"/><rect x="140" y="20" width="32" height="12" rx="6" fill="#6366f1"/></svg>
            </div>
          </div>

          {/* Discover Spaces Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Discover Spaces</h3>
            <div className="text-gray-400 mb-6 font-medium">Spaces you might like</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {spaces.map((space) => (
                <div key={space.name} className="bg-[#18191a] rounded-2xl shadow border border-[#232527] p-5 flex flex-col items-center text-center">
                  <Image
                    src={space.avatar}
                    alt={space.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover border-2 border-[#232527] mb-3"
                  />
                  <div className="font-bold text-white mb-1 text-base">{space.name}</div>
                  <div className="text-gray-400 text-sm mb-1">{space.description}</div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[320px] flex flex-col gap-6">
          {/* Pending Invites Card */}
          <div className="bg-[#18191a] rounded-2xl shadow border border-[#232527] p-6 flex flex-col items-center">
            <div className="font-semibold text-white mb-2">Pending Invites</div>
            <div className="flex flex-col items-center justify-center py-6">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40"><rect x="8" y="16" width="24" height="8" rx="4" fill="#232527"/><rect x="16" y="8" width="8" height="8" rx="4" fill="#232527"/></svg>
              <div className="text-gray-500 text-sm mt-4 mb-2 text-center">No invites</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 