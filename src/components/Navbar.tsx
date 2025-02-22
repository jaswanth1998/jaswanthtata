import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-semibold text-xl">
            Jaswanth Tata
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="hover:text-blue-600 transition-colors">
                Home
              </a>
              <a
                href="#about"
                className="hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
              <div className="flex space-x-4 ml-4">
                <a href="https://github.com/jaswanth1998?tab=overview&from=2025-02-01&to=2025-02-08" target="blank">
                <Github className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/jaswanthtata" target="blank">
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                </a>
                <a href="mailto:jaswanthtata@gmail.com">
                <Mail className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 hover:text-blue-600">
              About
            </a>
            <a href="#contact" className="block px-3 py-2 hover:text-blue-600">
              Contact
            </a>
            <div className="flex space-x-4 px-3 py-2">
              <Github className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <Linkedin className="w-5 h-5 cursor-pointer hover:text-blue-600" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
