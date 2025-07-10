import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isVisible }) => {
  const delay = 200 + (index * 150);

  return (
    <div 
      className={`group relative bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden">
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 transform translate-y-4 group-hover:translate-y-0">
            <div className="flex space-x-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 hover:scale-110"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={20} />
                </a>
              )}
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub Repository"
                >
                  <Github size={20} />
                </a>
              )}
              
              <button className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-all duration-300 hover:scale-110">
                <Eye size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
          {project.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600 hover:border-blue-400 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;