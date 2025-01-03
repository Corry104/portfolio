import React from "react";
import './spinningCube.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from "@fortawesome/free-brands-svg-icons";


export const SpinningCube: React.FC = () => {
    return (
        <>
            <div className={`stage-cube-cont`}>
                <div className={`cubespinner`}>
                    <div className={`face1`}>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                    </div>
                    <div className={`face2`}>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className={`face3`}>
                        <FontAwesomeIcon icon={faSass} color="#28A4D9" />
                    </div>
                    <div className={`face4`}>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className={`face5`}>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className={`face6`}>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </>
    )

}