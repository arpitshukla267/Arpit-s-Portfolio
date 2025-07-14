import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Phone  } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-xl border-b border-gray-700/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className=" container mx-auto px-6 flex justify-between items-center mobile-menu-container">
          <a
            href="#home"
            className="text-2xl playball-regular font-bold text-white hover:text-purple-400 transition-colors duration-300"
          >
            ARPIT
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-gray-300 hover:text-white font-medium transition-all duration-500 group px-4 py-2 rounded-lg overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-lg"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm"></div>
                
                {/* Text */}
                <span className="relative z-10">{link.name}</span>
                
                {/* Animated underline */}
                <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-white transition-all duration-500 group-hover:w-8 rounded-full"></span>
                
                {/* Side glow bars */}
                <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-blue-400 transition-all duration-500 group-hover:h-6 rounded-full"></span>
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0.5 h-0 bg-white transition-all duration-500 group-hover:h-6 rounded-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-purple-400 transition-all duration-300 hover:scale-110 relative z-50"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : ''
                }`}
              />
              <span 
                className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-gray-700/50 z-50 md:hidden transform transition-all duration-500 ease-in-out mobile-menu-container ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <h2 className="text-xl font-bold text-white">Arpit</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  className={`group relative block py-4 px-4 text-gray-300 hover:text-white font-medium transition-all duration-500 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${200 + index * 100}ms` : '0ms'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  
                  {/* Text with icon */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-lg">{link.name}</span>
                    <div className="w-0 group-hover:w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 rounded-full" />
                  </div>
                  
                  {/* Left accent line */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0 group-hover:h-8 bg-gradient-to-b from-blue-400 to-purple-400 transition-all duration-300 rounded-full" />
                </a>
                
                {/* Horizontal line after each heading */}
                {index < navLinks.length - 1 && (
                  <div 
                    className={`mx-4 mt-2 h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent transition-all duration-500 ${
                      isMenuOpen ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${400 + index * 100}ms` : '0ms'
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700/50">
          <div 
            className={`text-center transition-all duration-500 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: isMenuOpen ? '600ms' : '0ms' }}
          >
            <p className="text-gray-400 text-sm mb-2">Connect with me</p>
           <div className="flex justify-center space-x-4">
  <a
    href="mailto:shuklaarpit440@gmail.com"
    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
  >
    <Mail className="w-4 h-4" />
  </a>

  <a
    href="https://www.linkedin.com/in/arpit-shukla-9a8b54358/"
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
  >
    <Linkedin className="w-4 h-4" />
  </a>

  <a
    href="tel:+916393818467"
    className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
  >
    <Phone className="w-4 h-4" />
  </a>
</div>



          </div>
        </div>
      </div>
    </>
  );
};

export default Header;