import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient pt-20">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#A78BFA]/10 rounded-full blur-3xl float-1"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl float-2"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#4ADE80]/10 rounded-full blur-3xl float-3"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p id="greeting" className="text-[#C4B5FD] text-lg font-medium tracking-wide text-reveal">
                Hello, I'm
              </p>
              
              {/* Glassmorphism Name Card */}
              <div className="inline-block text-reveal text-reveal-delay-1">
                <div className="relative p-8 sm:p-10 md:p-12 backdrop-blur-2xl bg-white/5 rounded-3xl border border-white/10 overflow-hidden group hover:bg-white/10 transition-all duration-500">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA]/20 via-[#60A5FA]/20 to-[#4ADE80]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#A78BFA]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#60A5FA]/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  {/* Corner borders */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#A78BFA]/40 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#A78BFA]/40 rounded-br-3xl"></div>
                  
                  <h1 id="hero-name" className="relative z-10 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#F9FAFB] leading-none">
                    Praveen<br />
                    Deshmukh
                  </h1>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-reveal text-reveal-delay-2">
                <div className="h-px w-12 bg-gradient-to-r from-[#A78BFA] to-transparent"></div>
                <p id="hero-role" className="text-xl sm:text-2xl md:text-3xl text-[#A78BFA] font-medium">
                  Aspiring UI/UX Designer
                </p>
              </div>
            </div>
            
            <p id="tagline" className="text-lg sm:text-xl text-[#D1D5DB] max-w-xl leading-relaxed text-reveal text-reveal-delay-3">
              Creating User-Friendly, Meaningful & Visually Appealing Digital Experiences
            </p>
            
            <div className="flex flex-wrap gap-4 text-reveal text-reveal-delay-3">
              <a href="#work" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#A78BFA] to-[#C4B5FD] text-[#111827] text-sm sm:text-base font-semibold rounded-full hover:shadow-2xl hover:shadow-[#A78BFA]/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                View Projects
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a href="#contact" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#A78BFA] text-[#A78BFA] text-sm sm:text-base font-semibold rounded-full hover:bg-[#A78BFA]/10 transition-all duration-300 hover:scale-105">
                Get In Touch
              </a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 text-reveal text-reveal-delay-3">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-[#A78BFA]">Learning</p>
                <p className="text-xs sm:text-sm text-[#9CA3AF]">Continuously</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-[#4ADE80]">10+</p>
                <p className="text-xs sm:text-sm text-[#9CA3AF]">Projects</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-bold text-[#FB923C]">3+</p>
                <p className="text-xs sm:text-sm text-[#9CA3AF]">Certifications</p>
              </div>
            </div>
          </div>
          
          {/* Right: Animated Avatar (hidden on mobile) */}
          <div className="relative hidden lg:flex justify-center items-center lg:justify-end">
            <div className="relative w-full max-w-sm xl:max-w-md aspect-square">
              {/* Animated orbiting rings */}
              <div className="absolute inset-0 border-2 border-[#A78BFA]/30 rounded-full float-1"></div>
              <div className="absolute inset-8 border-2 border-[#60A5FA]/30 rounded-full float-2"></div>
              <div className="absolute inset-16 border-2 border-[#4ADE80]/30 rounded-full float-3"></div>
              
              {/* Floating design tool icons */}
              <div className="absolute top-10 left-10 w-12 h-12 bg-[#A78BFA]/20 backdrop-blur-sm rounded-xl flex items-center justify-center float-1 glow-pulse">
                <svg className="w-6 h-6 text-[#A78BFA]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              
              <div className="absolute top-20 right-10 w-12 h-12 bg-[#60A5FA]/20 backdrop-blur-sm rounded-xl flex items-center justify-center float-2">
                <svg className="w-6 h-6 text-[#60A5FA]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z" />
                </svg>
              </div>
              
              <div className="absolute bottom-20 left-16 w-12 h-12 bg-[#4ADE80]/20 backdrop-blur-sm rounded-xl flex items-center justify-center float-3">
                <svg className="w-6 h-6 text-[#4ADE80]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              {/* Center Avatar with glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A78BFA] via-[#60A5FA] to-[#4ADE80] rounded-full blur-3xl opacity-40 animate-pulse"></div>
                  
                  {/* Avatar container */}
                  <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-[#A78BFA]/30 glow-pulse morphing-blob" style={{background: 'linear-gradient(135deg, #A78BFA 0%, #60A5FA 50%, #4ADE80 100%)'}}>
                    {/* Animated Designer Avatar SVG */}
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      {/* Background pattern */}
                      <defs>
                        <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{stopColor:'#A78BFA', stopOpacity:0.3}} />
                          <stop offset="50%" style={{stopColor:'#60A5FA', stopOpacity:0.3}} />
                          <stop offset="100%" style={{stopColor:'#4ADE80', stopOpacity:0.3}} />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      
                      <rect width="200" height="200" fill="url(#avatarGrad)" />
                      
                      {/* Designer character */}
                      {/* Body/Torso */}
                      <ellipse cx="100" cy="140" rx="35" ry="40" fill="#1E1B4B" opacity="0.9" />
                      
                      {/* Head */}
                      <circle cx="100" cy="85" r="30" fill="#DDD6FE" opacity="0.95" />
                      
                      {/* Hair/Head detail */}
                      <path d="M 70 85 Q 70 60 100 55 Q 130 60 130 85" fill="#312E81" opacity="0.9" />
                      
                      {/* Glasses (designer touch) */}
                      <g filter="url(#glow)">
                        <circle cx="90" cy="85" r="8" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.8" />
                        <circle cx="110" cy="85" r="8" fill="none" stroke="#60A5FA" strokeWidth="2" opacity="0.8" />
                        <line x1="98" y1="85" x2="102" y2="85" stroke="#60A5FA" strokeWidth="2" opacity="0.8" />
                      </g>
                      
                      {/* Smile */}
                      <path d="M 90 95 Q 100 100 110 95" stroke="#312E81" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
                      
                      {/* Arms with design tools */}
                      {/* Left arm with pen */}
                      <g className="arm-left">
                        <path d="M 70 140 Q 50 130 45 145" stroke="#DDD6FE" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
                        <line x1="45" y1="145" x2="35" y2="155" stroke="#A78BFA" strokeWidth="3" strokeLinecap="round" />
                        <circle cx="35" cy="155" r="2" fill="#A78BFA" />
                      </g>
                      
                      {/* Right arm with mouse */}
                      <g className="arm-right">
                        <path d="M 130 140 Q 150 130 155 145" stroke="#DDD6FE" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
                        <rect x="152" y="143" width="8" height="12" rx="3" fill="#4ADE80" opacity="0.8" />
                      </g>
                      
                      {/* Floating design elements around character */}
                      <g opacity="0.6">
                        {/* Stars/sparkles */}
                        <circle cx="140" cy="70" r="2" fill="#FDB300" className="sparkle-1">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="60" cy="100" r="2" fill="#FF61F6" className="sparkle-2">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="145" cy="110" r="2" fill="#0ACF83" className="sparkle-3">
                          <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
                        </circle>
                      </g>
                      
                      {/* Floating UI elements */}
                      <g opacity="0.4">
                        <rect x="30" y="50" width="20" height="3" rx="1.5" fill="white">
                          <animate attributeName="y" values="50;45;50" dur="3s" repeatCount="indefinite" />
                        </rect>
                        <rect x="150" y="130" width="15" height="3" rx="1.5" fill="white">
                          <animate attributeName="y" values="130;125;130" dur="2.5s" repeatCount="indefinite" />
                        </rect>
                      </g>
                    </svg>
                  </div>
                  
                  {/* Orbiting particles */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 -ml-2 -mt-2 bg-[#A78BFA] rounded-full orbit-1"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-[#60A5FA] rounded-full orbit-2"></div>
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5 bg-[#4ADE80] rounded-full orbit-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-reveal text-reveal-delay-3">
        <p className="text-xs text-[#9CA3AF] tracking-widest">SCROLL</p>
        <div className="w-px h-12 bg-gradient-to-b from-[#A78BFA] to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;