
import React from 'react';
import { ExternalLink, Github, Cpu, Globe, Smartphone } from 'lucide-react';

// Image Imports
import goatIt from '../images/goat_it.png';
import doomEternal from '../images/doom_eternal.png';
import portfolio from '../images/portfolio.png';

const Projects = () => {
  const projects = [
    {
      title: 'Goat It',
      description: 'A streamlined task management app built with React and Appwrite. Users can create, edit, and delete tasks effortlessly via a clean UI, showcasing my skills in React, Appwrite backend integration, and modern web design.',
      imageAddr: goatIt,
      technologies: ['React', 'Appwrite', 'Vite'],
      githubLink: 'https://github.com/prakash2077/react-todo-list',
      projectLink : 'https://goat-it-todo.vercel.app/',
    },
    {
      title: 'Doom Eternal Fan Site',
      description: 'A dynamic fan site dedicated to Doom Eternal, featuring game-inspired design and interactive elements. This project showcases a visually engaging interface that reflects the intense, fast-paced nature of the game, highlighting my ability to create thematic and user-focused web experiences.',
      imageAddr: doomEternal,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/prakash2077/Doom-Eternal-Fun',
      projectLink : 'https://siva-doometernal.netlify.app/',
    },
    {
      title: 'My Portfolio',
      description: 'A polished and professional portfolio website showcasing my skills, projects, and achievements as a developer. This site features a modern design with seamless navigation, highlighting my expertise in creating visually appealing and functional web experiences.',
      imageAddr: portfolio,
      technologies: ['React', 'Vite', 'JavaScript'],
      githubLink: 'https://github.com/prakash2077/Portfolio',
      projectLink : 'https://siva-sai-prakash-portfolio.vercel.app/',
    },

  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of projects showcasing my journey from web development to AI engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                
                <div className="mt-2 mb-2">
                  <img className='rounded' src={project.imageAddr} alt="" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium"><a href={project.githubLink} target='_blank'>Code</a></span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium"><a href={project.projectLink} target='_blank'>Live Demo</a></span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
