
import React from 'react';
import { ArrowDown, Coffee, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Rayudu Siva Sai Prakash
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Currently crafting Web Apps using React and Next.js, while diving deep into 
          machine learning and AI engineering. I believe in clean code, continuous learning, 
          and the transformative power of artificial intelligence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-900 hover:text-gray-900 transition-colors duration-200"
          >
            Get In Touch
          </button>
        </div>
        
        <div className="mt-16">
          <ArrowDown className="w-6 h-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
