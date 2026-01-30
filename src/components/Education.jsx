import React, { useEffect, useRef } from 'react';

const Education = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        }
      });
    }, observerOptions);

    const items = timelineRef.current?.querySelectorAll('.timeline-item');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const educationData = [
    {
      year: "2024",
      title: "Bachelor of Science",
      subtitle: "University Education",
      description: "Completed my graduation with focus on design principles and digital technologies. This academic foundation helped strengthen my analytical and creative thinking abilities.",
      tags: ["Academic Excellence", "Design Foundation"],
      color: "orange",
      iconPath: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z",
      isReversed: false
    },
    {
      year: "2021",
      title: "Higher Secondary Education",
      subtitle: "HSC • Class XII",
      description: "Completed higher secondary education where my interest in creativity and design began to take shape. This phase marked the beginning of my journey towards UI/UX design.",
      tags: ["Creative Development", "Foundation Building"],
      color: "purple",
      iconPath: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z",
      isReversed: true
    },
    {
      year: "2019",
      title: "Secondary Education",
      subtitle: "SSC • Class X",
      description: "Completed school-level education building a strong foundation in core subjects. This was the beginning of my academic journey where creativity and problem-solving skills started developing.",
      tags: ["Core Education", "Foundation"],
      color: "green",
      iconPath: "M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z",
      isReversed: false
    }
  ];

  const colorConfig = {
    orange: {
      badge: "bg-orange-400/10 text-orange-400 border-orange-400/20",
      iconBg: "from-indigo-900/50 to-indigo-950/50",
      iconColor: "text-orange-400",
      subtitle: "text-orange-400/80"
    },
    purple: {
      badge: "bg-purple-400/10 text-purple-400 border-purple-400/20",
      iconBg: "from-purple-900/50 to-purple-950/50",
      iconColor: "text-purple-400",
      subtitle: "text-purple-400/80"
    },
    green: {
      badge: "bg-green-400/10 text-green-400 border-green-400/20",
      iconBg: "from-green-900/50 to-green-950/50",
      iconColor: "text-green-400",
      subtitle: "text-green-400/80"
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        
        .font-display {
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes drawLine {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .timeline-item {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .timeline-item:nth-child(1) { animation-delay: 0.2s; }
        .timeline-item:nth-child(2) { animation-delay: 0.4s; }
        .timeline-item:nth-child(3) { animation-delay: 0.6s; }
        
        .timeline-line {
          animation: drawLine 1.5s ease-out forwards;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        
        .card-glow {
          position: relative;
          overflow: hidden;
        }
        
        .card-glow::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: left 0.5s ease;
        }
        
        .card-glow:hover::before {
          left: 100%;
        }
        
        .tag-shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        .section-header {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <section 
        id="education" 
        className="relative min-h-screen py-16 md:py-24 overflow-auto font-body"
        style={{ background: 'linear-gradient(180deg, #111827 0%, #0F172A 50%, #111827 100%)' }}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="max-w-3xl mb-16 md:mb-20 section-header">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-orange-400 font-mono text-sm font-medium">02.</span>
              <div className="h-px flex-1 bg-gradient-to-r from-orange-400/60 to-transparent"></div>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-50 mb-4 md:mb-6">
              My Education
            </h2>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Academic journey and continuous learning path
            </p>
          </div>
          
          {/* Timeline Container */}
          <div className="relative" ref={timelineRef}>
            {/* Animated vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 overflow-hidden">
              <div className="timeline-line w-full bg-gradient-to-b from-orange-400 via-purple-400 to-green-400"></div>
            </div>
            
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-16">
              {educationData.map((item, index) => {
                const colors = colorConfig[item.color];
                
                return (
                  <div key={index} className="timeline-item relative">
                    <div className="md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                      {/* Icon side */}
                      {!item.isReversed && (
                        <div className="hidden md:flex justify-end">
                          <div className={`p-6 lg:p-8 bg-gradient-to-br ${colors.iconBg} rounded-2xl border border-white/5 hover-lift card-glow backdrop-blur-sm`}>
                            <svg className={`w-16 h-16 lg:w-20 lg:h-20 ${colors.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d={item.iconPath} />
                            </svg>
                          </div>
                        </div>
                      )}
                      
                      {/* Content card */}
                      <div className={`pl-12 md:pl-0 ${item.isReversed ? 'md:order-1 md:text-right' : ''}`}>
                        <div className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-2xl p-6 lg:p-8 border border-white/5 hover-lift card-glow backdrop-blur-sm ${item.isReversed ? 'md:ml-auto' : ''}`}>
                          <div className={`flex items-center gap-3 mb-4 ${item.isReversed ? 'md:justify-end' : ''}`}>
                            <div className={`md:hidden p-2 bg-gradient-to-br ${colors.iconBg} rounded-lg`}>
                              <svg className={`w-5 h-5 ${colors.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d={item.iconPath} />
                              </svg>
                            </div>
                            <span className={`px-3 py-1.5 ${colors.badge} rounded-full text-sm font-semibold border`}>
                              {item.year}
                            </span>
                          </div>
                          <h3 className="font-display text-xl lg:text-2xl font-bold text-gray-50 mb-2">
                            {item.title}
                          </h3>
                          <p className={`${colors.subtitle} font-medium mb-4 text-sm`}>
                            {item.subtitle}
                          </p>
                          <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                            {item.description}
                          </p>
                          <div className={`flex flex-wrap gap-2 ${item.isReversed ? 'md:justify-end' : ''}`}>
                            {item.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-full text-xs font-medium tag-shimmer"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Icon side (reversed layout) */}
                      {item.isReversed && (
                        <div className="hidden md:flex md:order-2 justify-start">
                          <div className={`p-6 lg:p-8 bg-gradient-to-br ${colors.iconBg} rounded-2xl border border-white/5 hover-lift card-glow backdrop-blur-sm`}>
                            <svg className={`w-16 h-16 lg:w-20 lg:h-20 ${colors.iconColor}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d={item.iconPath} />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;