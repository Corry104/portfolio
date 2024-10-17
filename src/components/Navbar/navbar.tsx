import styles from './navbar.module.scss';
import '../../assets/styles/_main.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faGamepad, faHome, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavbarParams } from '../../utils/interfaces/interface';

export const Navbar: React.FC<NavbarParams> = (params: NavbarParams) => {
    const { theme, toggle } = params;

    return (
        <>
            <nav className={`${styles[theme]} `}>
                <section className={`${styles['locked']} `}>
                    <NavLink to='/'>
                        <FontAwesomeIcon icon={faHome} className={styles['icon']}></FontAwesomeIcon>
                    </NavLink>
                    <NavLink to='/about' className={styles['about-link']}>
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
                        <a onClick={toggle}><FontAwesomeIcon icon={faSun} className={styles['icon']} ></FontAwesomeIcon></a>
                        :
                        <a onClick={toggle}><FontAwesomeIcon icon={faMoon} className={styles['icon']}></FontAwesomeIcon></a>
                    }
                </section>
            </nav> 
        </>
    )
}
