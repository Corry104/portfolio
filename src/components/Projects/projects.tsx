import React, { useEffect, useState } from "react";
import { AnimatedLetters } from "../AnimatedLetters/animatedLetters"
import { Vortex } from "react-loader-spinner";
import { Carousel } from "../Slider/slider";
import hughesnetMobileMain from '../../assets/images/projects/mobile_appStore.png';
import hughesnetMobileAccount from '../../assets/images/projects/mobile_appStore_account.png';
import hughesnetMobileHandbook from '../../assets/images/projects/mobile_appStore_handbook.png';
import hughesnetMobileSupport from '../../assets/images/projects/mobile_appStore_support.png';
import hughesnetWebNotifications from '../../assets/images/projects/hughesnet_web_notifications.png';
import hughesnetWebHandbook from '../../assets/images/projects/hughesnet_web_handbook.png';
import hughesnetWebMainPage from '../../assets/images/projects/hughesnet_web_mainPage.png';
import hughesnetWebShop from '../../assets/images/projects/hughesnet_web_shop.png';
import hughesnetWebChat from '../../assets/images/projects/hughesnet_web_chat.png';



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
            <div className={`row align-center padding-thirty`}>
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
                    I have been involved in several projects throughout my career and I am very proud of all the work I have done because I gave 100% to each and every one of them.
                </p>
                <p>
                    Inside my <a href="https://github.com/Corry104" target="_blank" rel="noopener noreferrer" className={`text`}>GitHub profile</a> you will find more projects based on  my experience level at the time they have been coded.
                </p>
            </div>

            <Carousel 
                title={'Hughesnet Mobile Application'}
                url={'https://www.apple.com/app-store/'}
                height={350}
                width={300}
                img={[hughesnetMobileMain,hughesnetMobileAccount,hughesnetMobileHandbook,hughesnetMobileSupport]}
            />
            <Carousel 
                title={'Hughesnet Website'}
                url={'https://my.hughesnet.com/en/overview'}
                height={350}
                width={300}
                img={[hughesnetWebMainPage, hughesnetWebHandbook, hughesnetWebNotifications, hughesnetWebChat, hughesnetWebShop]}
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