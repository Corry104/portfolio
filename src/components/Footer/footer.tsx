import './footer.scss';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FooterProps } from '../../utils/interfaces/interface';

export const Footer: React.FC<FooterProps> = (params: FooterProps) => {
    const { theme } = params;

    return (
        <>
            <section className={theme}>
                <footer className={`footer`}>
                        <li>
                            <a href="https://www.linkedin.com/in/corradoalfano/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className={`icon`}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Corry104" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className={`icon`}></FontAwesomeIcon>
                            </a>
                        </li>
                </footer>
            </section>
        </>
    )
}