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
                    I have been involved in a variety of projects throughout my career, and I take great pride in the work I’ve accomplished, giving 100% to each endeavor.
                </p>
                <p className={`margin-left-fifty`}>
                    You can explore my <a href="https://github.com/Corry104" target="_blank" rel="noopener noreferrer" className={`text`}>GitHub profile</a> to find a selection of projects that reflect my experience and growth at the time they were developed. Each project showcases my dedication to quality and my commitment to continuous improvement in my skills.
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