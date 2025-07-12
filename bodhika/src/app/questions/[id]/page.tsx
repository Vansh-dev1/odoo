'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Answer {
  id: number;
  content: string;
  author: string;
  votes: number;
  createdAt: string;
  isAccepted: boolean;
}

interface Question {
  id: number;
  title: string;
  content: string;
  author: string;
  votes: number;
  answers: Answer[];
  tags: string[];
  createdAt: string;
}

export default function QuestionDetail({ params }: { params: { id: string } }) {
  const [newAnswer, setNewAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data - in a real app, this would come from an API
  const question: Question = {
    id: parseInt(params.id),
    title: "How to implement authentication in Next.js?",
    content: `I'm building a web application and need to add user authentication. I've been looking at different options like NextAuth.js, Auth0, and custom solutions.

What are the best practices for implementing authentication in Next.js? I'm particularly interested in:

1. Session management
2. JWT tokens vs server-side sessions
3. Integration with databases
4. Security considerations

I'm using Next.js 13 with the app router and TypeScript. Any recommendations would be greatly appreciated!`,
    author: "John Doe",
    votes: 42,
    answers: [
      {
        id: 1,
        content: `NextAuth.js is definitely the most popular and well-maintained solution for authentication in Next.js. Here's how to get started:

1. Install NextAuth.js:
\`\`\`bash
npm install next-auth
\`\`\`

2. Set up your authentication providers in \`pages/api/auth/[...nextauth].js\`:
\`\`\`javascript
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})
\`\`\`

3. Wrap your app with SessionProvider in \`_app.js\`:
\`\`\`javascript
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
\`\`\`

This gives you a solid foundation with session management, JWT handling, and security best practices built-in.`,
        author: "Sarah Wilson",
        votes: 15,
        createdAt: "1 hour ago",
        isAccepted: true
      },
      {
        id: 2,
        content: `For a custom solution, you can use JWT tokens with HTTP-only cookies for security. Here's a basic implementation:

\`\`\`typescript
// lib/auth.ts
import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export function createToken(userId: string) {
  return jwt.sign({ userId }, process.env.JWT_SECRET!, { expiresIn: '7d' })
}

export function setAuthCookie(token: string) {
  const cookie = serialize('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: '/',
  })
  return cookie
}
\`\`\`

This approach gives you full control but requires more setup and security considerations.`,
        author: "Mike Johnson",
        votes: 8,
        createdAt: "3 hours ago",
        isAccepted: false
      }
    ],
    tags: ["nextjs", "authentication", "javascript"],
    createdAt: "2 hours ago"
  };

  const handleSubmitAnswer = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnswer.trim()) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Submitting answer:', newAnswer);
    setNewAnswer('');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Question */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
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
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{question.title}</h1>
              <div className="prose max-w-none mb-4">
                <p className="text-gray-700 whitespace-pre-wrap">{question.content}</p>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors cursor-pointer"
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
              </div>
            </div>
          </div>
        </div>

        {/* Answers */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {question.answers.length} Answer{question.answers.length !== 1 ? 's' : ''}
          </h2>
          
          <div className="space-y-6">
            {question.answers.map((answer) => (
              <div key={answer.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex gap-4">
                  {/* Vote Stats */}
                  <div className="flex flex-col items-center space-y-2 min-w-[60px]">
                    <button className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </button>
                    <span className="text-lg font-semibold text-gray-900">{answer.votes}</span>
                    <span className="text-xs text-gray-500">votes</span>
                    {answer.isAccepted && (
                      <div className="text-green-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Answer Content */}
                  <div className="flex-1">
                    <div className="prose max-w-none mb-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{answer.content}</p>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span>Answered by {answer.author}</span>
                        <span>{answer.createdAt}</span>
                      </div>
                      {!answer.isAccepted && (
                        <button className="text-green-600 hover:text-green-700 font-medium">
                          Accept Answer
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Answer */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Answer</h3>
          <form onSubmit={handleSubmitAnswer}>
            <textarea
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              rows={8}
              placeholder="Write your answer here..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical mb-4"
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting || !newAnswer.trim()}
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Posting Answer...' : 'Post Answer'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 