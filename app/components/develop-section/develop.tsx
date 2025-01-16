import CardServices, { ServicesProps } from "../card-services/card-services"
import CardWork, { WorkProps } from "../card-work/card-work"
import './develop.css';
export default function Develop() {

    const services:ServicesProps[] = [
        {
            icon: '/images/icons/layout.png',
            title: 'Frontend',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'conexion-left row-start-1 row-end-6'
        },
        {
            icon: '/images/icons/waiter.png',
            title: 'Backend',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'conexion-left row-start-3 row-end-11'
        },
        {
            icon: '/images/icons/database.png',
            title: 'Database',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'row-start-1 row-end-6'
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
            <div className="mb-28 flex flex-col lg:flex-row gap-6">
                <div className="lg:w-96">
                    <h1 className="mb-12">Are you ready to < br className="hidden md:block"/> <span className="text-orange">&lt;open source of success&gt;</span></h1>
                </div>
                <div>
                    <div className="phases w-full gap-3 mb-28">
                        {services.map((service, index) => (
                            <CardServices key={index} {...service} />
                        ))} 
                    </div>

                </div>
            </div>

            <div>
                <p className="w-2/3 text-xl lg:ml-14 mb-16">
                    Great web design isn’t just about creating something beautiful; it’s about crafting experiences that inspire, engage, and leave a lasting impact on the world.
                </p>
            </div>

            <div className="w-full flex flex-col md:flex-row gap-12 md:gap-3 mb-20">
                
                <h4 className="mb-6 p-12 text-center">Work</h4>

                {works.map((work, index) => (
                    <CardWork key={index} {...work} />
                ))} 
            </div>
        
        </section>
    )
}