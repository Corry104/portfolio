import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";
import styles from './container.module.scss';
import businessPic from '../../assets/images/business_pic.jpg';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";
import { SpinningCube } from "../SpinningCube/spinningCube";



export const Container: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const greetings = 'Hey there,  nice meeting you'.split('');
    const fName = `I'm Corrado`.split('');

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')
        }, 3000);
    }, [])
    return (
        <>
            <div className={`background text`}>
                <div className={`${styles['align-center']}`}>
                    <div className={`${styles['image-animation']}`}>
                        <img src={businessPic} alt="business_picture" className={`${styles['main-pic']}`} />
                    </div>
                    <div className={`${styles['paragraph']}`}>
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={greetings}
                            idx={10}
                        />
                        <br />
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={fName}
                            idx={30}
                        />
                    </div>
                    <SpinningCube />
                    
                </div>
                <div className={`${styles['padding-top-ten']}`}>
                    <p>
                        I am a mid-level Full Stack Developer, Mobile Developer and TV App Developer.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        
                    </p>    
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        vv

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        v
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        vv

                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        v
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        vv

                    </p>
                </div>
                <div className={`${styles['align-center']}`}>
                    {/* <div className={`${styles['stage-cube-cont']}`}>
                        <div className={`${styles["cubespinner"]}`}>
                            <div className={`${styles['face1']}`}>
                                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                            </div>
                            <div className={`${styles['face2']}`}>
                                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                            </div>
                            <div className={`${styles['face3']}`}>
                                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
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
                    </div> */}

                    <div>
                        <div>ABOUT</div>
                        <div>PROJECTS</div>
                    </div>
                    <div>
                        <div>CONTACTS</div>
                        <div>HAVE FUN</div>
                    </div>

                </div>
            </div>
        </>

    )
}