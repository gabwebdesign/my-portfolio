"use client";
import { useEffect } from "react";
import CardServices, { ServicesProps } from "../card-services/card-services"
import CardWork, { ThumbWorkProps } from "../card-work/card-work"
import './develop.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Develop() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        if(window.innerWidth > 1024) {
            const tl = gsap.timeline({
                defaults: {
                    ease: "power4.out"
                },
            });
            tl
            .from('#development',{opacity:0})
            .from('.frontend',{y:500,opacity:0},.1)
            .from('.backend',{y:500,opacity:0},.15)
            .from('.ux',{y:500,opacity:0},.2)

            ScrollTrigger.create({
                trigger:"#development",
                //pin: true,
                start: "-400px",
                end: "-200px",
                animation: tl,
                scrub: true,
                //markers: true
            })
        }

    },[]);

    const services:ServicesProps[] = [
        {
            icon: '/images/icons/frontend.svg',
            title: 'Frontend',
            description: 'A custom design and development in your website tailored to your specific requirements focused on performance, and accessibility are key.',
            className: 'frontend'
        },
        {
            icon: '/images/icons/database.svg',
            title: 'Backend',
            description: 'Powerful server-side development using .NET and Node.js to build secure, scalable, and enabling intelligent automation and data processing.',
            className: 'backend'
        },
        {
            icon: '/images/icons/user.svg',
            title: 'UX UI Design',
            description: 'User-centric design focused on modern design principles, ensuring accessibility, responsiveness, and brand consistency.',
            className: 'ux'
        }
    ]

    const works:ThumbWorkProps[] = [
        {
            icon: '/images/icons/quierolote-icon.png',
            title: 'Quierolote Platform',
            className: 'bg-orange',
            industries: 'Real State',
            duration: '6 months',
            technologies: 'React, TypeScript, Next.js, Strapi, PostgreSQL, Material UI, Tailwind CSS',
            description: 'This website is an ambitious project that provides a one-stop platform for searching and finding residential building lots for sale. With our advanced search functionality, you can filter listings by size, location, ground conditions, maintenance costs, amenities, and more. Whether you are looking for a small starter lot or a sprawling estate, our comprehensive database has something for everyone. Unlike other websites, we offer a truly unique and tailored search experience to help buyers find the perfect lot for your needs.',
            alt: 'quierolote development image',
            thumb: '/works/work1_thumb.png',
            large: '/works/work1_large.webp',
            url: 'https://quierolote.com',
            video:false
        },
        {
            icon: '/images/icons/angelina.png',
            title: 'Café Angelina',
            className: 'bg-orange',
            industries: 'E-commerce',
            duration: '1 month',
            technologies: 'React, TypeScript, Tailwind CSS, Adobe Creative Suite',
            description: 'I have designed and developed this website from scratch in React JavasCript Framework. Also I have designed the package design and the logotype and store page.',
            alt: 'Cafe Angelina development image',
            thumb: '/works/work2_thumb.png',
            large: '/works/work2_large.webp',
            video:false
        }
    ]

    return (
        <section className="mt-5" id="development">
            <div className="mb-18 flex flex-col lg:flex-row gap-6">
                <div className="lg:w-96">
                    <h2 className="mb-12 text-7xl lg:ml-5">Are you ready to < br className="hidden md:block"/> <span className="text-orange">&lt;open source of success&gt;</span></h2>
                </div>
                <div>
                    <div className="flex flex-col md:flex-row gap-5 w-full mb-28 overflow-hidden">
                        {services.map((service, index) => (
                            <CardServices key={index} {...service} />
                        ))} 
                    </div>

                </div>
            </div>

            <div>
                <p className="lg:w-2/3 text-2xl lg:ml-14 mb-4">I am a seasoned front-end developer with extensive experience building responsive websites using frameworks such as Angular and React. I can create a custom website tailored to your specific requirements.</p>
                <p className="lg:w-2/3 text-2xl lg:ml-14 mb-24">
                    Great web design isn’t just about creating something beautiful; it’s about crafting experiences that inspire, engage, and leave a lasting impact on the world.
                </p>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-12 lg:gap-1 mb-20 flex-wrap">
                
                <h3 className="mb-6 p-12 special-font text-center text-4xl">Work</h3>

                {works.map((work, index) => (
                    <CardWork key={index} {...work} />
                ))} 
            </div>
        
        </section>
    )
}