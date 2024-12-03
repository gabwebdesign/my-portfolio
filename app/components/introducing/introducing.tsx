"use client"
import Link from "next/link";
import gsap from 'gsap';
import './introducing.css';
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { Lumiflex } from "uvcanvas";

export default function Introducing() {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);

    useEffect(        
        () => {

            //const chars = gsap.utils.toArray(".char") as HTMLElement[];
            //const randomNumber = Math.floor(Math.random() * chars.length);

            const tl = gsap.timeline({
                defaults: {delay:1}
            });
            const tl2 = gsap.timeline();
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


            tl2
            .set('#line',{x:0,y:220,opacity:0})
            .set('#asterisk',{x:472,y:27})
            .set('#group',{scale:.85})  
            .set('#letter_o',{opacity:0})            
            
            .to('#group',{y:360,ease:"back.inOut",duration:.5},2)
            .to('#frame',{width:883,ease:"power.inOut",duration:.5},'same')
            .to(['#box-t-r','#box-b-r'],{x:327,ease:"power.inOut",duration:.5},'same')
            .to('#experiences',{y:360,ease:"back.inOut",duration:.5})
            .to('#asterisk',{duration:3,
                transformOrigin:'center center',
                motionPath: {
                    path: [{x:472, y:90}, {x:530, y:80}, {x:530, y:200},{x:680, y:180},{x:690, y:270}],
                    align: "#asterisk",
                    curviness:.5,
                    autoRotate: true
                  },
                  ease: "expo.inOut"
            },2)
            .to('#asterisk',{rotate:'400deg',ease:'power4.inOut',duration:20},'-=1')
            .to('#line',{opacity:1,x:-20},4)
            .to('#letter_per',{ease:'back.inOut',yoyo:true,repeat:1,
                attr:{
                    x:460
                } 
            },3.5)
            .from('#letter_o',{opacity:0,width:0,duration:.1},4.2)  

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
            <div className="w-full h-full bg-white absolute">
                <Lumiflex />
            </div>
            <section id="intro bg-gray">
                    <div className="flex flex-col justify-between h-80">
                    <nav className="nav">
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
                                <tspan className="tspan" x="0" y="94.888">A devel</tspan>
                                <tspan id="letter_per" className="tspan" x="540" y="94.888">per</tspan>
                                <tspan id="letter_o" x="465" y="94.888">o</tspan>
                                <tspan className="tspan" x="0" y="216.888">building</tspan>
                                <tspan className="tspan" x="0" y="338.888">interactive </tspan>
                                <tspan id="experiences" className="tspan" x="0" y="460.888">experiences</tspan>
                            </text>
                            <path id="line" d="M2 5.31277L576.214 2" stroke="#3947C3" strokeWidth="3" strokeLinecap="round"/>
                            <path id="asterisk" d="M51.1414 27.5984H69.0001V41.4003H51.1414L63.7794 54.0369L53.9912 63.778L41.4004 51.1413V69H27.5998V51.1412L14.9618 63.778L5.22077 54.0369L17.8116 41.4003H0V27.5984H17.8116L5.22077 15.0088L14.9618 5.21942L27.5998 17.8115V0H41.4004V17.8117L54.0384 5.21962L63.7794 14.9617L51.1414 27.5984Z" fill="#3947C3"/>

                            <g id="group">
                                <rect id="frame" x="4.5" y="4.5" width="555" height="135" stroke="#3947C3"/>
                                <rect x="1.5" y="0.5" width="7" height="7" fill="#F5F5F5" stroke="black"/>
                                <path d="M0.5 136.5H7.5V143.5H0.5V136.5Z" fill="#F5F5F5" stroke="black"/>
                                <path id="box-b-r" d="M556.5 136.5H563.5V143.5H556.5V136.5Z" fill="#F5F5F5" stroke="black"/>
                                <path id="box-t-r" d="M556.5 0.5H563.5V7.5H556.5V0.5Z" fill="#F5F5F5" stroke="black"/>
                            </g>
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