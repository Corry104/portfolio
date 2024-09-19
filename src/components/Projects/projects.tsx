import { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters"


export const Projects: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const aboutMe = 'Projects'.split('');

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
        </div>
    )
}