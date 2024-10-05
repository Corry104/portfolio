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
            <div className={'paragraph-padding'}>
                <p>
                    I don't know about you but I love gaming! So here is a game of Tetris for you to enjoy. Have fun!! 
                </p>
                <p>
                    Disclaimer: The game can only be played with a keyboard. Thank you for understanding!
                </p>
                

            </div>
            <Tetris />
        </div>
    )
} 
