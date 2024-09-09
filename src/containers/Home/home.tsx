import { useEffect, useState } from 'react';
import './home.scss';
import { AnimatedLetters } from '../../components/AnimatedLetters/animatedLetters';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/Logo/logo';
import { Hourglass } from 'react-loader-spinner';

export const Home: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const greetings = 'Hey, there'.split('');
    const fName = `I'm Corrado`.split('');
    const job = 'Software Developer'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')
        }, 3000);
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='paragraph'>
                    <h1>
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={greetings}
                            idx={10}
                        />
                        <br />
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={fName}
                            idx={15}
                        />
                        <br />
                        <br />
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={job}
                            idx={20}
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
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                // wrapperStyle={{}}
                wrapperClass="loader-active"
                colors={['#306cce', '#72a1ed']}
            />           
        </>

    )
}