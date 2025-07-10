import React from 'react';
import { Skill } from '../../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
  categoryIndex: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, categoryIndex }) => {
  // Calculate delay for staggered animation
  const delay = 100 + (categoryIndex * 200) + (index * 100);

  return (
    <div 
      className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        animation: `fadeInUp 0.5s ease-out ${delay}ms forwards`
      }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center mb-3 text-blue-600 dark:text-blue-400">
          {skill.icon ? (
            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <span className="text-lg font-bold">{skill.name.charAt(0)}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-gray-900 dark:text-white font-medium">
          {skill.name}
        </h3>
        
        {/* Skill level indicator */}
        {skill.level && (
          <div className="w-full mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
            <div 
              className="bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full"
              style={{
                width: `${skill.level}%`,
                animation: `growWidth 1s ease-out ${delay}ms forwards`
              }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillCard;