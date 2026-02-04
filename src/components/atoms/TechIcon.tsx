/** @jsxImportSource react */
import * as Icons from 'developer-icons';
import React from 'react';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

// Mapping of tech names to icon component names
const iconMap: Record<string, string> = {
  'Vue': 'VueJs',
  'Angular': 'Angular',
  'Angular2+': 'Angular',
  'AngularJS': 'Angular',
  'React': 'React',
  'Nuxt.js': 'NuxtJs',
  'JavaScript': 'JavaScript',
  'TypeScript': 'TypeScript',
  'NodeJS': 'NodeJs',
  'HTML': 'Html5',
  'CSS': 'Css3',
  'Tailwind': 'TailwindCss',
  'Bootstrap': 'Bootstrap',
  'jQuery': 'JQuery',
  'Python': 'Python',
  'PHP': 'Php',
  '.Net Core': 'DotNet',
  'Express': 'ExpressJs',
  'Nest': 'NestJs',
  'GraphQL': 'Graphql',
  'MongoDB': 'MongoDb',
  'MySQL': 'MySql',
  'PostgreSQL': 'PostgreSql',
  'SQLServer': 'SqlServer',
  'Docker': 'Docker',
  'Linux': 'Linux',
  'Git': 'Git',
  'GitLab': 'GitlabLight',
  'Vite': 'Vite',
  'Jest': 'Jest',
  'Vitest': 'Vitest',
  'Jasmine': 'Jasmine',
  // Competences from experience
  'Pinia': 'Pinia',
  'Scrapy': 'Python',
};

export default function TechIcon({ name, size = 24, className = '' }: TechIconProps) {
  const iconName = iconMap[name];
  
  if (!iconName) {
    // Return first letter as fallback
    return (
      <span 
        className={`inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-primary-600 dark:text-primary-400 ${className}`}
        style={{ fontSize: size * 0.5 }}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  // @ts-ignore - Dynamic icon lookup
  const IconComponent = Icons[iconName];
  
  if (!IconComponent) {
    return (
      <span 
        className={`inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-primary-600 dark:text-primary-400 ${className}`}
        style={{ fontSize: size * 0.5 }}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <IconComponent 
      size={size} 
      className={`text-primary-500 dark:text-primary-400 ${className}`}
    />
  );
}
