
import React from 'react';
import { ExternalLink, Github, Cpu, Globe, Smartphone } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Chat Application',
      description: 'A real-time chat application with AI assistant integration, built with React and Firebase. Features include message encryption and smart reply suggestions.',
      technologies: ['React', 'Firebase', 'Python', 'OpenAI API'],
      icon: Cpu,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website showcasing modern web development practices with smooth animations and optimized performance.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Task Management Dashboard',
      description: 'A comprehensive task management system with real-time updates, drag-and-drop functionality, and collaborative features.',
      technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
      icon: Smartphone,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Machine Learning Model Trainer',
      description: 'A Python-based tool for training and evaluating machine learning models with a user-friendly interface for data preprocessing.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      icon: Cpu,
      gradient: 'from-orange-500 to-red-500'
    }
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
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-6 h-6 text-white" />
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
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
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
