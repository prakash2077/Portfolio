
import React from 'react';
import { Code, Database, Brain, Terminal, GitBranch, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      color: 'from-blue-500 to-cyan-500',
      level: 5,
      maxLevel : 5
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Firebase'],
      color: 'from-orange-500 to-red-500',
      level: 4,
      maxLevel : 5
    },
    {
      title: 'Languages',
      icon: Terminal,
      skills: ['C', 'Python'],
      color: 'from-green-500 to-emerald-500',
      level: 4.5,
      maxLevel : 5
    },
    {
      title: 'Tools',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'Notion'],
      color: 'from-purple-500 to-pink-500',
      level: 5,
      maxLevel : 5
    },
    {
      title: 'Learning',
      icon: Brain,
      skills: ['Machine Learning', 'AI Engineering', 'Data Science'],
      color: 'from-indigo-500 to-purple-500',
      level: 3,
      maxLevel : 5
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A growing toolkit spanning web development and emerging AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 h-10">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="h-7 px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-10 w-32 h-2 bg-gray-200 rounded">
                <div
                className='h-2 bg-green-500 rounded'
                 style={{
                  width: `${(category.level / category.maxLevel) * 100}%`
                }}>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
