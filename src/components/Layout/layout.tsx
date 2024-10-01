import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Navbar } from "../Navbar/navbar"
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/footer';


export const Layout: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);


  useEffect(() => {
    if (theme === null) setTheme('light')
    localStorage.setItem('theme', theme);
  })

  return (
    <div className={`${theme} `}>
      <Navbar theme={theme} toggle={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <Outlet />
      <Footer theme={theme} />
    </div>
  )
}