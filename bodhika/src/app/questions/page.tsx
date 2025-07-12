import Link from 'next/link';
import { QuestionCard } from '@/components/QuestionCard';

export default function QuestionsPage() {
  const questions = [
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
    },
    {
      id: 4,
      title: "How to optimize images in Next.js?",
      content: "I'm using Next.js Image component but my images are still loading slowly. What are the best practices for image optimization?",
      author: "Sarah Wilson",
      votes: 19,
      answers: 4,
      tags: ["nextjs", "optimization", "images"],
      createdAt: "3 days ago"
    },
    {
      id: 5,
      title: "Understanding React Context vs Redux",
      content: "When should I use React Context and when should I use Redux? What are the trade-offs between these state management solutions?",
      author: "Alex Brown",
      votes: 31,
      answers: 9,
      tags: ["react", "redux", "context", "state-management"],
      createdAt: "4 days ago"
    },
    {
      id: 6,
      title: "Setting up TypeScript with Node.js",
      content: "I want to use TypeScript in my Node.js project. What's the best way to set it up and configure it properly?",
      author: "David Lee",
      votes: 15,
      answers: 3,
      tags: ["typescript", "nodejs", "setup"],
      createdAt: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Questions</h1>
          <p className="text-gray-600 mt-2">Browse through all questions asked by our community</p>
        </div>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Most Recent</option>
            <option>Most Voted</option>
            <option>Most Answered</option>
            <option>Unanswered</option>
          </select>
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <nav className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 disabled:opacity-50">
            Previous
          </button>
          <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">2</button>
          <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">3</button>
          <span className="px-3 py-2 text-sm text-gray-500">...</span>
          <button className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">10</button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
} 