import { Home, List, Pencil, Users, Bell, Search } from 'lucide-react';
import Link from 'next/link';

const navStagger = [0.1, 0.2, 0.3, 0.4, 0.5];

export default function QuoraHeader() {
  return (
    <header className="w-full bg-[#18191a] h-16 flex items-center px-6 shadow-lg z-50 border-b border-gray-800/50">
      {/* Logo/Title (Clickable) */}
      <div className="flex items-center mr-6 min-w-[200px] animate-fade-in-up-spring" style={{animationDelay: '0.05s'}}>
        <Link href="/" className="flex items-center group">
          <span className="text-3xl font-bold text-white font-sans select-none group-hover:text-blue-400 transition-all duration-300 ease-out transform group-hover:scale-105 group-active:animate-pop">
            B<span className="inline-block text-green-400">o</span>dhika
          </span>
          <span className="ml-2 text-gray-400 text-base font-normal group-hover:text-blue-400 transition-all duration-300 ease-out opacity-80 group-hover:opacity-100">Q&amp;A Platform</span>
        </Link>
      </div>
      
      {/* Professional Search Bar (Dark) */}
      <div className="flex-1 flex justify-center animate-fade-in-up-spring" style={{animationDelay: '0.15s'}}>
        <div className="relative w-[320px] group">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-all duration-300 group-focus-within:text-blue-400">
            <Search className="w-5 h-5 text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-[#232527] text-gray-100 placeholder-gray-400 rounded-full shadow-sm border border-[#232527] focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ease-out hover:border-gray-600 focus:border-blue-500 focus:bg-[#2a2c2e] transform hover:scale-[1.02]"
          />
        </div>
      </div>
      
      {/* Navigation Icons (Dark, Clickable) */}
      <div className="flex items-center gap-8 ml-8">
        <Link href="/" className="relative flex flex-col items-center group focus:outline-none transform hover:scale-110 transition-all duration-200 ease-out group-active:animate-pop animate-fade-in-up-spring" style={{animationDelay: `${navStagger[0]}s`}}>
          <Home className="text-blue-500 w-7 h-7 group-hover:text-blue-400 transition-all duration-200" />
          {/* Removed the blue underline below the Home icon */}
        </Link>
        
        <Link href="/feed" className="relative flex flex-col items-center group focus:outline-none transform hover:scale-110 transition-all duration-200 ease-out group-active:animate-pop animate-fade-in-up-spring" style={{animationDelay: `${navStagger[1]}s`}}>
          <List className="w-7 h-7 text-gray-300 group-hover:text-blue-400 transition-all duration-200" />
          {/* Removed the blue line above the Feed icon */}
        </Link>
        
        <Link href="/answer" className="flex flex-col items-center group focus:outline-none transform hover:scale-110 transition-all duration-200 ease-out group-active:animate-pop animate-fade-in-up-spring" style={{animationDelay: `${navStagger[2]}s`}}>
          <Pencil className="w-7 h-7 text-gray-300 group-hover:text-blue-400 transition-all duration-200" />
        </Link>
        
        {/* Spaces Icon with Tooltip and Accessibility */}
        <div className="relative flex flex-col items-center group animate-fade-in-up-spring" style={{animationDelay: `${navStagger[3]}s`}}>
          <Link
            href="/spaces"
            aria-label="Spaces"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full transform hover:scale-110 transition-all duration-200 ease-out group-active:animate-pop"
            tabIndex={0}
          >
            <Users className="w-7 h-7 text-gray-300 group-hover:text-green-400 transition-all duration-200 drop-shadow-sm" />
          </Link>
          {/* Tooltip */}
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded bg-[#232527] text-xs text-gray-200 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-gray-700 select-none">
            Spaces
          </span>
        </div>
        
        <Link href="/notifications" className="relative flex flex-col items-center group focus:outline-none transform hover:scale-110 transition-all duration-200 ease-out group-active:animate-pop animate-fade-in-up-spring" style={{animationDelay: `${navStagger[4]}s`}}>
          <Bell className="w-7 h-7 text-gray-300 group-hover:text-blue-400 transition-all duration-200" />
          {/* Removed the blue line above the Notification icon */}
          <span className="absolute -top-2 -right-3 bg-blue-500 text-xs text-white rounded-full px-2 py-0.5 font-bold animate-bounce" />
        </Link>
      </div>
      
      {/* Ask Question Button (Dark) and Login */}
      <div className="flex items-center gap-3 min-w-[200px] justify-end ml-8 animate-fade-in-up-spring" style={{animationDelay: '0.65s'}}>
        <button className="flex items-center bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300 ease-out shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-2 focus:ring-blue-400 focus:outline-none hover:-translate-y-0.5 active:animate-pop">
          Ask Question
        </button>
        {/* Removed duplicate List (feed) icon here */}
        {/* Login Button */}
        <Link href="/login" className="ml-4">
          <button className="flex items-center px-5 py-2 rounded-xl border border-blue-500 text-blue-500 font-semibold bg-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 shadow focus:ring-2 focus:ring-blue-400 focus:outline-none active:animate-pop">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
} 