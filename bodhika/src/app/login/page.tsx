import Link from 'next/link';

const GoogleLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_993_771)">
      <path d="M19.805 10.2305C19.805 9.55078 19.7483 8.90078 19.6483 8.27344H10.2V12.0563H15.605C15.37 13.2813 14.6483 14.3125 13.605 14.9813V17.2313H16.685C18.405 15.6508 19.805 13.2313 19.805 10.2305Z" fill="#4285F4"/>
      <path d="M10.2 20C12.73 20 14.855 19.15 16.685 17.2313L13.605 14.9813C12.605 15.6313 11.405 16.0313 10.2 16.0313C7.77 16.0313 5.705 14.4313 4.965 12.2313H1.775V14.5563C3.595 17.7813 6.675 20 10.2 20Z" fill="#34A853"/>
      <path d="M4.965 12.2313C4.775 11.6813 4.66 11.0906 4.66 10.4688C4.66 9.84688 4.775 9.25625 4.965 8.70625V6.38125H1.775C1.125 7.63125 0.75 9.00078 0.75 10.4688C0.75 11.9367 1.125 13.3063 1.775 14.5563L4.965 12.2313Z" fill="#FBBC05"/>
      <path d="M10.2 4.90625C11.53 4.90625 12.73 5.36875 13.68 6.275L16.75 3.20625C14.855 1.43125 12.73 0.46875 10.2 0.46875C6.675 0.46875 3.595 2.6875 1.775 5.9125L4.965 8.2375C5.705 6.0375 7.77 4.90625 10.2 4.90625Z" fill="#EA4335"/>
    </g>
    <defs>
      <clipPath id="clip0_993_771">
        <rect width="19.06" height="19.5313" fill="white" transform="translate(0.75 0.46875)"/>
      </clipPath>
    </defs>
  </svg>
);

const FacebookLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" rx="4" fill="#1877F3"/>
    <path d="M13.333 10.8333H11.6667V16.6667H9.16667V10.8333H7.5V8.75H9.16667V7.5C9.16667 6.39583 9.89583 5 11.6667 5H13.3333V7.08333H12.25C11.9167 7.08333 11.6667 7.33333 11.6667 7.66667V8.75H13.333L13.333 10.8333Z" fill="white"/>
  </svg>
);

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#18191a]">
      <div className="flex flex-1 items-center justify-center w-full">
        {/* Login Card Section Only */}
        <div className="w-full max-w-md bg-[#232527] rounded-2xl shadow-2xl p-8 md:p-10 flex flex-col gap-6 mx-auto">
          {/* Branding */}
          <div className="flex flex-col items-center mb-2">
            <span className="text-5xl font-extrabold tracking-wide mb-1 select-none font-sans text-white drop-shadow-lg" style={{letterSpacing: '0.04em'}}>
              B
              <span className="inline-block text-green-400">o</span>
              dhika
            </span>
            <span className="text-base text-gray-100 font-medium text-center mb-2 select-none mt-1 tracking-wide" style={{textShadow: '0 2px 8px rgba(0,0,0,0.18)'}}>A place to share knowledge and better understand the world.</span>
          </div>
          {/* Social Login */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 w-full bg-black text-white border border-gray-700 rounded-lg px-4 py-2 font-semibold hover:bg-gray-900 transition">
              <span className="bg-white rounded-full p-1"><GoogleLogo /></span>
              Continue with Google
            </button>
            <button className="flex items-center gap-3 w-full bg-black text-white border border-gray-700 rounded-lg px-4 py-2 font-semibold hover:bg-gray-900 transition">
              <span className=""><FacebookLogo /></span>
              Continue with Facebook
            </button>
            <div className="text-center mt-1">
              <Link href="#" className="text-sm text-blue-400 hover:underline">Sign up with email</Link>
            </div>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-2 my-2">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-xs text-gray-500">or</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div>
          {/* Email Login Form */}
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-1">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-[#18191a] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-white mb-1">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Your password"
                className="w-full px-4 py-2 rounded-lg bg-[#18191a] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link href="#" className="text-sm text-blue-400 hover:underline">Forgot password?</Link>
              <button type="submit" className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-400">Login</button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full py-4 px-2 border-t border-gray-800 bg-[#18191a] flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400 mt-auto">
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Link href="#" className="hover:underline">About</Link>
          <Link href="#" className="hover:underline">Careers</Link>
          <Link href="#" className="hover:underline">Privacy</Link>
          <Link href="#" className="hover:underline">Terms</Link>
          <Link href="#" className="hover:underline">Contact</Link>
          <Link href="#" className="hover:underline">Languages</Link>
          <Link href="#" className="hover:underline">Your Ad Choices</Link>
          <Link href="#" className="hover:underline">Press</Link>
          <span>© Bodhika, Inc. 2025</span>
        </div>
        <div className="flex items-center gap-1">
          <span>ગુજરાતી</span>
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="inline-block"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </footer>
    </div>
  );
} 