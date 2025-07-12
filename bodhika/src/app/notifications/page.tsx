import { Bell } from 'lucide-react';

const filters = [
  'All Notifications',
  'Stories',
  'Questions',
  'Spaces',
  'People updates',
  'Comments and mentions',
  'Upvotes',
  'Your content',
  'Your profile',
  'Announcements',
  'Earnings',
  'Subscriptions',
];

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#18191a] flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex flex-1 pt-10 pb-20 px-2 sm:px-6 lg:px-8">
        {/* Sidebar */}
        <aside className="w-64 pr-8 border-r border-[#232527] hidden md:block">
          <h2 className="text-lg font-semibold text-white mb-6">Filters</h2>
          <nav className="flex flex-col gap-1">
            {filters.map((filter, idx) => (
              <button
                key={filter}
                className={`text-left px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${idx === 0
                    ? 'bg-[#23191a]/60 text-red-400 shadow-inner border-l-4 border-red-700'
                    : 'text-gray-200 hover:bg-[#232527] hover:text-white'}
                `}
              >
                {filter}
              </button>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <div className="flex w-full justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">Notifications</h1>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm font-medium transition">Settings</a>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <Bell className="w-24 h-24 text-gray-600 mb-6 opacity-40" strokeWidth={1.5} />
            <h2 className="text-2xl font-bold text-white mb-2">No New Notifications</h2>
            <p className="text-gray-400 text-base max-w-md">
              Notifications you received in the last 30 days will show up here.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
} 