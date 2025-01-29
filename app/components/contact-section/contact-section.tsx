"use client";
import { useEffect, useState } from 'react';
import './contact-section.css';
import Image from 'next/image';
import { createOportunity } from '../utils/actions';
export default function ContactSection() {

    const [emailError, setEmailError] = useState('');
    const [fullnameError, setFullnameError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [values, setValues]= useState({
        fullname:'',
        email:'',
        message:'',
    })

    useEffect(() => {
        setIsFormValid(
            values.fullname.trim() !== '' &&
            validateEmail(values.email)
        );
    }, [values]);

    const openWhatsApp =(phone:string)=>{
        const message = `Hi, I am interested in your services: `;
        const whatsappLink = `https://wa.me/506${phone}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink,'_blank');
    }

    const submit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!validateEmail(values.email)) {
            setEmailError('Please enter a valid email address.');
            return;
        }

        if (values.fullname.trim() === '') {
            setFullnameError('Please enter your full name.');
            return;
        }
        createOportunity({...values});
        setIsSubmitted(true);
    }

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!validateEmail(e.target.value)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
    };

    const handleFullnameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.value.trim() === '') {
            setFullnameError('Please enter your full name.');
        } else {
            setFullnameError('');
        }
    };


    return (
        <section className="contact-section-design flex flex-col justify-between">
            <div className="bg-orange rounded-xl p-16">
                <div className="flex justify-center mt-20 flex-col lg:flex-row">
                    <div className='mb-16'>
                      <h4 className='text-white text-6xl mb-6'>Let’s work together...</h4> 
                      <p className='text-white lg:w-2/3 mb-10'>If you would like to learn more about my qualifications and
                      discuss potential projects, please do not hesitate to reach out.</p> 

                      <div className='flex flex-row items-start mb-10 gap-3'>
                            <Image 
                                src={'/images/icons/location.svg'}
                                alt='location'
                                width={25}
                                height={25}
                            ></Image>
                            <div className='flex flex-col'>
                                <p className='text-white font-bold mb-2 text-xl'>Address:</p>
                                <p className='text-white'>San Francisco, Heredia, <span className='font-bold'>Costa Rica</span>.</p>
                            </div>
                      </div>

                      <div className='flex flex-row items-start mb-10 gap-3'>
                            <Image 
                                src={'/images/icons/email.svg'}
                                alt='email icon'
                                width={25}
                                height={25}
                            ></Image>
                            <div className='flex flex-col'>
                                <p className='text-white font-bold mb-2 text-xl'>Get in touch:</p>
                                <a href="tel:+50662000055" className='text-white mb-2'>506+ 62000055.</a>
                                <a className='text-white' href="mailto:gab.webdesign@gmail.com">gab.webdesign@gmail.com</a>
                            </div>
                      </div>
                      <div className='social'>
                        <ul className='flex gap-3 lg:ml-7'>
                            <li>
                                <div className='cursor-pointer' onClick={()=>openWhatsApp('62000055')}>
                                    <Image 
                                        src={'/images/icons/whatsapp.png'}
                                        alt='whatsapp icon'
                                        width={35}
                                        height={35}
                                    ></Image>
                                </div>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/gabriel-aguilar-a0574649/" target='_blank'>
                                    <Image 
                                        src={'/images/icons/linkedin.png'}
                                        alt='whatsapp icon'
                                        width={35}
                                        height={35}
                                    ></Image>
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://www.facebook.com/gabriel.aguilar.5688/" target='_blank'>
                                    <Image 
                                        src={'/images/icons/facebook.png'}
                                        alt='facebook icon'
                                        width={35}
                                        height={35}
                                    ></Image>
                                </a>
                            </li>
                            <li>
                                <a href="https://discordapp.com/users/gabrielaguilar0883" target='_blank'>
                                    <Image 
                                        src={'/images/icons/discord.png'}
                                        alt='discord icon'
                                        width={35}
                                        height={35}
                                    ></Image>
                                </a>
                            </li>
                        </ul>
                      </div>
                    </div>
                    <div className="contact-form flex items-center bg-background p-8 rounded-xl lg:w-1/3">
                    {
                        isSubmitted && <p className='text-blue text-3xl text-center'>Thank you for reaching out! I will get back to you as soon as possible.</p>
                    }
                    {
                        !isSubmitted && 
                            <form className='form-contact' onSubmit={submit}>
                            <Image 
                                src={'/images/isotipo_black.svg'}
                                alt='logo'
                                width={36}
                                height={46}
                                className='mb-6'>
                            </Image>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                value={values.fullname}
                                onChange={(e)=>setValues({...values,fullname:e.target.value})}
                                onBlur={handleFullnameBlur}
                            />
                            {fullnameError && <p className="text-red-500">{fullnameError}</p>}
                            <input 
                                type="e-mail" 
                                placeholder="Your E-mail" 
                                value={values.email}
                                onBlur={handleEmailBlur}
                                onChange={(e)=>setValues({...values,email:e.target.value})}
                            />
                            {emailError && <p className="text-red-500">{emailError}</p>}
                            <textarea 
                                placeholder="Type here your message..."
                                rows={5} cols={50}
                                value={values.message}
                                onChange={(e)=>setValues({...values,message:e.target.value})}
                            ></textarea>
                            <button 
                                type="submit"
                                disabled={!isFormValid}
                                className='w-full'>
                                Send Information
                            </button>
                        </form>
                    }
                    
                    </div>
                </div>
            </div>
        </section>
    )
}