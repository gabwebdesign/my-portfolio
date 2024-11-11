'use client';
import Link from "next/link";
import './contact.css';
import { useEffect } from "react";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin  } from 'gsap/MotionPathPlugin';

export default function Contact() {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    useEffect(() => {

        let tl = gsap.timeline({ease: "none"});
        
        tl
        .from(".contact-section", { opacity:0})
        .from(".contact-header", { opacity:0, scale:.3 ,ease: "back.inOut",
        })
        

        ScrollTrigger.create({
            trigger: ".contact",
            //pin: true,
            start: "-=50%",
            end: "+=10%",
            animation: tl,
            //scrub: true,
            //markers: true
        })
    },[]);


    return (
        <section className="contact-section bg-gray flex flex-col justify-between" id="contact">
            <div className="contact flex flex-col justify-between h-full">
                <nav>
                    <ul className="flex justify-between">
                    <li className="navbrand">
                        GAB
                    </li>
                    <li>
                        <Link href="/fullstack.pdf" className="btn primary">RESUME</Link>
                    </li>
                    </ul>
                </nav>
                <div className="contact_content">
                    <div> 
                    </div>
                    <div>
                        <p className="mb-4">If you would like to learn more about my qualifications and <br className="hidden lg:block" /> discuss potential projects, please do not hesitate to reach out.</p>
                        <ul>
                            <li className="mb-3">
                            <p className="font-bold">Address</p> 
                            <p>Condominio Rosedal 1, San Francisco, Heredia, Costa Rica.</p>
                            </li>
                            <li className="mb-3">
                                <p className="font-bold">Phone</p>
                                <Link href="tel:+50662000055">
                                    +506 6200055
                                </Link>
                            </li>
                            <li className="mb-3">
                                <p className="font-bold">E-mail</p>
                                <Link href="mailto:gab.webdesign@gmail.com">
                                    gab.webdesign@gmail.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact-header">
                    <h2>Let’s work...</h2>
                </div>
            </div>
            
        </section>
    )
}