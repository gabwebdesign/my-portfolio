import CardServices, { ServicesProps } from "../card-services/card-services"
import CardWork, { WorkProps } from "../card-work/card-work"

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

    const works:WorkProps[] = [
        {
            icon: '/images/icons/meal.png',
            title: 'Whatsapp Chatbot Restaurant',
            className: 'bg-orange'
        },
        {
            icon: '/images/icons/robot.png',
            title: 'IA Agent',
            className: 'bg-orange'
        }
    ]

    return (
        <section className="mt-5">
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