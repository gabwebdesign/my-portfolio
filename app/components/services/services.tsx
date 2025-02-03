import React from "react"
import CardServices, { ServicesProps } from "../card-services/card-services"
import CardWork, { ThumbWorkProps } from "../card-work/card-work"

export default function Services() {

    const services:ServicesProps[] = [
        {
            icon: '/images/icons/flash.png',
            title: 'IA Agent',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'conexion-left'
        },
        {
            icon: '/images/icons/brain.png',
            title: 'RAG Solutions',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'conexion-left'
        },
        {
            icon: '/images/icons/chat.png',
            title: 'Chatbot',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
        }
    ]

    const works:ThumbWorkProps[] = [
        {
            icon: '/images/icons/meal.png',
            title: 'Whatsapp Chatbot Restaurant',
            className: 'bg-orange',
            industries: 'Restaurant',
            duration: '3-4 days',
            technologies: 'NodeJS, TypeScript, OpenAI, BuilderBot, Microsoft XLSX',
            description: 'This is a chatbot project connected with OpenAI to support deliveries, create orders, and generate budgets.',
            alt: 'Chatbot Restaurant',
            thumb: '/works/work1_thumb.png',
            large: '/works/chatbot.mp4',
            video:true
        },
        {
            icon: '/images/icons/robot.png',
            title: 'IA Agent',
            className: 'bg-orange',
            industries: 'Real Estate',
            duration: '1 month',
            technologies: 'React, TypeScript, Next.js, Strapi, OpenAI, Tailwind CSS, Google API, Web Scraping PlayWright, Pincone, LangChain',
            description: 'This is a RAG Agent that use Google API Place, Vector Database and Web Scraping to generate an travel itineray to match with the user preferences.',
            alt: 'IA Travel Assistance',
            thumb: '/works/work1_thumb.png',
            large: '/works/travel.png',
            url: 'https://assistance-view.vercel.app/',
            video:false
        }
    ]


    return (
        <section className="mt-5" id="ia">
            <div className="mb-28 lg:ml-12">
                <h1 className="mb-12">Bring the Power of AI to < br className="hidden md:block"/>Your Business! <span className="text-orange special-font">RAG</span> as service</h1>
                <p className="md:w-2/3 text-xl md:ml-10">
                    Do you need an intelligent system that not only retrieves information but also generates contextually rich and meaningful responses? I&apos;m here to create custom RAG (Retrieval-Augmented Generation) solutions tailored to your business needs.
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-1 lg:gap-40 mb-28">
                {services.map((service, index) => (
                    <CardServices key={index} {...service} />
                ))} 
            </div>

            <div className="w-full flex flex-col md:flex-row flex-wrap gap-12 md:gap-3 mb-20">
                
                <h4 className="mb-6 p-12 text-center">Work</h4>

                {works.map((work, index) => (
                    <CardWork key={index} {...work} />
                ))} 
            </div>        
        </section>
    )
}