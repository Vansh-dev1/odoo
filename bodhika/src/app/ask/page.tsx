'use client';

import Image from 'next/image';
import { Bell } from 'lucide-react';

export default function AskQuestionPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      {/* Custom Header */}
      <header className="w-full max-w-2xl mx-auto flex items-center justify-between border border-black rounded-t-2xl px-6 py-4 mb-0" style={{ borderBottom: 'none' }}>
        <span className="text-2xl font-handwritten font-bold">StackIt</span>
        <div className="flex items-center gap-6">
          <a href="/" className="text-lg font-handwritten underline hover:no-underline">Home</a>
          <Bell className="w-6 h-6 text-black" />
          <Image src="https://i.pravatar.cc/40" alt="Profile" width={36} height={36} className="rounded-full border border-black" />
        </div>
      </header>
      {/* Main Form Card */}
      <main className="w-full max-w-2xl mx-auto border border-black rounded-b-2xl rounded-t-none bg-white px-8 py-10 flex flex-col gap-7" style={{ borderTop: 'none' }}>
        <form className="flex flex-col gap-7">
          {/* Title */}
          <div>
            <label className="block mb-2 text-lg font-handwritten">Title</label>
            <input
              type="text"
              className="w-full border border-black rounded-xl px-4 py-3 text-lg font-handwritten focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Enter your question title"
            />
          </div>
          {/* Description */}
          <div>
            <label className="block mb-2 text-lg font-handwritten">Description</label>
            {/* Rich text editor placeholder */}
            <div className="border border-black rounded-xl bg-gray-50 px-2 py-2 mb-2">
              <div className="flex items-center gap-2 px-2 py-1 border-b border-black mb-2">
                <span className="font-bold">B</span>
                <span className="italic">I</span>
                <span className="underline">U</span>
                <span className="">S</span>
                <span className="">•</span>
                <span className="">1.</span>
                <span className="">☺</span>
                <span className="">🔗</span>
                <span className="">🖼️</span>
                <span className="">≡</span>
                <span className="">≡</span>
              </div>
              <textarea
                className="w-full h-28 border-none bg-transparent resize-none font-handwritten text-base focus:outline-none"
                placeholder="Write your question description..."
              />
            </div>
          </div>
          {/* Tags */}
          <div>
            <label className="block mb-2 text-lg font-handwritten">Tags</label>
            <input
              type="text"
              className="w-full border border-black rounded-xl px-4 py-3 text-lg font-handwritten focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Add tags (comma separated)"
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center mt-2">
            <button type="submit" className="px-10 py-2 border border-black rounded-xl font-handwritten text-lg bg-white hover:bg-gray-100 transition">Submit</button>
          </div>
        </form>
      </main>
      <style jsx global>{`
        .font-handwritten {
          font-family: 'Comic Sans MS', 'Comic Sans', 'Architects Daughter', cursive;
        }
      `}</style>
    </div>
  );
} 