import './sidebar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Sidebar: React.FC = () => (
    <div className='nav-bar'>
       

        <nav>
            <NavLink to='/' >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' ></FontAwesomeIcon>
            </NavLink>
            <NavLink className='about-link' to='/about' >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' ></FontAwesomeIcon>
            </NavLink>
            <NavLink className='contact-link' to='/contact' >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' ></FontAwesomeIcon>
            </NavLink>
        </nav>

        <ul>
            <li>
                <a href="https://www.linkedin.com/in/corradoalfano/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a href="https://github.com/Corry104" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'></FontAwesomeIcon>
                </a>
            </li>
        </ul>

    </div>
)