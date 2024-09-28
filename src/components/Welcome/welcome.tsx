import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";
import styles from './welcome.module.scss';
import businessImg from '../../assets/images/business_pic.jpg';
import aboutImg from '../../assets/images/about_img.jpg';
import letsPlayImg from '../../assets/images/letsplay_img.jpg';
import contactImg from '../../assets/images/contact_img.jpg';
import projectImg from '../../assets/images/projects_img.jpg';
import { SpinningCube } from "../SpinningCube/spinningCube";
import { NavLink } from "react-router-dom";



export const Welcome: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const greetings = 'Hey there,  nice meeting you'.split('');
    const fName = `I'm Corrado`.split('');
    const img_width = 500;
    const img_height = 300;

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')
        }, 3000);
    }, [])
    return (
        <>
            <div className={`background text`}>
                <div className={`row align-center`}>
                    <div >
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
                <div className={'paragraph-padding'}>
                    <p>
                        I am a mid-level Front-End Developer, Mobile Developer and TV App Developer.
                    </p>
                    <p>
                        I am a problem solver, a team player, highly disciplined and very result driven. 
                        In my experience there are successful track records of looking at requirements, putting together estimates, and delivering projects successfully and on schedule.                         
                    </p>
                    <p>
                    As part of my duties, I provided enhancements to software, mobile applications, and websites. 
                        I create logic approaches and provide immediate solutions to unexpected problems.
                        As a Software Developer, my goal is to continuously increase my programming skills to present better solutions to my employers and their clients.
                    </p>
                </div>


                <div className={`row align-center`}>
                    <div className={'paragraph-padding'}>
                        <NavLink to='/about' >
                            <img src={aboutImg} alt="" width={img_width} height={img_height} />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/projects' >
                            <img src={projectImg} alt="" width={img_width} height={img_height} />
                        </NavLink>
                    </div>
                </div>
                <div className={`row align-center`}>
                <div className={'paragraph-padding'}>
                <NavLink to='/contact' >
                            <img src={contactImg} alt="" width={img_width} height={img_height} />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to='/letsplay' >
                            <img src={letsPlayImg} alt="" width={img_width} height={img_height} />
                        </NavLink>
                    </div>
                </div>

            </div>
        </>

    )
}