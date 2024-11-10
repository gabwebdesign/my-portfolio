import './works.css';

export type WorksProps = {
    id: string;
    title: string;
    duration: string;
    industries: string;
    technologies: string;
    description: string;
    alt:string;
    thumb:string;
    large:string;
}

export default function Work({ id, title, industries, duration, technologies, description, thumb, large, alt }: WorksProps) {
    return (
        <div className='works p-3'>
        <div className='w-full h-auto mb-4'>
                <img
                    className="img-fluid"
                    src={thumb}
                    alt={alt}
                ></img>
            </div>
            <p className='font-bold text-center text-background'>{title}</p>
        </div>
    );
}