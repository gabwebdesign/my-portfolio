import './custom-modal.css';

export type CustomModalProps = {
    title: string;
    duration: string;
    industries: string;
    technologies: string;
    description: string;
    alt:string;
    large:string;
}

export default function CustomModal({title,industries,technologies,description,alt,large,duration}: CustomModalProps) {
    return (
        <div className="modal p-4 md:p-10 flex justify-center mb-5">
            <div className="modal-content bg-background p-4 md:p-10 rounded-lg">
                <div className='flex justify-end mb-6'><span className="close text-3xl cursor-pointer">&times;</span></div>
                <div className='content p-6'>
                    <p className='text-3xl mb-5'>{title}</p>
                    <p className='mb-8'>{description}</p>
                    <div className='mb-5'>
                        <ul className='flex gap-5'>
                            <li>
                                <span className='font-bold'>Industry:</span> {industries}
                            </li>
                            <li>
                                <span className='font-bold'>Duration:</span> {duration}
                            </li>
                        </ul>
                    </div>
                    <p className='mb-6'>
                        <span className='font-bold'>Technologies:</span> {technologies}
                    </p>
                    <div className='w-full h-auto mb-4'>
                        <img
                            className="img-fluid"
                            src={large}
                            alt={alt}
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    );
}