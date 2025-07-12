import Image from 'next/image';

const spaces = [
  {
    name: 'GATE-ISRO',
    followers: '3.8K',
    description: 'This space contains details related to GATE and ISRO preparation',
    avatar: 'https://i.imgur.com/8Km9tLL.png',
  },
  {
    name: 'Mathematics and Physics',
    followers: '1M',
    description: 'The space is about the beauty of physics and mathematics.',
    avatar: 'https://i.imgur.com/1bX5QH6.png',
  },
  {
    name: '1st yr MBBS Guide',
    followers: '7.7K',
    description: 'A Space specially curated for guiding the 1st yr Medicos.',
    avatar: 'https://i.imgur.com/5cKQF3C.png',
  },
];

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-[#18191a] flex flex-col items-center py-12 px-2 sm:px-0">
      {/* Top Illustration and Headline */}
      <div className="flex flex-col items-center justify-center mb-12 w-full">
        {/* Placeholder illustration */}
        <div className="mb-6">
          <svg width="96" height="96" fill="none" viewBox="0 0 96 96">
            <rect x="20" y="60" width="56" height="16" rx="8" fill="#232527" />
            <rect x="36" y="36" width="24" height="24" rx="12" fill="#232527" />
            <circle cx="48" cy="48" r="12" fill="#35373a" />
            <circle cx="48" cy="48" r="6" fill="#232527" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center">Build your new following feed</h2>
        <p className="text-gray-400 text-base text-center max-w-xl">Follow some Spaces to start discovering stories in your feed.</p>
      </div>

      {/* Discover Spaces Section */}
      <div className="w-full max-w-2xl bg-[#202124] rounded-2xl shadow-xl border border-[#232527]/60 p-8">
        <h3 className="text-xl font-bold text-white mb-6">Discover Spaces</h3>
        <div className="mb-2 text-gray-300 font-medium">Spaces you might like</div>
        <div className="divide-y divide-[#232527]">
          {spaces.map((space) => (
            <div key={space.name} className="flex items-center gap-4 py-5">
              <div className="flex-shrink-0">
                <Image
                  src={space.avatar}
                  alt={space.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-[#35373a]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base font-semibold text-white truncate">{space.name}</span>
                  <span className="text-xs text-gray-400 font-medium">{space.followers} followers</span>
                </div>
                <div className="text-sm text-gray-400 truncate">{space.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 