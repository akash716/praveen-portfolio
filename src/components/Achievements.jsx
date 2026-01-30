import React from 'react';

const Achievements = () => {
  const certifications = [
    {
      title: "Foundations of User Experience Design",
      issuer: "Google Career Certificates",
      description: "Mastered UX fundamentals including research methodologies, user personas, empathy mapping, and design thinking principles.",
      color: "#60A5FA",
      hoverColor: "hover:border-[#60A5FA]/50 hover:shadow-[#60A5FA]/30",
      textColor: "text-[#60A5FA]",
      bgColor: "bg-[#60A5FA]/20"
    },
    {
      title: "Start the UX Design Process",
      subtitle: "Empathize, Define, Ideate",
      issuer: "Google Career Certificates",
      description: "Advanced skills in user research, problem definition, brainstorming techniques, and creating user-centered design solutions.",
      color: "#A78BFA",
      hoverColor: "hover:border-[#A78BFA]/50 hover:shadow-[#A78BFA]/30",
      textColor: "text-[#A78BFA]",
      bgColor: "bg-[#A78BFA]/20"
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      issuer: "Google Career Certificates",
      description: "Expert in creating wireframes, storyboards, paper prototypes, and digital low-fidelity prototypes to validate design concepts.",
      color: "#4ADE80",
      hoverColor: "hover:border-[#4ADE80]/50 hover:shadow-[#4ADE80]/30",
      textColor: "text-[#4ADE80]",
      bgColor: "bg-[#4ADE80]/20"
    }
  ];

  return (
    <section id="achievements" className="relative py-32 bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#0F172A] overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#60A5FA]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#A78BFA]/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20 fade-in-scroll">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#60A5FA] font-mono text-sm">03.</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#60A5FA] to-transparent"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#F9FAFB] mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-[#9CA3AF]">Professional credentials from industry leaders</p>
        </div>
        
        {/* Glassmorphism Diploma Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="diploma-card group fade-in-scroll" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="relative h-full">
                {/* Glassmorphism container */}
                <div className={`relative h-full p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-500 hover:bg-white/10 ${cert.hoverColor} hover:shadow-2xl hover:-translate-y-2`}>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: `linear-gradient(to bottom right, ${cert.color}/10, transparent)`}}></div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-3xl" style={{borderColor: `${cert.color}/30`}}></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-3xl" style={{borderColor: `${cert.color}/30`}}></div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Google Logo Placeholder */}
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        <span className="text-white/90 text-xs font-medium">Google</span>
                      </div>
                    </div>
                    
                    {/* Certificate Title */}
                    <h3 className={`text-xl font-bold text-[#F9FAFB] mb-3 leading-tight group-hover:${cert.textColor} transition-colors`}>
                      {cert.title}
                    </h3>
                    
                    {/* Issuer and Subtitle */}
                    <p className="text-sm text-[#9CA3AF] mb-4">
                      {cert.subtitle || cert.issuer}
                    </p>
                    
                    {/* Description */}
                    <p className="text-sm text-[#D1D5DB]/80 leading-relaxed mb-6 flex-1">
                      {cert.description}
                    </p>
                    
                    {/* Badge and Status */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: cert.color}}></div>
                        <span className="text-xs font-semibold" style={{color: cert.color}}>VERIFIED</span>
                      </div>
                      {/* Updated Checkmark SVG with explicit fill color */}
                      <svg className="w-16 h-16 transition-colors" 
                           style={{ 
                             color: `${cert.color}40`,
                             fill: `${cert.color}40`
                           }}
                           fill="currentColor" 
                           viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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

export default Achievements;