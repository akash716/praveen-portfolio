import React, { createContext, useState, useContext } from 'react';

const defaultConfig = {
  greeting_text: "Hello, I'm",
  name: 'Praveen Deshmukh',
  role: 'Aspiring UI/UX Designer',
  tagline: 'Creating User-Friendly, Meaningful & Visually Appealing Digital Experiences',
  about_title: 'About Me',
  about_subtitle: 'Creative & Detail-Oriented Designer',
  about_text: "I'm Praveen Deshmukh, an aspiring UI/UX designer passionate about creating meaningful digital experiences. My journey is focused on improving my design skills through continuous learning and practice, with a goal to develop industry-level expertise.",
  education_title: 'My Education',
  thank_you_text: "Thank You",
  contact_email: 'praveen.deshmukh@email.com',
  behance_url: 'https://behance.net/praveendeshmukh',
  location_text: 'India',
  background_color: '#0F172A',
  accent_color: '#A78BFA',
  text_color: '#E5E7EB',
  secondary_color: '#4ADE80',
  highlight_color: '#FB923C'
};

const ConfigContext = createContext();

export const useConfig = () => useContext(ConfigContext);

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(defaultConfig);

  const updateConfig = (newConfig) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  return (
    <ConfigContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigContext.Provider>
  );
};