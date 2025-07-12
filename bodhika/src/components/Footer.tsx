import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo Section - Top Center */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl font-bold text-white">B<span className="inline-block text-green-500">o</span>dhika</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto">
            Empowering developers with knowledge sharing and community-driven solutions.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Squarespace Sprints</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Custom Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">SEO Intensives</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Brand Strategy</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Location and Copyright */}
            <div className="flex flex-col items-center md:items-start space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span className="text-lg">🏳️</span>
                <span className="italic font-medium">proudly made in philly</span>
              </div>
              <div className="text-gray-500 text-xs">
                © 2024 ARC & ATLAS. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 