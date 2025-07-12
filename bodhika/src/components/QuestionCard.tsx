import Link from 'next/link';

interface Question {
  id: number;
  title: string;
  content: string;
  author: string;
  votes: number;
  answers: number;
  tags: string[];
  createdAt: string;
}

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Vote Stats */}
        <div className="flex flex-col items-center space-y-2 min-w-[60px]">
          <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-900">{question.votes}</span>
          <span className="text-xs text-gray-500">votes</span>
        </div>

        {/* Question Content */}
        <div className="flex-1">
          <Link href={`/questions/${question.id}`} className="block">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors mb-2">
              {question.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {question.content}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {question.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              <span>Asked by {question.author}</span>
              <span>{question.createdAt}</span>
            </div>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>{question.answers} answers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 