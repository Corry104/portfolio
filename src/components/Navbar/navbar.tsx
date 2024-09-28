import { useState, useEffect } from 'react';
import styles from './navbar.module.scss';
import '../../assets/styles/_main.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHome, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { ThemeToggle } from '../ThemeToggle/themeToggle';
// import { useContext } from 'react';
// import { ThemeContext } from '../../context/ThemeContext';


interface Params {
    theme: any,
    toggle: ()=>{}
}

export const Navbar: React.FC<Params> = (params: Params) => {
    const { theme, toggle } = params;
    // const [show, setShow] = useState(false);

    // useEffect(() => {
    //     let previousScrollPosition = 0;
    //     let currentScrollPosition = 0;
    
    //     window.addEventListener('scroll', function (e) {
    
    //       // Get the new Value
    //       currentScrollPosition = window.scrollY;
    
    //       //Subtract the two and conclude
    //       if (previousScrollPosition - currentScrollPosition < 0) {
    //         setShow(false);
    //       } else if (previousScrollPosition - currentScrollPosition > 0) {
    //         setShow(true);
    //       }
    
    //       // Update the previous value
    //       previousScrollPosition = currentScrollPosition;
    //     });
    //   }, []);

    return (

        <>
            <nav className={`${styles[theme]} `}>
                {/* <div className={`${styles['active']} ${show && styles['locked']}`}> */}
                <div className={`${styles['active']} `}>

                    <NavLink to='/' >
                        <FontAwesomeIcon icon={faHome} className={styles['icon']}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink to='/about' >
                        <FontAwesomeIcon icon={faUser} className={styles['icon']}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink to='/projects' >
                        <FontAwesomeIcon icon={faBriefcase} className={styles['icon']}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink to='/contact' >
                        <FontAwesomeIcon icon={faEnvelope} className={styles['icon']}></FontAwesomeIcon>
                    </NavLink>
                    {/* <NavLink to='/letsplay' >
                        <FontAwesomeIcon icon={faEnvelope} className={styles['icon']}></FontAwesomeIcon>
                    </NavLink> */}
                    {theme === 'dark' ? 
                        <FontAwesomeIcon onClick={toggle} icon={faSun} className={styles['icon']} ></FontAwesomeIcon>
                        :
                        <FontAwesomeIcon onClick={toggle} icon={faMoon} className={styles['icon']}></FontAwesomeIcon>
                    }
                </div>
            </nav>
            <Outlet />
        </>

    )
}
