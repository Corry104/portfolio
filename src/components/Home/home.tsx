import { useEffect, useState } from 'react';
import './home.scss';
import { AnimatedLetters } from '../AnimatedLetters/animatedLetters';
import { Link } from 'react-router-dom';
import { Logo } from './Logo/logo';

export const Home: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const greetings = 'Hey, there'.split('');
    const fName = `I'm Corrado`.split('');
    const job = 'Software Developer'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')   
        }, 4000);
    }, [])

    return (
        <div className='container home-page'>
            <div className='paragraph'>
                <h1>                    
                    <AnimatedLetters 
                        letters={lettersAnimation}
                        message={greetings}
                        idx={10}
                    />
                    <br/>
                    <AnimatedLetters 
                        letters={lettersAnimation}
                        message={fName}
                        idx={20}
                    />
                    <br/>
                    <br/>
                    <AnimatedLetters 
                        letters={lettersAnimation}
                        message={job}
                        idx={31}
                    />
                </h1>
                <div className='sub-description-animation'>
                    <h2>Full Stack Developer / Mobile Developer / TV App Developer</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
            </div>
            <Logo />
        </div>
    )
}