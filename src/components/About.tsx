import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Code2, Award, User, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 85, color: 'from-blue-400 to-cyan-500' },
    { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-red-500' },
    { name: 'Tailwind', level: 80, color: 'from-green-400 to-emerald-500' },
    { name: 'C Programming', level: 88, color: 'from-purple-400 to-pink-500' },
    { name: 'C++', level: 85, color: 'from-gray-400 to-gray-600' },
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Code2 },
    { number: '2+', label: 'Years Experience', icon: Calendar },
    { number: '15+', label: 'Technologies', icon: Award },
    { number: '100%', label: 'Client Satisfaction', icon: User },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/30 rotate-45 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-white/30 rotate-45 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section with Personal Info */}
        <div className="text-center mb-20">
          <h2 
            className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About{' '}
            <span 
              className={`transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #a855f7 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Me
            </span>
          </h2>
          <div 
            className={`w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-white mx-auto mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
          
          {/* Personal Introduction */}
          <div 
            className={`max-w-4xl mx-auto transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              I'm a passionate developer who loves creating innovative solutions and turning complex problems 
              into simple, elegant designs. With expertise in both web development and systems programming, 
              I bring a unique perspective to every project.
            </p>
            
            {/* Personal Details Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <MapPin className="text-blue-400 mb-3 mx-auto" size={32} />
                <h4 className="text-white font-semibold mb-2">Location</h4>
                <p className="text-gray-400">Jhansi, Up, India</p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <GraduationCap className="text-purple-400 mb-3 mx-auto" size={32} />
                <h4 className="text-white font-semibold mb-2">Education</h4>
                <p className="text-gray-400">B.Tech CSE(U.G)</p>
              </div>
              
              <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 hover:border-white/50 transition-all duration-500 hover:transform hover:scale-105">
                <Briefcase className="text-white mb-3 mx-auto" size={32} />
                <h4 className="text-white font-semibold mb-2">Experience</h4>
                <p className="text-gray-400">Intern At Yelo India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div 
          className={`mb-20 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${1000 + index * 150}ms` }}
              >
                <div className="bg-black/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-110 group">
                  <stat.icon className="text-blue-400 mb-4 mx-auto group-hover:text-purple-400 transition-colors duration-300" size={40} />
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{stat.number}</h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Skills Section with Enhanced Design */}
        <div 
          className={`mb-20 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Technical Skills</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`group transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${1200 + index * 150}ms` }}
                >
                  <div className="bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">{skill.name}</span>
                      <span className="text-gray-400 font-medium group-hover:text-white transition-colors duration-300">{skill.level}%</span>
                    </div>
                    
                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-black/50 rounded-full h-3 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-2000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${1400 + index * 150}ms`
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer"></div>
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div 
                        className={`absolute top-0 left-0 w-full h-3 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div 
          className={`transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">My Journey</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Key milestones in my development career
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>
              
              <div className="space-y-12">
                {/* Education */}
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 hover:border-blue-400/50 transition-all duration-500 hover:transform hover:scale-105">
                      <h4 className="text-xl font-bold text-white mb-2">Bachelor of Technology</h4>
                      <p className="text-blue-400 font-medium mb-2">Computer Science Engineering</p>
                      <p className="text-gray-400 mb-1">AKTU</p>
                      <p className="text-gray-500 text-sm">2024-2028</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black"></div>
                  
                  <div className="flex-1 pl-8"></div>
                </div>
                
                {/* Experience 1 */}
                <div className="relative flex items-center">
                  <div className="flex-1 pr-8"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full border-4 border-black"></div>
                  
                  <div className="flex-1 pl-8">
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                      <h4 className="text-xl font-bold text-white mb-2">Frontend Developer Intern</h4>
                      <p className="text-purple-400 font-medium mb-2">Yelo India Pvt Ltd</p>
                      <p className="text-gray-400 mb-2 text-sm">June 2025 - September 2025</p>
                      <p className="text-gray-300">Developed responsive web applications using React and modern CSS frameworks.</p>
                    </div>
                  </div>
                </div>
                
                {/* Experience 2 */}
                <div className="relative flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-600/50 hover:border-white/50 transition-all duration-500 hover:transform hover:scale-105">
                      <h4 className="text-xl font-bold text-white mb-2">Freelance Developer</h4>
                      <p className="text-white font-medium mb-2">Self-employed</p>
                      <p className="text-gray-400 mb-2 text-sm">2025 - Present</p>
                      <p className="text-gray-300">Created custom websites and applications for small businesses and startups.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black"></div>
                  
                  <div className="flex-1 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;