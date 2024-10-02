import React, { useEffect, useState } from "react";
import { Tetris } from "./Tetris/tetris";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";

export const LetsPlay: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const letsPlay = `Let's Play`.split('');


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
                        message={letsPlay}
                        idx={15}
                    />
                </div>
            </div>
            <div className={`row align-center`}>
                <Tetris />
            </div>
        </div>
    )
} 
