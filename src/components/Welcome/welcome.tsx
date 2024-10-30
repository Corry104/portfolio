import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";
import './welcome.scss';
// import businessImg from '../../assets/images/business_pic.jpg';
// import aboutImg from '../../assets/images/about_img.jpg';
// import letsPlayImg from '../../assets/images/letsplay_img.jpg';
// import contactImg from '../../assets/images/contact_img.jpg';
// import projectImg from '../../assets/images/projects_img.jpg';
import media from "../../assets/images";
import { SpinningCube } from "../SpinningCube/spinningCube";
import { NavLink } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
import { Weather } from "../Weather/weather";



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
            <section className={`background text padding-thirty padding-all`}>
                <Weather />
                <section className={`row align-center`}>
                    <section className={`img-container`}>
                        <img src={media['businessImg']} alt="business_picture" className={`main-pic`} />
                    </section>
                    <summary className={`subtitle`}>
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
                    </summary>

                    <SpinningCube />
                </section>
                <article className={'paragraph-padding welcome-paragraph-pad-top'}>
                    <p className={`margin-left-fifty`}>
                        I am a mid-level Front-End Developer, Mobile Developer and TV App Developer.
                        Strongly proficient in Angular.js, React.js, React Native, JavaScript/Typescript, Sass, CSS3, Node.js,
                        RestFUL Api, mySQL database, Front-End Architecture and more modern frontend development tools.
                    </p>
                    <p className={`margin-left-fifty`}>
                        I am a problem solver, a team player, highly disciplined and very result driven.
                        In my experience there are successful track records of looking at requirements, putting together estimates, and delivering projects successfully and on schedule.
                    </p>
                    <p className={`margin-left-fifty`}>
                        I have a strong experience in building and maintaining high-performance web applications, mobile applications and softwares by
                        developing new user-facing features, optimizing applications for maximum speed, and ensuring that all components and the overall application are robust and easy to maintain.                       
                    </p>
                    <p className={`margin-left-fifty`}>
                        As a Software Developer, my goal is to create logical approaches and provide immediate solutions to unexpected problems by
                        continuously increase my skills to present better solutions to employers and clients.
                    </p>
                </article>

                <section className={`row align-center img-container`}>
                    <p className={`img-lay`}>
                        <NavLink to='/about' >
                            <img className={`img-space`} src={media['aboutImg']} alt="about" width={img_width} height={img_height} />
                            <label className={`img-text text`}>
                                <span className={`hover-text`}>ABOUT</span>
                            </label>
                        </NavLink>
                    </p>
                    <p className={`img-lay`}>
                        <NavLink to='/projects' >
                            <img className={`img-space`} src={media['projectImg']} alt="projects" width={img_width} height={img_height} />
                            <label className={`img-text text`}>
                                <span className={`hover-text`}>PROJECTS</span>
                            </label>
                        </NavLink>
                    </p>
                </section>
                <section className={`row align-center img-container`}>
                    <p className={`img-lay`}>
                        <NavLink to='/contact' >
                            <img className={`img-space`} src={media['contactImg']} alt="contact" width={img_width} height={img_height} />
                            <label className={`img-text text`}>
                                <span className={`hover-text`}>CONTACT</span>
                            </label>
                        </NavLink>
                    </p>
                    <p className={`img-lay`}>
                        <NavLink to='/letsplay' >
                            <img className={`img-space`} src={media['letsPlayImg']} alt="letsplay" width={img_width} height={img_height} />
                            <label className={`img-text text`}>
                                <span className={`hover-text`}>LET'S PLAY</span>
                            </label>
                        </NavLink>
                    </p>
                </section>
                <Hourglass
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="hourglass-loading"
                    wrapperClass="loader-active"
                    colors={['#306cce', '#72a1ed']}
                />
            </section>
        </>
    )
}