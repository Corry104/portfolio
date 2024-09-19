import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";
import styles from './welcome.module.scss';
import businessImg from '../../assets/images/business_pic.jpg';
import aboutImg from '../../assets/images/about_img.jpg';
import contactImg from '../../assets/images/contact_img.jpg';
import projectImg from '../../assets/images/projects_img.jpg';
import { SpinningCube } from "../SpinningCube/spinningCube";
import { NavLink } from "react-router-dom";



export const Welcome: React.FC = () => {
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
                <div className={`row align-center`}>
                    <div className={`${styles['image-animation']}`}>
                        <img src={businessImg} alt="business_picture" className={`${styles['main-pic']}`} />
                    </div>
                    <div className={`subtitle`}>
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
                <div className={`paragraph-padding`}>
                    <p>
                        I am a mid-level Front-End Developer, Mobile Developer and TV App Developer.
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


                <div className={`row align-center`}>
                    <div>
                        <NavLink to='/about' >
                            <img src={aboutImg} alt="" width={500} height={300} />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/projects' >
                            <img src={projectImg} alt="" width={500} height={300} />
                        </NavLink>
                    </div>
                </div>
                <div className={`row align-center`}>
                    <div>
                        <NavLink to='/contact' >
                            <img src={contactImg} alt="" width={500} height={300} />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/letsplay' >
                            <img src={aboutImg} alt="" width={500} height={300} />
                        </NavLink>
                    </div>
                </div>

            </div>
        </>

    )
}