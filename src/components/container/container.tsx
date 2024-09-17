import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";
import styles from './container.module.scss';
import businessPic from '../../assets/images/business_pic.jpg';


interface Params {
    theme: any,
}


export const Container: React.FC<Params> = (params: Params) => {
    const { theme } = params;
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const greetings = 'Hey, there nice meeting you'.split('');
    const fName = `I'm Corrado`.split('');

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')
        }, 3000);
    }, [])
    return (
        <>
            <div className={`${styles[theme]} background text`}>
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
                </div>
                <div className={`${styles['padding-top-ten']} ${styles['sub-description-animation']}`}>
                    <span >
                        I am a mid-level Full Stack Developer, Mobile Developer and TV App Developer.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        v
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        vv

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        v
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        vv

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        v
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus numquam ut blanditiis in labore. Iste, culpa sit aliquam provident odit corrupti id quo. Neque amet possimus tenetur quisquam dolore.
                        vv

                    </span>

                </div>
                {/*                     
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link> */}
            </div>
        </>

    )
}