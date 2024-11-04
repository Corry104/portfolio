import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters"
import { FidgetSpinner } from "react-loader-spinner";


export const About: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const aboutMe = 'Allow me to introduce myself...'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
            <div className={`background text`}>
                <section className={`row align-center padding-thirty padding-all`}>
                    <summary className={`subtitle`}>
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={aboutMe}
                            idx={15}
                        />
                    </summary>
                </section>
                <article className={'paragraph-padding'}>
                    <p className={`margin-left-fifty`}>
                        My professional and educational journey is quite unique, beginning in the luxury hotel and high-end restaurant industry before making a full transition into IT and software development.
                        This shift was motivated by personal circumstances, leading me to obtain a certification in Full Stack Web Development from the University of California, Los Angeles—Go Bruins!
                    </p>
                    <p className={`margin-left-fifty`}>
                        I possess a natural ability to adapt to changing circumstances and a strong determination to overcome challenges.
                        I take pride in being both a logical and creative thinker, and I enjoy exploring new languages, frameworks, and technologies. My analytical skills, combined with my education and passion for continuous learning, enable me to stay ahead in the rapidly evolving tech landscape.
                        Additionally, my organizational skills are vital for keeping my code DRY and well-refactored.
                    </p>
                    <p className={`margin-left-fifty`}>
                        The satisfaction of solving problems drives me to become a better programmer. My background in business and an entrepreneurial mindset allow me to align programming projects with profitable goals. With over a decade of experience in customer service across Europe and the United States,
                        I have been trained to maintain composure under pressure while prioritizing the customer experience. My passion for helping others and my ability to think "outside the box" enhance my problem-solving skills, whether addressing challenges related to human interaction or technical issues.
                    </p>
                    <p className={`margin-left-fifty`}>
                        As I transitioned into the IT field, I successfully integrated these skills and perspectives, positioning myself to excel in software development while leveraging my diverse background to deliver innovative solutions.
                    </p>
                </article>

                <FidgetSpinner
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="fidget-spinner-loading"
                    wrapperClass="loader-active"
                />
            </div>
        </>
    )
}