import React, { useContext, useState } from 'react';
import './App.css';

import { ThemeContext, Theme } from './context/ThemeContext';
import Header from './components/Header/Header';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const themeContext = useContext(ThemeContext)
  const handleThemeChange = (selectedTheme: Theme) => {
    themeContext && themeContext.setTheme(selectedTheme)
    setDarkMode(!darkMode);
  }
  return (
    <>
      <Header />
      <button onClick={() => handleThemeChange(darkMode ? 'dark' : 'light')}>change theme</button>
    </>
  );
}

export default App;
