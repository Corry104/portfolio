import React from "react";
import styles from './spinningCube.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from "@fortawesome/free-brands-svg-icons";


export const SpinningCube: React.FC = () => {
    return (
        <>
            <div className={`${styles['stage-cube-cont']}`}>
                <div className={`${styles["cubespinner"]}`}>
                    <div className={`${styles['face1']}`}>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className={`${styles['face2']}`}>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className={`${styles['face3']}`}>
                        <FontAwesomeIcon icon={faSass} color="#28A4D9" />
                    </div>
                    <div className={`${styles['face4']}`}>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className={`${styles['face5']}`}>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className={`${styles['face6']}`}>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </>
    )

}