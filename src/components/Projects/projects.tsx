import React, { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters"
import { Vortex } from "react-loader-spinner";
import { Carousel } from "../Slider/slider";
import media from '../../assets/images/index';


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
                    I have been involved in several projects throughout my career and I am very proud of all the work I have done because I gave 100% to each and every one of them.
                </p>
                <p className={`margin-left-fifty`}>
                    Inside my <a href="https://github.com/Corry104" target="_blank" rel="noopener noreferrer" className={`text`}>GitHub profile</a> you will find more projects based on  my experience level at the time they have been coded.
                </p>
            </article>
            <Carousel 
                title={'KindeReady'}
                height={350}
                width={300}
                img={[media['kindereadyLogin'], media['kindereadyMain'], media['kindereadyStudent'], media['kindereadyShapeActivities'], media['kindereadyLetterActivities']]}
            />

            <Carousel 
                title={'Hughesnet Mobile Application'}
                height={350}
                width={300}
                img={[media['hughesnetMobileMain'],media['hughesnetMobileAccount'],media['hughesnetMobileHandbook'],media['hughesnetMobileSupport']]}
            />
            <Carousel 
                title={'Hughesnet Website'}
                height={350}
                width={300}
                img={[media['hughesnetWebMainPage'], media['hughesnetWebHandbook'], media['hughesnetWebNotifications'], media['hughesnetWebChat'], media['hughesnetWebShop']]}
            />
            

            <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperClass="loader-active"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
            />
        </div>
    )
}