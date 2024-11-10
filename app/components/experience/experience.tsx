/* eslint-disable @next/next/no-img-element */
import CustomModal from '../custom-modal/custom-modal';
import './experience.css';
import Job, { JobsProps } from './jobs/Jobs';
import Work, { WorksProps } from './works/works';


export default function Experience() {

    const jobs: JobsProps[] = [
        {
            company: 'BeyondSoft',
            role: 'Frontend Developer',
            dateStart: '2020',
            dateEnd: 'Present',
            location: 'Bellevue, WA',
            description: 'Developed and maintained web applications for clients in the automotive industry. Worked with a team of developers to deliver high-quality, user-friendly solutions.'
        },
        {
            company: 'Microsoft',
            role: 'Frontend Developer',
            dateStart: '2018',
            dateEnd: '2020',
            location: 'Redmond, WA',
            description: 'Developed and maintained web applications for clients in the automotive industry. Worked with a team of developers to deliver high-quality, user-friendly solutions.'
        },
        {
            company: 'Amazon',
            role: 'Frontend Developer',
            dateStart: '2016',
            dateEnd: '2018',
            location: 'Seattle, WA',
            description: 'Developed and maintained web applications for clients in the automotive industry. Worked with a team of developers to deliver high-quality, user-friendly solutions.'
        }
    ];

    const works: WorksProps[] = [        
        {
            id: '1',
            title: 'Quierolote Platform',
            industries: 'E-commerce',
            duration: '2020 - Present',
            technologies: 'React, TypeScript, Next.js, Tailwind CSS',
            description: 'Developed and maintained web applications for clients in the automotive industry. Worked with a team of developers to deliver high-quality, user-friendly solutions.',
            alt: 'quierolote development image',
            thumb: '/works/work1_thumb.png',
            large: '/works/work1_large.png'
        },
        {
            id: '2',
            title: 'Cafe Angelina',
            industries: 'Landing Page and E-commerce',
            duration: '2020 - Present',
            technologies: 'React, TypeScript, Next.js, Tailwind CSS',
            description: 'Developed and maintained web applications for clients in the automotive industry. Worked with a team of developers to deliver high-quality, user-friendly solutions.',
            alt: 'quierolote development image',
            thumb: '/works/work2_thumb.png',
            large: '/works/work2_large.png'
        }
    ]

    return(
        <section className="bg-orange">
            <div className="experience-content">
                <div>
                    {jobs.map((job, index) => (
                        <Job
                            key={index}
                            company={job.company}
                            role={job.role}
                            dateStart={job.dateStart}
                            dateEnd={job.dateEnd}
                            location={job.location}
                            description={job.description}
                        />
                    ))}
                </div>
                <div className='work'>
                    <h3 className='mb-3 text-background'>Works</h3>
                    <div className='boxes flex gap-2'>
                        { works.map((work, index) => (
                            <Work
                                key={index}
                                id={work.id}
                                title={work.title}
                                industries={work.industries}
                                duration={work.duration}
                                technologies={work.technologies}
                                description={work.description}
                                alt={work.alt}
                                thumb={work.thumb}
                                large={work.large}
                            />                       
                        ))}
                    </div>
                </div>
            </div>
            
        </section>
    );
}