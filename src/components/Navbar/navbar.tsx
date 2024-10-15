import styles from './navbar.module.scss';
import '../../assets/styles/_main.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faGamepad, faHome, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavbarParams } from '../interfaces/interface';

export const Navbar: React.FC<NavbarParams> = (params: NavbarParams) => {
    const { theme, toggle } = params;

    return (

        <>
            <nav className={`${styles[theme]} `}>
                <section className={`${styles['locked']} `}>
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
                    <NavLink to='/letsplay' >
                        <FontAwesomeIcon icon={faGamepad} className={styles['icon']}></FontAwesomeIcon>
                    </NavLink>
                    {theme === 'dark' ? 
                        <FontAwesomeIcon onClick={toggle} icon={faSun} className={styles['icon']} ></FontAwesomeIcon>
                        :
                        <FontAwesomeIcon onClick={toggle} icon={faMoon} className={styles['icon']}></FontAwesomeIcon>
                    }
                </section>
            </nav>
            
        </>

    )
}
