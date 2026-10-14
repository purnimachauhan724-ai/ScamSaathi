import React, { useState, useEffect } from 'react';
import '../styles/variables.css';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // initialise from stored preference or system default
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggle = () => setDarkMode(prev => !prev);

  return (
    <section className="settings-page">
      <h2>Settings</h2>
      <button className="btn-primary" onClick={toggle}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </section>
  );
};

export default Settings;
