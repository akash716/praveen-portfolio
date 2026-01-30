import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 fade-in-scroll">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#A78BFA] font-mono text-sm">01.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#A78BFA] to-transparent"></div>
          </div>
          <h2 id="about-title" className="font-display text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">
            About Me
          </h2>
          <p id="about-subtitle" className="text-2xl text-[#A78BFA] font-medium">
            Creative & Detail-Oriented Designer
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div className="space-y-8 fade-in-scroll">
            <div className="space-y-6 text-lg text-[#D1D5DB] leading-relaxed">
              <p id="about-text">
                I'm Praveen Deshmukh, an aspiring UI/UX designer passionate about creating meaningful digital experiences. My journey is focused on improving my design skills through continuous learning and practice, with a goal to develop industry-level expertise.
              </p>
              <p>
                I believe in user-centric design that solves real-world problems. My approach combines creativity with attention to detail, ensuring every design decision enhances the user experience. I'm constantly exploring new design trends, tools, and methodologies to stay ahead in this dynamic field.
              </p>
              <p>
                Currently, I'm building my portfolio through personal projects and challenges, while completing professional certifications from Google to strengthen my foundation in UX design principles, user research, wireframing, and prototyping.
              </p>
            </div>
            
            {/* Skills Tags */}
            <div className="pt-6">
              <p className="text-sm text-[#9CA3AF] mb-4 font-medium">Core Focus Areas</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1E1B4B] text-[#C4B5FD] rounded-lg text-sm font-medium border border-[#A78BFA]/20 hover:border-[#A78BFA] transition-colors">
                  User-Centric Design
                </span>
                <span className="px-4 py-2 bg-[#1E1B4B] text-[#C4B5FD] rounded-lg text-sm font-medium border border-[#A78BFA]/20 hover:border-[#A78BFA] transition-colors">
                  Wireframing
                </span>
                <span className="px-4 py-2 bg-[#1E1B4B] text-[#C4B5FD] rounded-lg text-sm font-medium border border-[#A78BFA]/20 hover:border-[#A78BFA] transition-colors">
                  Prototyping
                </span>
                <span className="px-4 py-2 bg-[#1E1B4B] text-[#C4B5FD] rounded-lg text-sm font-medium border border-[#A78BFA]/20 hover:border-[#A78BFA] transition-colors">
                  Visual Design
                </span>
                <span className="px-4 py-2 bg-[#1E1B4B] text-[#C4B5FD] rounded-lg text-sm font-medium border border-[#A78BFA]/20 hover:border-[#A78BFA] transition-colors">
                  Problem Solving
                </span>
                <span className="px-4 py-2 bg-[#1E1B4B] text-[#C4B5FD] rounded-lg text-sm font-medium border border-[#A78BFA]/20 hover:border-[#A78BFA] transition-colors">
                  Creative Thinking
                </span>
              </div>
            </div>
          </div>
          
          {/* Right: Bento Grid Style Cards */}
          <div className="grid grid-cols-2 gap-4 fade-in-scroll">
            {/* Card 1 */}
            <div className="col-span-2 p-8 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-2xl border border-white/5 hover-lift">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-[#A78BFA]/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-[#F9FAFB]">10+</p>
                  <p className="text-sm text-[#9CA3AF]">Design Projects</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#F9FAFB] mb-2">Learning & Growing</h3>
              <p className="text-sm text-[#D1D5DB]">Building skills through practice and real projects</p>
            </div>
            
            {/* Card 2 */}
            <div className="p-6 bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-2xl border border-white/5 hover-lift">
              <div className="w-10 h-10 bg-[#4ADE80]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#4ADE80]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#F9FAFB] mb-1">3+</p>
              <p className="text-xs text-[#9CA3AF]">Google Certifications</p>
            </div>
            
            {/* Card 3 */}
            <div className="p-6 bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-2xl border border-white/5 hover-lift">
              <div className="w-10 h-10 bg-[#FB923C]/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#FB923C]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#F9FAFB] mb-1">BSc</p>
              <p className="text-xs text-[#9CA3AF]">Bachelor's Degree</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;