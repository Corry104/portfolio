import styles from './navbar.module.scss';
import '../../assets/styles/_main.scss';
import { NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEnvelope, faHome, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import { Footer } from '../Footer/footer';


interface Params {
    theme: any,
    toggle: ()=>{}
}

export const Navbar: React.FC<Params> = (params: Params) => {
    const { theme, toggle } = params;

    return (

        <>
            <nav className={`${styles[theme]} `}>
                {/* <div className={`${styles['active']} ${show && styles['locked']}`}> */}
                <div className={`${styles['locked']} `}>

                    <NavLink to='/home' >
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
            <Footer theme={theme} />
        </>

    )
}
