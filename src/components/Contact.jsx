import React from 'react';

const Contact = () => {
  const defaultConfig = {
    contact_email: 'praveen.deshmukh@email.com',
    behance_url: 'https://behance.net/praveendeshmukh',
    location_text: 'India'
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-br from-[#C4B5FD] via-[#DDD6FE] to-[#A78BFA]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-12 fade-in-scroll">
          <div className="inline-block px-5 py-2 bg-[#111827]/80 rounded-full mb-6">
            <span className="text-[#C4B5FD] font-mono text-sm">06. What's Next?</span>
          </div>
          <h2 id="thank-you-text" className="font-display text-5xl md:text-7xl font-bold text-[#111827] mb-6">
            Thank You
          </h2>
          <p className="text-xl text-[#1F2937] max-w-2xl mx-auto leading-relaxed">
            Thank you for viewing my portfolio! I'm excited to connect with potential clients, collaborators, and fellow designers. Feel free to reach out—let's create something amazing together!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 fade-in-scroll">
          <a 
            id="contact-email-link" 
            href={`mailto:${defaultConfig.contact_email}`}
            className="group px-8 py-4 bg-[#111827] text-[#E5E7EB] font-semibold rounded-full hover:bg-[#1F2937] transition-all duration-300 hover:scale-105 flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span id="contact-email">{defaultConfig.contact_email}</span>
          </a>
        </div>
        
        <div className="flex gap-4 justify-center mb-8 fade-in-scroll">
          <a 
            id="behance-link" 
            href={defaultConfig.behance_url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-14 h-14 bg-[#7C3AED] text-white rounded-full flex items-center justify-center hover:bg-[#6D28D9] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.5 4.5h5.11c1.51 0 2.73.39 3.63 1.16.9.78 1.35 1.82 1.35 3.13 0 .88-.24 1.63-.72 2.26-.48.62-1.12 1.05-1.92 1.28.98.23 1.74.69 2.28 1.37.54.68.81 1.52.81 2.52 0 1.41-.47 2.52-1.42 3.34-.95.81-2.25 1.22-3.91 1.22H6.5V4.5zm2.5 5.88h2.54c.67 0 1.19-.16 1.56-.47.37-.31.56-.76.56-1.35 0-.6-.19-1.05-.56-1.35-.37-.3-.89-.45-1.56-.45H9v3.62zm0 7.12h2.84c.71 0 1.26-.18 1.67-.53.4-.35.61-.84.61-1.47 0-.63-.2-1.12-.61-1.47-.4-.35-.96-.53-1.67-.53H9v4zM18.5 9.5h5v1h-5z" />
            </svg>
          </a>
          
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-14 h-14 bg-[#7C3AED] text-white rounded-full flex items-center justify-center hover:bg-[#6D28D9] hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-[#7C3AED]/50"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
        
        <div className="mb-8 fade-in-scroll">
          <p id="location-text" className="text-[#1F2937] text-lg flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>{defaultConfig.location_text}</span>
          </p>
        </div>
        
        <div className="pt-8 border-t border-[#A78BFA] fade-in-scroll">
          <p className="text-[#1F2937] text-sm">© 2024 Praveen Deshmukh • Designed & Built with passion</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;