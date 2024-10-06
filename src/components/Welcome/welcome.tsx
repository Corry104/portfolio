import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";
import './welcome.scss';
import businessImg from '../../assets/images/business_pic.jpg';
import aboutImg from '../../assets/images/about_img.jpg';
import letsPlayImg from '../../assets/images/letsplay_img.jpg';
import contactImg from '../../assets/images/contact_img.jpg';
import projectImg from '../../assets/images/projects_img.jpg';
import { SpinningCube } from "../SpinningCube/spinningCube";
import { NavLink } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";



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
                <div className={`row align-center padding-thirty`}>
                    <div className={`img-container`}>
                        <img src={businessImg} alt="business_picture" className={`main-pic`} />
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
                <div className={'paragraph-padding welcome-paragraph-pad-top'}>
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

                <div className={`row align-center img-container`}>
                    <div className={`img-lay`}>
                        <NavLink to='/about' >
                            <img className={`img-space`} src={aboutImg} alt="about" width={img_width} height={img_height} />
                            <div className={`img-text text`}>
                                <p>ABOUT</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className={`img-lay`}>
                        <NavLink to='/projects' >
                            <img className={`img-space`} src={projectImg} alt="projects" width={img_width} height={img_height} />
                            <div className={`img-text text`}>
                                <p>PROJECTS</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <div className={`row align-center img-container`}>
                    <div className={`img-lay`}>
                        <NavLink to='/contact' >
                            <img className={`img-space`} src={contactImg} alt="contact" width={img_width} height={img_height} />
                            <div className={`img-text text`}>
                                <p>CONTACT</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className={`img-lay`}>
                        <NavLink to='/letsplay' >
                            <img className={`img-space`} src={letsPlayImg} alt="letsplay" width={img_width} height={img_height} />
                            <div className={`img-text text`}>
                                <p>LET'S PLAY</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperClass="loader-active"
                    colors={['#306cce', '#72a1ed']}
                />
            </div>
        </>
    )
}