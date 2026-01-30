import React from 'react';

const Work = () => {
  const projects = [
    {
      title: "Task Manager App",
      category: "Mobile App • UI/UX",
      description: "Clean and intuitive task management interface with focus on user productivity and seamless experience.",
      tags: ["Figma", "UX"],
      color: "#A78BFA",
      iconColor: "from-[#A78BFA] to-[#60A5FA]",
      borderColor: "border-[#A78BFA]/50",
      shadowColor: "shadow-[#A78BFA]/30"
    },
    {
      title: "E-Learning Platform",
      category: "Website Design",
      description: "Educational platform design focusing on accessibility and engaging learning experience for students.",
      tags: ["Web", "UI"],
      color: "#4ADE80",
      iconColor: "from-[#4ADE80] to-[#22C55E]",
      borderColor: "border-[#4ADE80]/50",
      shadowColor: "shadow-[#4ADE80]/30"
    },
    {
      title: "Coffee Shop Branding",
      category: "Brand Identity",
      description: "Complete brand identity design including logo, color palette, and visual elements for local café.",
      tags: ["Brand", "Logo"],
      color: "#FB923C",
      iconColor: "from-[#FB923C] to-[#FDBA74]",
      borderColor: "border-[#FB923C]/50",
      shadowColor: "shadow-[#FB923C]/30"
    },
    {
      title: "Social Media App Redesign",
      category: "UI Design Practice",
      description: "Redesign concept for social networking app with improved navigation and modern aesthetics.",
      tags: ["Mobile", "Social"],
      color: "#60A5FA",
      iconColor: "from-[#60A5FA] to-[#93C5FD]",
      borderColor: "border-[#60A5FA]/50",
      shadowColor: "shadow-[#60A5FA]/30"
    },
    {
      title: "Fitness Tracker Dashboard",
      category: "Dashboard Design",
      description: "Health and fitness tracking dashboard with clean data visualization and user-friendly interface.",
      tags: ["Dashboard", "Data"],
      color: "#C4B5FD",
      iconColor: "from-[#C4B5FD] to-[#A78BFA]",
      borderColor: "border-[#C4B5FD]/50",
      shadowColor: "shadow-[#C4B5FD]/30"
    },
    {
      title: "Custom Icon Set",
      category: "Icon Design",
      description: "Set of 50+ consistent and scalable icons designed for mobile and web applications.",
      tags: ["Icons", "SVG"],
      color: "#F472B6",
      iconColor: "from-[#F472B6] to-[#EC4899]",
      borderColor: "border-[#F472B6]/50",
      shadowColor: "shadow-[#F472B6]/30"
    }
  ];

  return (
    <section id="work" className="relative py-32 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20 fade-in-scroll">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#4ADE80] font-mono text-sm">05.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#4ADE80] to-transparent"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">
            My Best Work
          </h2>
          <p className="text-xl text-[#9CA3AF]">Design projects showcasing my skills and creative approach</p>
        </div>
        
        {/* Glassmorphism Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`group fade-in-scroll slide-up stagger-${(index % 3) + 1}`}>
              <div className={`relative h-full backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 ${project.borderColor} hover:shadow-2xl ${project.shadowColor} hover:-translate-y-2`}>
                {/* Gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: `linear-gradient(to bottom right, ${project.color}/20, ${project.color.replace(')', '')}80 /20)`}}></div>
                
                {/* Top decorative bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.iconColor}`}></div>
                
                {/* Project Image Area */}
                <div className={`relative h-56 bg-gradient-to-br ${project.iconColor}/30 p-8 flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-24 h-24 border-2 border-white/40 rounded-xl rotate-12"></div>
                    <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white/40 rounded-xl -rotate-6"></div>
                  </div>
                  
                  {/* Project Icon */}
                  <svg viewBox="0 0 100 100" className="w-28 h-28 text-white/90 relative z-10">
                    {index === 0 && (
                      <>
                        <rect x="15" y="20" width="70" height="50" rx="3" fill="currentColor" opacity="0.3" />
                        <rect x="20" y="25" width="25" height="15" fill="currentColor" />
                        <rect x="50" y="25" width="30" height="5" fill="currentColor" opacity="0.7" />
                        <rect x="50" y="35" width="20" height="3" fill="currentColor" opacity="0.5" />
                        <rect x="20" y="45" width="60" height="20" fill="currentColor" opacity="0.4" />
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.3" />
                        <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="4" fill="none" />
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <rect x="25" y="25" width="50" height="50" rx="8" fill="currentColor" opacity="0.3" />
                        <rect x="30" y="35" width="40" height="25" fill="currentColor" opacity="0.6" />
                        <circle cx="50" cy="68" r="4" fill="currentColor" />
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <circle cx="35" cy="50" r="18" fill="currentColor" opacity="0.3" />
                        <circle cx="65" cy="50" r="18" fill="currentColor" opacity="0.3" />
                        <path d="M35 50 L65 50" stroke="currentColor" strokeWidth="3" />
                      </>
                    )}
                    {index === 4 && (
                      <>
                        <rect x="20" y="30" width="60" height="40" rx="3" fill="currentColor" opacity="0.3" />
                        <rect x="25" y="35" width="20" height="12" fill="currentColor" opacity="0.6" />
                        <rect x="50" y="35" width="25" height="3" fill="currentColor" opacity="0.5" />
                        <rect x="50" y="42" width="15" height="3" fill="currentColor" opacity="0.4" />
                      </>
                    )}
                    {index === 5 && (
                      <>
                        <path d="M50 20 L75 40 L75 65 L50 85 L25 65 L25 40 Z" fill="currentColor" opacity="0.3" />
                        <circle cx="50" cy="52" r="12" fill="currentColor" opacity="0.6" />
                      </>
                    )}
                  </svg>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-1 w-8 rounded-full" style={{backgroundColor: project.color}}></div>
                    <span className="text-xs font-bold uppercase tracking-wider" style={{color: project.color}}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className={`text-2xl font-bold text-[#F9FAFB] mb-3 group-hover:${project.color.replace(']', '')} transition-colors`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-[#D1D5DB] text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 text-xs font-medium rounded-full" style={{backgroundColor: `${project.color}/20`, color: project.color}}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center group-hover:${project.color.replace(']', '')}/40 transition-colors`} style={{backgroundColor: `${project.color}/20`}}>
                      <svg className={`w-5 h-5 group-hover:translate-x-1 transition-transform`} style={{color: project.color}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;