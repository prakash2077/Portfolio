
import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: 'Andhra University',
      degree: 'Bachelor of Technology (B.Tech)',
      period: '2023 - 2027',
      status: 'Currently Pursuing',
      description: 'Focusing on computer science fundamentals with special interest in artificial intelligence and machine learning applications.',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      institution: 'Narayana Junior College',
      degree: 'Intermediate (11th - 12th)',
      period: '2021 - 2023',
      status: 'Completed',
      description: 'Strong foundation in mathematics and science, which provided the analytical thinking skills essential for programming and problem-solving.',
      gradient: 'from-green-500 to-blue-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation in computer science and mathematics
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={edu.institution}
              className="group relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center flex-shrink-0 md:mr-6 group-hover:scale-110 transition-transform duration-300`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {edu.institution}
                    </h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-lg font-medium text-gray-700 mb-2">
                    {edu.degree}
                  </p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
