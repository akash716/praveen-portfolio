import React from 'react';

const Skills = () => {
  const skillsData = {
    uxResearch: {
      title: "UX Research & Strategy",
      subtitle: "Understanding users to create meaningful solutions",
      color: "#A78BFA",
      skills: ["User Interviews", "Personas", "Journey Maps", "Empathy Mapping"]
    },
    visualDesign: {
      title: "Visual Design",
      subtitle: "Creating aesthetically pleasing and functional interfaces",
      color: "#4ADE80",
      skills: ["Typography", "Color Theory", "Layout", "Spacing"]
    },
    prototyping: { // Fixed: This is the correct key name
      title: "Prototyping",
      subtitle: "Building interactive models to test ideas",
      color: "#FB923C",
      skills: ["Wireframes", "Mockups", "Hi-Fi Prototypes"]
    },
    designSystems: {
      title: "Design Systems",
      subtitle: "Maintaining consistency across products",
      color: "#C4B5FD",
      skills: ["Components", "Style Guides", "Documentation"]
    }
  };

  const designTools = [
    { name: "Figma", category: "Primary Tool", color: "#F24E1E", bg: "bg-gradient-to-br from-[#F24E1E] to-[#FF7262]" },
    { name: "Photoshop", category: "Image Editing", color: "#31A8FF", bg: "bg-gradient-to-br from-[#31A8FF] to-[#1C8FE8]" },
    { name: "Sketch", category: "UI Design", color: "#FDB300", bg: "bg-gradient-to-br from-[#FDB300] to-[#EA6C00]" }
  ];

  return (
    <section id="skills" className="relative py-32 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20 fade-in-scroll">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#A78BFA] font-mono text-sm">04.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#A78BFA] to-transparent"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-[#9CA3AF]">Design tools and principles I work with</p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          {/* Large Feature: UX Research */}
          <div className="col-span-12 lg:col-span-8 group fade-in-scroll">
            <div className="relative h-full p-10 bg-gradient-to-br from-[#1E1B4B] to-[#312E81] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#A78BFA]/20 hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A78BFA]/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-[#F9FAFB] mb-2 group-hover:text-[#A78BFA] transition-colors">
                      {skillsData.uxResearch.title}
                    </h3>
                    <p className="text-[#9CA3AF]">{skillsData.uxResearch.subtitle}</p>
                  </div>
                  <div className="w-16 h-16 bg-[#A78BFA]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skillsData.uxResearch.skills.map((skill, index) => (
                    <div key={index} className="p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <p className="text-sm text-[#C4B5FD] font-semibold">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Medium: Design Tools */}
          <div className="col-span-12 lg:col-span-4 group fade-in-scroll">
            <div className="relative h-full p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#60A5FA]/20 hover:-translate-y-1">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#60A5FA]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-6 group-hover:text-[#60A5FA] transition-colors">
                  Design Tools
                </h3>
                <div className="space-y-4 flex-1">
                  {designTools.map((tool, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#60A5FA]/30 transition-all group/tool">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/tool:scale-110 transition-transform ${tool.bg}`}>
                        {tool.name === 'Figma' ? (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <path d="M8 24C10.2091 24 12 22.2091 12 20V16H8C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z" fill="white" />
                            <path d="M4 12C4 9.79086 5.79086 8 8 8H12V16H8C5.79086 16 4 14.2091 4 12Z" fill="white" opacity="0.8" />
                            <path d="M4 4C4 1.79086 5.79086 0 8 0H12V8H8C5.79086 8 4 6.20914 4 4Z" fill="white" opacity="0.6" />
                          </svg>
                        ) : tool.name === 'Photoshop' ? (
                          <span className="text-white font-bold text-lg">Ps</span>
                        ) : (
                          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                            <polygon points="12,2 22,8 12,14 2,8" fill="white" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-[#F9FAFB] font-semibold">{tool.name}</p>
                        <p className="text-xs text-[#9CA3AF]">{tool.category}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Design */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 group fade-in-scroll">
            <div className="relative h-full p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#4ADE80]/20 hover:-translate-y-1">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#4ADE80]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#4ADE80]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-3 group-hover:text-[#4ADE80] transition-colors">
                  {skillsData.visualDesign.title}
                </h3>
                <p className="text-[#9CA3AF] mb-6 text-sm">{skillsData.visualDesign.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {skillsData.visualDesign.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#4ADE80]/10 text-[#4ADE80] text-xs font-medium rounded-full border border-[#4ADE80]/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Prototyping */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 group fade-in-scroll">
            <div className="relative h-full p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#FB923C]/20 hover:-translate-y-1">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FB923C]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#FB923C]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#FB923C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-3 group-hover:text-[#FB923C] transition-colors">
                  {skillsData.prototyping.title} {/* Fixed: Now using correct key */}
                </h3>
                <p className="text-[#9CA3AF] mb-6 text-sm">{skillsData.prototyping.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {skillsData.prototyping.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#FB923C]/10 text-[#FB923C] text-xs font-medium rounded-full border border-[#FB923C]/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Design Systems */}
          <div className="col-span-12 lg:col-span-4 group fade-in-scroll">
            <div className="relative h-full p-8 bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#C4B5FD]/20 hover:-translate-y-1">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C4B5FD]/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#C4B5FD]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#C4B5FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#F9FAFB] mb-3 group-hover:text-[#C4B5FD] transition-colors">
                  {skillsData.designSystems.title}
                </h3>
                <p className="text-[#9CA3AF] mb-6 text-sm">{skillsData.designSystems.subtitle}</p>
                <div className="flex flex-wrap gap-2">
                  {skillsData.designSystems.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#C4B5FD]/10 text-[#C4B5FD] text-xs font-medium rounded-full border border-[#C4B5FD]/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;