import Link from 'next/link';
import { QuestionCard } from '@/components/QuestionCard';
import { SearchBar } from '@/components/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter';
import { Star } from 'lucide-react';

export default function Home() {
  const featuredQuestions = [
    {
      id: 1,
      title: "How to implement authentication in Next.js?",
      content: "I'm building a web application and need to add user authentication. What are the best practices for implementing authentication in Next.js?",
      author: "John Doe",
      votes: 42,
      answers: 8,
      tags: ["nextjs", "authentication", "javascript"],
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      title: "What's the difference between useState and useReducer?",
      content: "I'm confused about when to use useState vs useReducer in React. Can someone explain the key differences and use cases?",
      author: "Jane Smith",
      votes: 28,
      answers: 12,
      tags: ["react", "hooks", "javascript"],
      createdAt: "5 hours ago"
    },
    {
      id: 3,
      title: "Best practices for API error handling in TypeScript",
      content: "What are the recommended patterns for handling API errors in a TypeScript application?",
      author: "Mike Johnson",
      votes: 35,
      answers: 6,
      tags: ["typescript", "api", "error-handling"],
      createdAt: "1 day ago"
    }
  ];

  const categories = [
    { name: "JavaScript", count: 1250, color: "bg-yellow-500" },
    { name: "React", count: 890, color: "bg-blue-500" },
    { name: "Next.js", count: 567, color: "bg-black" },
    { name: "TypeScript", count: 432, color: "bg-blue-600" },
    { name: "CSS", count: 789, color: "bg-pink-500" },
    { name: "Node.js", count: 654, color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen bg-[#18191a]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#232527] via-[#202124] to-[#18191a] text-white py-12 border-b border-[#232527] shadow-lg">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-2 text-white tracking-tight drop-shadow-lg">Find Answers to Your Questions</h2>
          <p className="text-lg mb-7 text-blue-200 font-medium">Join our community of developers and get help with your coding challenges</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-[#232527] to-[#202124] rounded-2xl shadow-xl p-7 w-full max-w-xs border border-[#232527]/60">
              <CategoryFilter categories={categories} />
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Featured Questions Section */}
            <section className="bg-[#202124] rounded-2xl shadow-2xl border border-[#232527]/60 px-8 py-10 mb-10">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center bg-blue-600/20 rounded-full p-2">
                    <Star className="w-6 h-6 text-blue-400" />
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Featured Questions</h3>
                </div>
                <div className="flex space-x-2 bg-[#232527] rounded-lg p-1 border border-[#232527]/80">
                  <button className="px-4 py-1.5 text-sm text-gray-200 rounded-md hover:bg-[#232527]/80 font-medium transition">Newest</button>
                  <button className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 font-semibold transition">Most Voted</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredQuestions.map((question) => (
                  <div className="bg-gradient-to-br from-[#232527] to-[#18191a] rounded-2xl shadow-xl p-7 border border-[#232527]/60 hover:border-blue-600 transition-all duration-200">
                    <QuestionCard key={question.id} question={question} />
                  </div>
                ))}
              </div>

              <div className="mt-14 text-center">
                <Link 
                  href="/questions" 
                  className="inline-flex items-center px-7 py-3 border border-blue-600 text-base font-semibold rounded-2xl text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition"
                >
                  View All Questions
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
