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
  const [lettersAnimation, setLettersAnimation] = useState('text-animate');
  const greetings = 'Hey, there'.split('');
  const fName = `I'm Corrado`.split('');
  const job = 'Software Developer'.split('');

  useEffect(() => {
    setTimeout(() => {
      setLettersAnimation('text-animate-hover')
    }, 3000);
  }, [])

  return (
    <>
      <div className={`${theme} background`}>
        <Navbar theme={theme} toggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
        <Container theme={theme} />
      </div>

    </>

  );
}

export default App;
