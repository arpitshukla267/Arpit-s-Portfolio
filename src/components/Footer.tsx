import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Code, Palette, Database } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    { icon: Code, title: 'Web Development', desc: 'Modern responsive websites' },
    { icon: Database, title: 'C Programming', desc: 'System-level solutions' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Beautiful user experiences' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="pt-20 pb-12 border-b border-white/10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <a 
                  href="#home" 
                  className="inline-block text-5xl font-black text-white hover:text-transparent hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text transition-all duration-500 tracking-wider mb-6"
                >
                  ARPIT
                </a>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mb-6"></div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Passionate developer crafting innovative digital experiences through clean code and modern design. 
                Let's build something amazing together.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center text-gray-400 hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <a href="shuklaarpit440@gmail.com" className="hover:text-blue-400 transition-colors duration-300">
                    shuklaarpit440@gmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <div className="w-5 h-5 mr-3 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <span>Available for freelance work</span>
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Services
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                  >
                    <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <service.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{service.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a 
                    key={link.name}
                    href={link.href} 
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300 py-2"
                  >
                    <div className="w-0 group-hover:w-3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-0 group-hover:mr-3 transition-all duration-300 rounded-full"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              {/* <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10">
                <h4 className="text-white font-medium mb-2 text-sm">Stay Updated</h4>
                <p className="text-gray-400 text-xs mb-3">Get notified about new projects</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-black/50 border border-gray-600 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm font-medium">
                    Join
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Links with preserved hover animations */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm font-medium">Connect:</span>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/arpitshukla267" 
                  className="w-12 h-12 bg-black border-2 border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12 group"
                  aria-label="GitHub"
                >
                  <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/arpit-shukla-9a8b54358/" 
                  className="w-12 h-12 bg-black border-2 border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                {/* <a 
                  href="#" 
                  className="w-12 h-12 bg-black border-2 border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12 group"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a> */}
                <a 
                  href="shuklaarpit440@gmail.com" 
                  className="w-12 h-12 bg-black border-2 border-white/20 rounded-lg flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-500 hover:scale-125 hover:rotate-12 group"
                  aria-label="Email"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex flex-row flex-wrap mx-[-7px] md:mx-0 items-center space-x-2 md:space-x-4 text-gray-500 text-sm">
              <p className="flex flex-row  items-center">
                Made with <Heart size={14} className="mx-2 text-red-500 animate-pulse" /> by Arpit
              </p>
              <span className="hidden md:block">•</span>
              <p>&copy; {currentYear} All rights reserved</p>
            </div>

            {/* Back to Top Button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 rounded-lg text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Decorative Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50"></div>
      </div>
    </footer>
  );
};

export default Footer;