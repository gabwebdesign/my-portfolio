import './jobs.css';

export type JobsProps = {
    company: string;
    role: string;
    dateStart: string;
    dateEnd: string;
    location: string;
    description: string;
}

export default function Job({ company, role, dateStart, dateEnd, location, description }: JobsProps) {
    return (
            <div className="jobs mb-10">
                <div className='date mb-2'>
                    {dateStart} - {dateEnd}
                </div>
                <div className='company'>
                    {company}
                </div>
                <div className='role'>
                    {role}
                </div>
                <div>
                    {location}
                </div>
                <div>
                    {description}
                </div>
            </div>
    );
}