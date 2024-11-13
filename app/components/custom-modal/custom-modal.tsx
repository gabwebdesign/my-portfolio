import { useEffect } from 'react';
import './custom-modal.css';
import Link from 'next/link';

export type CustomModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    duration: string;
    industries: string;
    technologies: string;
    description: string;
    alt:string;
    large:string;
    url?:string;
}

export default function CustomModal({isOpen, onClose,title,industries,technologies,description,alt,large,duration,url}: CustomModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);
    
    if (!isOpen) return null;
    
    return (
        <div className="modal p-4 md:p-10 flex justify-center mb-5">
            <div className="modal-content bg-background p-4 md:p-10 rounded-lg">
                <div className='flex justify-end mb-6' onClick={onClose}><span className="close text-3xl cursor-pointer">&times;</span></div>
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
                    { url && 
                        <p className='btn primary mb-6 w-64 text-center'>
                            <Link href={url} target='_blank'>Please check out!</Link>
                        </p>
                    }

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