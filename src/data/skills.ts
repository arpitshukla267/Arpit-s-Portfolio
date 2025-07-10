import { Skill } from '../types';

interface SkillCategories {
  [key: string]: Skill[];
}

export const skills: SkillCategories = {
  'Frontend Development': [
    {
      name: 'HTML',
      level: 90,
    },
    {
      name: 'CSS',
      level: 85,
    },
    {
      name: 'JavaScript',
      level: 85,
    },
    {
      name: 'React',
      level: 80,
    },
    {
      name: 'Tailwind CSS',
      level: 85,
    },
  ],
  'Backend Development': [
    {
      name: 'Node.js',
      level: 75,
    },
    {
      name: 'Express',
      level: 70,
    },
    {
      name: 'MongoDB',
      level: 65,
    },
    {
      name: 'REST APIs',
      level: 80,
    },
  ],
  'Programming Languages': [
    {
      name: 'C',
      level: 90,
    },
    {
      name: 'JavaScript',
      level: 85,
    },
    {
      name: 'Python',
      level: 60,
    },
    {
      name: 'TypeScript',
      level: 75,
    },
  ],
  'Tools & Others': [
    {
      name: 'Git',
      level: 85,
    },
    {
      name: 'VS Code',
      level: 90,
    },
    {
      name: 'Figma',
      level: 70,
    },
    {
      name: 'Responsive Design',
      level: 85,
    },
  ],
};