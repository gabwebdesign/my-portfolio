"use client"
import Link from "next/link";
import gsap from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';


export default function Introducing() {

    gsap.registerPlugin(ScrollTrigger);
    
    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
          <span key={index} className="relative char">
            {char}
          </span>
        ));
    };

    useEffect(        
        () => {

            //const chars = gsap.utils.toArray(".char") as HTMLElement[];
            //const randomNumber = Math.floor(Math.random() * chars.length);

            //let tl = gsap.timeline();
            //tl.from(chars[3],{opacity:0,duration:.7,left:30,ease:"back.inOut",bezier:[{x:0, y:0}, {x:50, y:100}, {x:300, y:20}, {x:400, y:200}, {x:500, y:0}]},0)
            //;

            

        },[]
    ); 

    return (
        <div className="introducting">
            <section id="intro">
                    <div className="flex flex-col justify-between h-90">
                    <nav>
                        <ul className="flex justify-between">
                        <li className="navbrand">
                            GAB
                        </li>
                        <li>
                            <Link href="/" className="btn primary">CONTACT</Link>
                        </li>
                        </ul>
                    </nav>
                    <div className="header">
                        <h1>{splitText("A developer building interactive experiences")}</h1>
                    </div>
                    </div>
            </section>
        </div>
    )

}