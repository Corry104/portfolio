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
                        I am a mid-level Front-End Developer, Mobile Developer, and TV App Developer with strong proficiency in Angular.js, 
                        React.js, React Native, JavaScript/TypeScript, Sass, CSS3, Node.js, RESTful APIs, MySQL databases, 
                        Front-End Architecture, and a variety of modern development tools.
                    </p>
                    <p className={`margin-left-fifty`}>
                        As a problem solver and a dedicated team player, I am highly disciplined and results-driven. 
                        My experience includes successfully assessing project requirements, providing accurate estimates, and delivering projects on time.
                    </p>
                    <p className={`margin-left-fifty`}>
                        I have extensive experience in building and maintaining high-performance web and mobile applications, 
                        applying best practices throughout the full software development lifecycle. 
                        This includes adherence to coding standards, software architecture principles, code reviews, source control management, 
                        continuous deployment, testing, and operational excellence. I am adept at developing user-facing features, 
                        optimizing applications for maximum speed, and ensuring that all components are robust and easy to maintain.
                    </p>
                    <p className={`margin-left-fifty`}>
                        My goal as a Software Developer is to devise logical solutions and address unexpected challenges effectively. 
                        I am committed to continuously enhancing my skills to deliver better solutions for employers and clients alike.
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