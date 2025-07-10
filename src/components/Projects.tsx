import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Code, Palette, Database } from 'lucide-react';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [filter, setFilter] = useState<string>('all');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isVisible) return;

      const scrollY = window.scrollY;
      const sectionTop = sectionRef.current?.offsetTop || 0;
      const sectionHeight = sectionRef.current?.offsetHeight || 0;

      if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
        const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);
        const newActiveProject = Math.min(
          Math.floor(progress * filteredProjects.length),
          filteredProjects.length - 1
        );
        setActiveProject(Math.max(0, newActiveProject));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const categories = [''];
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return <Code className="w-5 h-5" />;
      case 'c': return <Database className="w-5 h-5" />;
      case 'design': return <Palette className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="relative min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 z-0">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activeProject ? 'opacity-30 scale-100' : 'opacity-0 scale-110'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
          </div>
        ))}
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="pt-20 pb-16 text-center">
          <h2 
            className={`text-6xl md:text-8xl font-black text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            MY{' '}
            <span 
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent"
            >
              PROJECTS
            </span>
          </h2>
          <div 
            className={`w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-white mx-auto mb-8 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`} />
          <p 
            className={`text-xl text-gray-300 max-w-2xl mx-auto px-6 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Innovative solutions crafted with passion and precision
          </p>
        </div>

        <div className="px-6 pb-20 ">
          <div className="max-w-5xl mx-auto space-y-32 ">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                ref={el => projectRefs.current[index] = el}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                } ${index === activeProject ? 'scale-105' : 'scale-100'}`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className={`group relative bg-black/40 backdrop-blur-xl rounded-3xl border transition-all duration-700 hover:scale-105 ${
                  index === activeProject 
                    ? 'border-blue-400 shadow-2xl shadow-blue-500/20' 
                    : 'border-gray-700 hover:border-purple-400'
                }`}>
                  <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                        <div className="flex space-x-4">
                          {project.liveUrl && (
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
                            >
                              <ExternalLink size={24} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a 
                              href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="p-4 bg-white text-black rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
                            >
                              <Github size={24} />
                            </a>
                          )}
                          <button
                            onClick={() => setPreviewUrl(project.liveUrl)}
                            className="p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            <Eye size={24} />
                          </button>
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-bold rounded-full shadow-lg">
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className={`flex flex-col justify-center ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-4 py-2 bg-black/60 border border-gray-600 text-gray-300 text-sm font-medium rounded-full hover:border-blue-400 hover:text-white transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute inset-0 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse" />
                            <span className="relative z-10 flex items-center space-x-2">
                              <ExternalLink size={18} />
                              <span>Live Demo</span>
                            </span>
                          </a> 
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative px-8 py-3 border-2 border-white text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black"
                          >
                            <span className="relative z-10 flex items-center space-x-2">
                              <Github size={18} />
                              <span>View Code</span>
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {previewUrl && (
        <div className="fixed inset-0 z-[100] bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white rounded-xl lg:w-[95%] w-[90vw] h-[80vh] relative overflow-hidden shadow-2xl">
            <button
              onClick={() => setPreviewUrl(null)}
              className="absolute top-3 right-3 z-10 text-black hover:text-red-600 text-2xl font-bold"
            >
              ✖
            </button>
            <iframe
              src={previewUrl}
              title="Project Preview"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
