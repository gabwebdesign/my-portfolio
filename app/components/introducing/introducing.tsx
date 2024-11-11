"use client"
import Link from "next/link";
import gsap from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './introducing.css';


export default function Introducing() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(        
        () => {

            //const chars = gsap.utils.toArray(".char") as HTMLElement[];
            //const randomNumber = Math.floor(Math.random() * chars.length);

            let tl = gsap.timeline();
            let tl2 = gsap.timeline();
            tl
            .from('.introducting',{opacity:0,duration:1,x:-100,ease:"back.inOut"})
            .from('.header',{opacity:0,duration:.5,x:100,ease:"back.inOut"},.3)
            .to('#paint',{ duration:3,yoyo:true,repeat:-1,attr:{x1:420,y1:400}},1)
            .to('.tspan',{ duration:4,opacity:.7,
                attr:{
                    x1:100,
                    y2:50
                },
                stagger:{
                    amount: 8,
                    from: "random"
                  },
                yoyo:true,
                repeat:-1
            },1)


            // tl2.to('.tspan',{
            //     attr:{
            //         y:100,
            //       },
            //       opacity:0,
            // },.35)
            // ;

            // ScrollTrigger.create({
            //     trigger: ".introducting",
            //     pin: true,
            //     start: "150px",
            //     end: "450px",
            //     animation: tl2,
            //     scrub: true,
            //     //markers: true
            // })

        },[]
    ); 

    return (
        <div className="introducting">
            <section id="intro bg-gray">
                    <div className="flex flex-col justify-between h-90">
                    <nav>
                        <ul className="flex justify-between">
                        <li className="navbrand">
                            GAB
                        </li>
                        <li>
                            <Link href="#contact" className="btn primary">CONTACT</Link>
                        </li>
                        </ul>
                    </nav>
                    <div className="header">
                        <svg viewBox="0 0 759 486" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text fill="url(#paint)" xmlSpace="preserve"  fontFamily="Alexandria" fontSize="128" letterSpacing="0em">
                                <tspan className="tspan" x="0" y="94.888">A developer</tspan>
                                <tspan className="tspan" x="0" y="216.888">building</tspan>
                                <tspan className="tspan" x="0" y="338.888">interactive </tspan>
                                <tspan className="tspan" x="0" y="460.888">experiences</tspan>
                            </text>
                            <defs>
                                <linearGradient className="gradient" id="paint" x1="196.5" y1="5.19919e-06" x2="510" y2="639" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#3947C3"/>
                                    <stop offset="1" stopColor="#1B225D"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                        {/*
                            <div className="header">
                                <h1>A developer building<br className="hidden lg:block" /> interactive experiences</h1>
                            </div>  
                        */}                    
                    </div>
            </section>
        </div>
    )

}