export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg shadow p-10 max-w-xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">About Bodhika</h1>
        <p className="text-lg text-gray-700 mb-6">
          <b>Bodhika</b> is a modern Q&amp;A platform for developers, built with Next.js and Tailwind CSS. Our mission is to help you find answers, share knowledge, and grow as a developer in a friendly community.
        </p>
        <div className="text-gray-500 text-sm">
          <p>Version 1.0.0</p>
          <p>Created by the Bodhika Team</p>
        </div>
      </div>
    </div>
  );
} 