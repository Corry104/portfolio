import './footer.scss';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

/** Defined props for footer */
interface Params {
    theme: any,
}

export const Footer: React.FC<Params> = (params: Params) => {
    const { theme } = params;

    return (
        <>
            <div className={theme}>
                <div className={`footer`}>
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
                </div>
            </div>
        </>
    )
}