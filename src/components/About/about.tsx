import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters"


export const About: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const aboutMe = 'Allow me to introduce myself..'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <div className={`background text`}>
            <div className={`row align-center`}>
                <div className={`subtitle`}>
                    <AnimatedLetters
                        letters={lettersAnimation}
                        message={aboutMe}
                        idx={15}
                    />

                </div>
            </div>
            <div className={'paragraph-padding'}>
                <p>
                    My work and education history is quite unique, they have been some major changes in my career.
                    I have started in the luxury hotel and high-end restaurant business to eventually, due to private family reason, make a full switch into the IT world and more specifically, Software Development by obtaining a certification in Full Stack Web Development at the University of California Los Angeles (Go Bruins!!) Extension in Los Angeles.
                </p>
                <p>
                    I have a natural ability to rewire myself and adapt in change of circumstances with a strong will to succeed in any of the challenges I am facing and I pride myself as a logical and creative thinker who enjoys learning new languages, frameworks and technologies.
                    My analytical skills, education, and passion are crucial to be one step ahead in this ever evolving technological industry. My stellar organisational skills are essential to keep code DRY as re-factored as possible.
                </p>
                <p>
                    The gratification of solving problems is what drives me to be a better programmer. A business background combined with the entrepreneurial spirit can be utilised for aligning profitable goals when programming software.
                    I have over a decade of experience in customer service in Europe and here in the United States. While working in the luxury hotel and restaurant industry I was trained to maintain calm under pressure and under stressful situations, focusing on the customer experience. My fire comes from a passion of helping people and my way of thinking “outside the comfort zone” to find a solution, which translates to problem solving, whether that is a human or a computer related challenge.
                    I have applied the same way of thinking during my switch onto my new career path in IT and software development and I am able to successfully combine the two concepts to be a step ahead.
                </p>
            </div>
            <div className={`row align-center`}>
                VIDEO OF MYSELF
            </div>
        </div>
    )
}