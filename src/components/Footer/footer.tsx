import styles from './footer.module.scss';
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
            <div className={`${styles[theme]} `}>
                <div className={styles['footer']}>
                        <li>
                            <a href="https://www.linkedin.com/in/corradoalfano/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className={styles['icon']}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Corry104" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} className={styles['icon']}></FontAwesomeIcon>
                            </a>
                        </li>
                </div>
            </div>
        </>
    )
}