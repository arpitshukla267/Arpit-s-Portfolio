import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/10 text-white py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <a href="#home" className="text-4xl font-black mb-6 block hover:text-gray-300 transition-colors duration-300 tracking-wider">
              ARPIT
            </a>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed">
              Creating digital experiences through innovative design and clean code. 
              Passionate about pushing the boundaries of web development.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-6 mb-6">
              <a 
                href="https://github.com/arpitshukla267" 
                className="w-14 h-14 border-2 border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arpit-shukla-9a8b54358/" 
                className="w-14 h-14 border-2 border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a> {/*
              <a 
                href="#" 
                className="w-14 h-14 border-2 border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a> */}
              <a 
                href="mailto:shuklaarpit440@gmail.com" 
                className="w-14 h-14 border-2 border-white/20 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
            
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart size={16} className="mx-2 text-red-500 animate-pulse" /> by Arpit &copy; {currentYear}
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-12">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-lg font-medium">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;