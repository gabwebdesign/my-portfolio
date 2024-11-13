"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './experience.css';
import Job, { JobsProps } from './jobs/Jobs';
import Work, { WorksProps } from './works/works';

export default function Experience() {

    const jobs: JobsProps[] = [
        {
            company: 'BeyondSoft',
            role: 'Salesforce Developer',
            dateStart: '2023',
            dateEnd: '2024',
            location: 'Calle Blancos, San José',
            description: 'Successfully transitioned into a front-end focused role within Salesforce by learning Apex, LWC, Flows, and SOQL. Developed custom features for Amazon Prime Video Account.'
        },
        {
            company: 'Havas Magma',
            role: 'Senior Front-End Developer',
            dateStart: '2017',
            dateEnd: '2023',
            location: 'Lindora, Heredia',
            description: 'Developed and maintained responsive web applications using best practices in code, CI/CD, task automation, SPA, and cross-browser compatibility. Collaborated with designers and back-end developers to translate mockups and wireframes into functional web pages. Built and implemented reusable UI components using React, Angular, or Vanilla JavaScript based on project needs.'
        },
        {
            company: 'PGD, Publicis Groupe',
            role: 'Front-End Developer',
            dateStart: '2013',
            dateEnd: '2017',
            location: 'Belén, Heredia',
            description: 'Delivered high-quality code for challenging projects with clients like Verizon Wireless and Kraft Foods. Collaborated closely with clients to ensure their needs were met through attention to detail and effective communication.'
        }
    ];

    const works: WorksProps[] = [        
        {
            title: 'Quierolote Platform',
            industries: 'Real State',
            duration: '6 months',
            technologies: 'React, TypeScript, Next.js, PostgreSQL, Material UI, Tailwind CSS',
            description: 'This website is an ambitious project that provides a one-stop platform for searching and finding residential building lots for sale. With our advanced search functionality, you can filter listings by size, location, ground conditions, maintenance costs, amenities, and more. Whether you are looking for a small starter lot or a sprawling estate, our comprehensive database has something for everyone. Unlike other websites, we offer a truly unique and tailored search experience to help buyers find the perfect lot for your needs.',
            alt: 'quierolote development image',
            thumb: '/works/work1_thumb.png',
            large: '/works/work1_large.webp'
        },
        {
            title: 'Cafe Angelina',
            industries: 'E-commerce',
            duration: '1 month',
            technologies: 'React, TypeScript, Tailwind CSS, Adobe Creative Suite',
            description: 'I have designed and developed this website from scratch in React JavasCript Framework. Also I have designed the package design and the logotype and store page.',
            alt: 'Cafe Angelina development image',
            thumb: '/works/work2_thumb.png',
            large: '/works/work2_large.webp'
        },
        {
            title: 'Life Chicago',
            industries: 'Pharmaceutical',
            duration: '3 month',
            technologies: 'Angular, TypeScript, Bootstrap, Java, Jenkins, Git, Adobe Creative Suite',
            description: 'Led the development of this landing page, adhering strictly to brand guidelines and storyboards. Implemented responsive designs for mobile, desktop, iOS, and Android devices using Angular 10, Sass, and Greensock. Developed custom components, directives, and services to ensure seamless functionality. The result was a dynamic and interactive website with a seamless user experience.',
            alt: 'Life Chicago development image',
            thumb: '/works/work3_thumb.png',
            large: '/works/work3_large.jpg'
        },
        {
            title: 'Karyforward Website',
            industries: 'Pharmaceutical',
            duration: '3 month',
            technologies: 'Angular, TypeScript, Bootstrap, Java, Jenkins, Git, Adobe Creative Suite, Sass, Voice Over, NVDA, WCAG',
            description: 'Karyforward website is page support patients with program by Karyopharm Therapeutics® Inc. I have built the Patient page on this page, also all functionally in the website, including the WCAG content accecibility to the entire site, mobile and desktop versions. Again this project was succefull, the page has excellent performance and user experience and it is accesible differents physical disabilities as client required.',
            alt: 'karyforward development image',
            thumb: '/works/work4_thumb.png',
            large: '/works/work4_large.webp'
        }
    ]

    return(
        <section className="bg-orange">
            <div className="experience-content">
                <div>
                    {jobs.map((job, index) => (
                        <div className='job' key={index}>
                            <Job
                                
                                company={job.company}
                                role={job.role}
                                dateStart={job.dateStart}
                                dateEnd={job.dateEnd}
                                location={job.location}
                                description={job.description}
                            />
                        </div>
                        
                    ))}
                </div>
                <div className='work'>
                    <h3 className='mb-3 text-background'>Works</h3>
                    <div className='boxes flex gap-2'>
                        { works.map((work, index) => (
                            <div className='work' key={index}>
                                <Work
                                    title={work.title}
                                    industries={work.industries}
                                    duration={work.duration}
                                    technologies={work.technologies}
                                    description={work.description}
                                    alt={work.alt}
                                    thumb={work.thumb}
                                    large={work.large}
                                /> 
                            </div>                   
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}