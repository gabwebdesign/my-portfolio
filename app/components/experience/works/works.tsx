'use strict';
import React from 'react';
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
    AuxEvent:Function;
}

export default function Work({ id, title, industries, duration, technologies, description, thumb, large, alt, AuxEvent}: WorksProps) {
    
    const [modalOpen, setModalOpen] = React.useState(false);
    
    return (
        <div className='works p-3'>
        <div className='w-full h-auto mb-4'>
                <img
                    className="img-fluid cursor-pointer"
                    src={thumb}
                    alt={alt}
                    onClick={() => { AuxEvent( setModalOpen(!modalOpen) )}}
                ></img>
            </div>
            <p className='font-bold text-center text-background'>{title}</p>
        </div>
    );
}