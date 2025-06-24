
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Image */}
        <div className="relative inline-block animate-fade-in">
          <div className="neumorphic w-48 h-48 mx-auto flex items-center justify-center">
            <div className="neumorphic-inset w-40 h-40 rounded-2xl flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-silver_lake_blue to-yinmn_blue rounded-xl flex items-center justify-center text-6xl font-bold text-oxford_blue">
                J
              </div>
            </div>
          </div>
        </div>

        {/* Main Text */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-platinum">
            Hi, I'm{' '}
            <span className="text-transparent bg-gradient-to-r from-silver_lake_blue via-yinmn_blue to-silver_lake_blue bg-clip-text animate-float">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-silver_lake_blue-300 max-w-2xl mx-auto">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-yinmn_blue-800 max-w-3xl mx-auto leading-relaxed">
            I create beautiful, functional, and user-centered digital experiences. 
            Passionate about modern web technologies and innovative design solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView()}
            className="neumorphic-button group"
          >
            <span className="flex items-center gap-2">
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView()}
            className="neumorphic-button bg-gradient-to-r from-yinmn_blue to-silver_lake_blue"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="neumorphic w-8 h-12 flex items-center justify-center">
            <ArrowDown className="w-4 h-4 text-silver_lake_blue" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
