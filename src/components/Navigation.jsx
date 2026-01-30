import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="font-display text-2xl font-bold">
          <span className="text-[#F9FAFB]">PD</span>
          <span className="text-[#A78BFA]">.</span>
        </a>
        
        <div className="hidden md:flex gap-10">
          <a href="#about" className="text-sm font-medium text-[#9CA3AF] hover:text-[#A78BFA] transition-colors relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A78BFA] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#education" className="text-sm font-medium text-[#9CA3AF] hover:text-[#A78BFA] transition-colors relative group">
            Journey
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A78BFA] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#achievements" className="text-sm font-medium text-[#9CA3AF] hover:text-[#A78BFA] transition-colors relative group">
            Achievements
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A78BFA] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#skills" className="text-sm font-medium text-[#9CA3AF] hover:text-[#A78BFA] transition-colors relative group">
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A78BFA] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#work" className="text-sm font-medium text-[#9CA3AF] hover:text-[#A78BFA] transition-colors relative group">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#A78BFA] group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        
        <a href="#contact" className="px-6 py-2.5 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] text-[#111827] text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-[#A78BFA]/50 transition-all duration-300 hover:scale-105">
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

export default Navigation;