import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeSpeed, setTypeSpeed] = useState(150);
  
  const roles = ['Web Developer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypeSpeed(75);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypeSpeed(150);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };
    const timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typeSpeed, roles]);

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Name Animation */}
          <div className="mb-8">
            <h1 
              className={`text-6xl md:text-8xl font-black text-white mb-4 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #60a5fa 50%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0 0 30px rgba(168, 85, 247, 0.3)'
              }}
            >
              ARPIT
            </h1>
            
            {/* Animated Role Text */}
            <div className="h-16 flex items-center justify-center">
              <p 
                className={`text-2xl md:text-3xl text-gray-300 font-light transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                I'm a{' '}
                <span 
                  className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
                >
                  {currentText}
                  <span className="animate-pulse text-purple-400">|</span>
                </span>
              </p>
            </div>
          </div>

          {/* Description */}
          <p 
            className={`text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Passionate about creating innovative web solutions and efficient C programs. 
            I love turning complex problems into simple, beautiful designs.
          </p>

          {/* Compact Animated Buttons */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 animate-border-glow"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <span>View My Work</span>
              </span>
            </a>
            
            <a 
              href="#contact" 
              className="group relative px-8 py-3 border-2 border-white text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex items-center space-x-2">
                <Mail size={18} />
                <span>Get In Touch</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 animate-bounce-gentle"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
  <a href="#projects" data-cursor-magnetic data-cursor-size="80">
  See My Work →
</a>

};

export default Hero;