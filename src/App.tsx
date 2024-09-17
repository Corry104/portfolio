import React, { useEffect, useState } from 'react';
import './App.scss';
import './assets/styles/_main.scss';
import { Navbar } from './components/Navbar/navbar';
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';
// import { AnimatedLetters } from './components/AnimatedLetters/animatedLetters';
import { Container } from './components/container/container';

const App: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  useEffect(() => {
    localStorage.setItem('theme',theme);
  })

  return (
    <>
      <div className={`${theme} `}>
        <Navbar theme={theme} toggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <Container  />
      </div>

    </>

  );
}

export default App;
