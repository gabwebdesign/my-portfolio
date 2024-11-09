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
            <div className="jobs">
                <div>
                    {company}
                </div>
                <div>
                    {role}
                </div>
                <div>
                    {dateStart} - {dateEnd}
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