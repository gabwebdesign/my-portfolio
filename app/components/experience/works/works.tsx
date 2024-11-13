'use strict';
import React from 'react';
import './works.css';
import CustomModal from '../../custom-modal/custom-modal';

export type WorksProps = {
    title: string;
    duration: string;
    industries: string;
    technologies: string;
    description: string;
    alt:string;
    thumb:string;
    large:string;
    url?:string;
}

export default function Work({ title, industries, duration, technologies, description, thumb, large, alt,url}: WorksProps) {
    
    const [modalOpen, setModalOpen] = React.useState(false);
    
    return (
        <div className='works p-3'>
        <div className='w-full h-auto mb-4'>
                <img
                    className="img-fluid cursor-pointer"
                    src={thumb}
                    alt={alt}
                    onClick={() => setModalOpen(true)}
                ></img>
            </div>
            <p className='font-bold text-center text-background'>{title}</p>

            <CustomModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={title}
                description={description}
                large={large}
                alt={alt}
                industries={industries}
                technologies={technologies}
                duration={duration}
                url={url}
            />

        </div>
    );
}