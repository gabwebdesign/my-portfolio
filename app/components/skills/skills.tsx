'use client';
import Image from "next/image";
import './skills.css';

import gsap from 'gsap';
import { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Skills() {

    useEffect(() => {

        const mm = gsap.matchMedia();

        mm.add("(min-width: 992px)", () => {

            let tl = gsap.timeline({ease: "none"});

            tl
            .from("#skills",{opacity:0})
            .from(".quote",{filter: "blur(20px)", x:-50,opacity:0})
            .to(".profile-img",{filter: "blur(20px)",skewX:'-20deg',rotateX:'300deg',scale:.2,y:-50,opacity:1})
            .to(".profile-img",{filter: "blur(0)",y:-30,skewX:0,rotateX:0,scale:1})
            .from(".description",{x:-50,opacity:0})
            .from(".skills",{x:-50,opacity:0})

            ScrollTrigger.create({
                trigger: "#skill-set",
                pin: true,
                start: "-=30%",
                end: "+=250%",
                animation: tl,
                scrub: true,
                //markers: true
            });
          });

          mm.add("(max-width: 991px)", () => {

            let tl = gsap.timeline({ease: "none"});

            tl
            .from("#skills",{opacity:0})
            .from(".quote",{filter: "blur(20px)", x:-50,opacity:0})
            .to(".profile-img",{filter: "blur(20px)",skewX:'-20deg',rotateX:'300deg',scale:.2,y:-50,opacity:1})
            .to(".profile-img",{filter: "blur(0)",y:-30,skewX:0,rotateX:0,scale:1})
            .from(".description",{x:-50,opacity:0})
            .from(".skills",{x:-50,opacity:0})

            ScrollTrigger.create({
                trigger: "#skills",
                start: "-=30%",
                end: "+=80%",
                animation: tl,
                scrub: 1,
                //markers: true
            });
          });


    },[]);

  return (
      <section className="bg-blue bg-effect" id="skills">
        <div className="flex flex-col justify-between h-full" id="skill-set">
            <div className="quote">
                <blockquote>A person who never made a<br className="hidden lg:block" /> mistake, has never tried<br className="hidden lg:block" /> something new. 
                    <cite className="author"> ALBERT EINSTEN</cite>
                </blockquote>
            </div>
            <div className='content-text flex flex-col-reverse md:flex-row justify-between'>
                <div className='skills-and-description flex justify-between flex-col'>
                    <p className='description text-background'>Highly skilled Front-End Developer with over 10 years of experience building web applications and interactive experiences. Proven ability to collaborate effectively with designers and back-end developers to deliver high-quality, user-friendly solutions.</p>
                    <div className='skills'>
                        <p className="text-background md:text-blue">JavaScript, TypeScript, Apex, Python, C#, SOQL, React, Angular, Next.js, SPA, Bootstrap, Tailwind, CRM, GSAP Animation, LLM, Langchain.</p>
                    </div>
                </div>
                <div className='profile-img'>
                    <Image
                        className="rounded-md img-fluid"
                        src="/profile2.png"
                        alt="profile image"
                        width={208}
                        height={236}
                        priority
                        />
                </div>

            </div>
        </div>

      </section>
  );
}
