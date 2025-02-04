import React from "react"
import CardServices, { ServicesProps } from "../card-services/card-services"
import CardWork, { ThumbWorkProps } from "../card-work/card-work"

export default function Services() {

    const services:ServicesProps[] = [
        {
            icon: '/images/icons/bolt.svg',
            title: 'IA Agent',
            description: 'Advanced RAG assistant with multi-dataset support, real-time API integration, and custom frontend.',
            className: 'conexion-left'
        },
        {
            icon: '/images/icons/assistance.svg',
            title: 'Assistance',
            description: 'Full RAG system with vector database integration. Up to 3 data sources and dynamic responses.',
            className: 'conexion-left'
        },
        {
            icon: '/images/icons/chat.png',
            title: 'Chatbot',
            description: 'I will develop a flow to guide the user to driven the info desired by the company using WhatsApp Channel.',
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
        <section className="mt-32" id="ia">
            <div className="mb-28 lg:ml-12">
                <h1 className="mb-12">Bring the Power of AI to < br className="hidden md:block"/>Your Business with <span className="text-orange special-font">RAG</span>!</h1>
                <p className="md:w-2/3 text-2xl md:ml-10 mb-5">
                    Do you need an intelligent system that not only retrieves information but also generates contextually rich and meaningful responses? I&apos;m here to create custom <span className="text-orange special-font">RAG</span> (Retrieval-Augmented Generation) solutions tailored to your business needs.
                </p>
                <p className="md:w-2/3 text-2xl md:ml-10 mb-5">Imagine a system that goes beyond simple answers—it understands context, adapts to your needs, and provides real-world solutions in an intuitive way.</p>

                <ul className="custom-list md:w-2/3 text-2xl md:ml-10 mb-5">
                    <li>Automate appointment bookings – A chatbot that helps schedule dentist appointments effortlessly.</li>
                    <li>Enhance customer support – A virtual assistant that provides instant answers to common queries.</li>
                    <li>Streamline order processing – An AI system that automates order tracking and delivery updates.</li>
                    <li>Plan perfect trips – An AI assistant that creates personalized travel itineraries based on preferences and available options.</li>
                    <li>Smart recommendations for hardware stores – A system that analyzes a photo of a broken pipe and suggests how to fix it, listing the exact tools and products you need.</li>
                    <li>Fashion & styling assistance – An AI that suggests outfit combinations based on available store inventory and personal style preferences.</li>
                </ul>

                <p className="md:w-2/3 text-2xl md:ml-10 mb-5">These are just a few examples of how AI-powered solutions can transform your business. Whether you need intelligent automation, seamless customer interactions, or smart recommendations, I’m here to build the perfect solution for you.</p>

                <p className="md:w-2/3 text-4xl text-orange md:ml-10 mb-5">Let’s bring your AI vision to life!</p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-3 lg:gap-40 lg:ml-24 mb-28">
                {services.map((service, index) => (
                    <CardServices key={index} {...service} />
                ))} 
            </div>

            <div className="w-full flex flex-col md:flex-row flex-wrap gap-12 md:gap-3 mb-20">
                
                <h4 className="mb-6 p-12 special-font text-center text-4xl">Work</h4>

                {works.map((work, index) => (
                    <CardWork key={index} {...work} />
                ))} 
            </div>        
        </section>
    )
}