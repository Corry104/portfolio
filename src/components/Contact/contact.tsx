import { useEffect, useRef, useState } from 'react';
import styles from './contact.module.scss';
import { AnimatedLetters } from '../AnimatedLetters/animatedLetters';
import emailjs from '@emailjs/browser';
import { Map } from '../Map/map';

export const Contact: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const [emailTemplate, setEmailTemplate] = useState({ name: '', email: '', subject: '', message: '' });
    const refForm = useRef<HTMLFormElement>(null);
    const contactMe = 'Contact Me'.split('');
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID_ = process.env.REACT_APP_TEMPLATE_ID;

    useEffect(() => {
        setTimeout(() => {
            setLettersAnimation('text-animate-hover')
        }, 3000);
    }, [])

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID_, emailTemplate, PUBLIC_KEY)
            .then((res: any) => {
                console.log("🚀 ~ .then ~ res:", res)
                alert('Email sent succesfully - ')
                // window.location.reload();
                setEmailTemplate({ name: '', email: '', subject: '', message: '' })

            }, (error: any) => {
                console.log("🚀 ~ .then ~ error:", error)

            })

    }



    return (
        <>
            <div className={`background text`}>
                <div className={`row align-center`}>
                    <div className={`subtitle`}>
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={contactMe}
                            idx={15}
                        />
                    </div>
                </div>
                <div className={'paragraph-padding'}>
                    <p>
                        Let's get in touch! 
                    </p>
                    <p>
                        Make sure to fill out all the fields with your correct information, shoot me a message and I will get back to you promptly!
                    </p>
                </div>

                <div className={`row align-center`}>
                    <div className={`${styles['contact-form']}`}>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li>
                                    <input
                                        className='text'
                                        type="text"
                                        placeholder='Name*'
                                        name="name"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setEmailTemplate({ ...emailTemplate, 'name': e.target.value });
                                        }}
                                        value={emailTemplate['name']}
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        className='text'
                                        type="email"
                                        placeholder='Email*'
                                        name="email"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setEmailTemplate({ ...emailTemplate, 'email': e.target.value });
                                        }}
                                        value={emailTemplate['email']}
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        className='text'
                                        placeholder="Subject*"
                                        type="text"
                                        name="subject"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            setEmailTemplate({ ...emailTemplate, 'subject': e.target.value });
                                        }}
                                        value={emailTemplate['subject']}
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        className='text'
                                        placeholder="Message*"
                                        name="message"
                                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                            setEmailTemplate({ ...emailTemplate, 'message': e.target.value });
                                        }}
                                        value={emailTemplate['message']}
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className={`${styles['flat-button']} text`} value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <Map />
                </div>
            </div>
        </>
    )
}