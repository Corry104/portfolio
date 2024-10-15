import React, { useEffect, useState } from "react";
import { Tetris } from "./Tetris/tetris";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters";
import { DNA } from "react-loader-spinner";

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
            <section className={`row align-center padding-thirty padding-all`}>
                <summary className={`subtitle`}>
                    <AnimatedLetters
                        letters={lettersAnimation}
                        message={letsPlay}
                        idx={15}
                    />
                </summary>
            </section>
            <article className={'paragraph-padding'}>
                <p className={`margin-left-fifty`}>
                    I don't know about you but I love gaming! So here is a game of Tetris for you to enjoy. Have fun!! 
                </p>
                <p className={`margin-left-fifty`}>
                    Disclaimer: The game can only be played using a keyboard. Thank you for understanding!
                </p>                
            </article>
            <Tetris />
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperClass="loader-active"
            />
        </div>
    )
} 
