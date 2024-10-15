import { useEffect, useRef, useState } from 'react';
import './contact.scss';
import { AnimatedLetters } from '../AnimatedLetters/animatedLetters';
import emailjs from '@emailjs/browser';
import { Map } from '../Map/map';
import { Modal } from '../Modal/modal';
import { Comment } from 'react-loader-spinner';
import { validateEmail } from '../../utils/utils';


export const Contact: React.FC = () => {
    const [lettersAnimation, setLettersAnimation] = useState('text-animate');
    const [emailTemplate, setEmailTemplate] = useState({ name: '', email: '', subject: '', message: '' });
    const [errorMessage, setErrorMessage] = useState(String);
    const [commonModal, setCommonModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(String);
    const [modalTitle, setModalTitle] = useState(String);
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
        if(!validateEmail(emailTemplate['email'])){
            setErrorMessage('Please enter a valid e-mail address.')
        }
        else {
            emailjs
                .send(SERVICE_ID, TEMPLATE_ID_, emailTemplate, PUBLIC_KEY)
                .then((res: any) => {
                    if(res['status'] === 200){
                        setModalTitle('Confirmed!');
                        setModalMessage('Your email was succesfully sent!');
                    }
                    else {
                        setModalTitle('Attention!');
                        setModalMessage('Our apologies. Something went wrong. Please try again later.');
                    }     
                    setCommonModal(true);
                    setEmailTemplate({ name: '', email: '', subject: '', message: '' });
                    setErrorMessage('');
                }, (error: any) => {
                    setModalTitle('Attention!');
                    setModalMessage(error);
                    setCommonModal(true);
                })
        }

    }



    return (
        <>
            <div className={`background text`}>
                <section className={`row align-center padding-thirty  padding-all`}>
                    <summary className={`subtitle`}>
                        <AnimatedLetters
                            letters={lettersAnimation}
                            message={contactMe}
                            idx={15}
                        />
                    </summary>
                </section>
                <article className={'paragraph-padding'}>
                    <p className={`margin-left-fifty`}>
                        Let's get in touch! 
                    </p>
                    <p className={`margin-left-fifty`}>
                        Make sure to fill out all the fields with your correct information, shoot me a message and I will get back to you promptly!
                    </p>
                </article>

                <section className={`row align-center`}>
                    <form ref={refForm} onSubmit={sendEmail} className={`contact-form`}>
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
                                {errorMessage ? <div className={`error`}>{errorMessage}</div> : null}
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
                                <input type="submit" className={`flat-button float-right text`} value="SEND" />
                            </li>
                        </ul>
                    </form>
                    <Map />
                    {commonModal ? 
                        <Modal 
                            title={modalTitle}
                            description={modalMessage}
                            isOpen={commonModal}
                            onClose={() => setCommonModal(false)}
                            btnText={'close'}
                        />                
                    : null
                    }
                </section>
                <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperClass="loader-active"
                    color="#fff"
                    backgroundColor="#F4442E"
                />
            </div>
        </>
    )
}