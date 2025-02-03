import CardServices, { ServicesProps } from "../card-services/card-services"
import CardWork, { ThumbWorkProps } from "../card-work/card-work"
import './develop.css';
export default function Develop() {

    const services:ServicesProps[] = [
        {
            icon: '/images/icons/layout.png',
            title: 'Frontend',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'conexion-1 row-start-1 row-end-6'
        },
        {
            icon: '/images/icons/waiter.png',
            title: 'Backend',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'conexion-2 row-start-3 row-end-11'
        },
        {
            icon: '/images/icons/database.png',
            title: 'Database',
            description: 'I will develop a flow to guide the user to driven the info desired by the company',
            className: 'row-start-1 row-end-6'
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
            icon: '/images/icons/havas.png',
            title: 'Havas Life Chicago',
            className: 'bg-orange',
            industries: 'Pharmaceutical',
            duration: '3 month',
            technologies: 'Angular, TypeScript, Bootstrap, Java, Jenkins, Git, Adobe Creative Suite',
            description: 'Led the development of this landing page, adhering strictly to brand guidelines and storyboards. Implemented responsive designs for mobile, desktop, iOS, and Android devices using Angular 10, Sass, and Greensock. Developed custom components, directives, and services to ensure seamless functionality. The result was a dynamic and interactive website with a seamless user experience.',
            alt: 'Life Chicago development image',
            thumb: '/works/work3_thumb.png',
            large: '/works/work3_large.jpg',
            url: 'https://havaslifechicago.com/',
            video:false
        },
        {
            icon: '/images/icons/havas.png',
            title: 'Karyforward Website',
            className: 'bg-orange',
            industries: 'Pharmaceutical',
            duration: '3 month',
            technologies: 'Angular, TypeScript, Bootstrap, Java, Jenkins, Git, Adobe Creative Suite, Sass, Voice Over, NVDA, WCAG',
            description: 'Karyforward website is page support patients with program by Karyopharm Therapeutics® Inc. I have built the Patient page on this page, also all functionally in the website, including the WCAG content accecibility to the entire site, mobile and desktop versions. Again this project was succefull, the page has excellent performance and user experience and it is accesible differents physical disabilities as client required.',
            alt: 'karyforward development image',
            thumb: '/works/work4_thumb.png',
            large: '/works/work4_large.webp',
            url: 'https://karyforward.com/',
            video:false
        },
        {
            icon: '/images/icons/havas.png',
            title: 'Havas Life New York',
            className: 'bg-orange',
            industries: 'Pharmaceutical',
            duration: '3 month',
            technologies: 'Angular, TypeScript, Bootstrap, Java, Jenkins, Git, Adobe Creative Suite',
            description: 'Led the development of this landing page, adhering strictly to brand guidelines and storyboards. Implemented responsive designs for mobile, desktop, iOS, and Android devices using Angular 10, Sass, and Greensock. Developed custom components, directives, and services to ensure seamless functionality. The result was a dynamic and interactive website with a seamless user experience.',
            alt: 'Life New York development image',
            thumb: '/works/work3_thumb.png',
            large: '/works/work3_large.jpg',
            url: 'https://havaslifenewyork.com/',
            video:false
        },
        {
            icon: '/images/icons/havas.png',
            title: 'Xpovio',
            className: 'bg-orange',
            industries: 'Pharmaceutical',
            duration: '2 month',
            technologies: 'This projects have been created to announce the Xpovio inhibitor by Karyopharm Therapeutics. This project was a challenge to achieve performance due to the amount of pages to build with many resource images, graph, videos. The best approach here was use the best practice and standards in Angular like directive, services, resolves, subcribes, load estategies and so on to reach that everything works correctly. This project include the "dlbcl" version to healthcare professionals, both version Patient and HCP in desktop and mobile each one.',
            description: 'I have designed and developed this website from scratch in React JavasCript Framework. Also I have designed the package design and the logotype and store page.',
            alt: 'Xpovio development image',
            thumb: '/works/work5_thumb.png',
            large: '/works/work5_large.webp',
            url: 'https://xpovio.com/',
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
                    <h1 className="mb-12">Are you ready to < br className="hidden md:block"/> <span className="text-orange">&lt;open source of success&gt;</span></h1>
                </div>
                <div>
                    <div className="phases w-full mb-28">
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

            <div className="w-full flex flex-col md:flex-row gap-12 md:gap-3 mb-20 flex-wrap">
                
                <h4 className="mb-6 p-12 text-center">Work</h4>

                {works.map((work, index) => (
                    <CardWork key={index} {...work} />
                ))} 
            </div>
        
        </section>
    )
}