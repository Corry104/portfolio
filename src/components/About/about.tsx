import { useEffect, useState } from 'react';
import { AnimatedLetters } from '../AnimatedLetters/animatedLetters';
import './about.scss';
import { Logo } from '../Home/Logo/logo';
import { FidgetSpinner } from 'react-loader-spinner';


export const About: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');

    const aboutMe = 'Allow me to introduce myself'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')   
        }, 3000);
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='paragraph'>
                    <h1>
                        <AnimatedLetters 
                            letters={lettersAnimation}
                            message={aboutMe}
                            idx={12}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Accusantium ea ullam suscipit voluptate itaque veniam facilis, iure magnam libero, officiis culpa odit molestias ipsam ex beatae temporibus quae, tempora commodi.
                    </p>
                </div>
                <Logo />
                
            </div>
            <FidgetSpinner
                visible={true}
                height="80"
                width="80"
                ariaLabel="fidget-spinner-loading"
                // wrapperStyle={{}}
                wrapperClass="loader-active"
            />
        </>
    )
}