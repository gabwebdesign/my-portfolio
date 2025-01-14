import CardServices, { ServicesProps } from "../card-services/card-services"

export default function Services() {

    const services:ServicesProps[] = [
        {
            icon: '/images/icons/chat.png',
            title: 'Chatbot',
            description: 'I will develop a flow to guide the user to driven the info desired by the company'
        },
        {
            icon: '/images/icons/brain.png',
            title: 'RAG Solutions',
            description: 'I will develop a flow to guide the user to driven the info desired by the company'
        },
        {
            icon: '/images/icons/flash.png',
            title: 'IA Agent',
            description: 'I will develop a flow to guide the user to driven the info desired by the company'
        }
    ]

    return (
        <section className="mt-5">
            <div className="flex flex-col md:flex-row gap-6 mb-28">
                <h2 className="md:w-2/3">Bring the Power of AI to 
                    Your Business! <span className="text-orange">RAG</span> as service</h2>
                <p className="md:w-1/3 text-xl">
                    Do you need an intelligent system that not only retrieves information but also generates contextually rich and meaningful responses? I&apos;m here to create custom RAG (Retrieval-Augmented Generation) solutions tailored to your business needs.
                </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-12 md:gap-3">
                {services.map((service, index) => (
                    <CardServices key={index} {...service} />
                ))} 
            </div>
              
        </section>
    )
}