import './experience.css';
import Job, { JobsProps } from './jobs/jobs';

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
                <div className="bg-blue">
                    BeyondSoft
                </div>
            </div>
            
        </section>
    );
}