'use client';
import Image from "next/image";
import CustomModal from "../custom-modal/custom-modal";
import { useState } from "react";

export type ThumbWorkProps = {
    icon: string;
    title: string;
    className: string;
    duration?: string;
    industries?: string;
    technologies?: string;
    description?: string;
    alt?:string;
    thumb?:string;
    large?:string;
    url?:string;
    video?:boolean;

}

export default function CardWork({ 
    icon,
    title, 
    className,
    duration,
    industries,
    technologies,
    description,
    alt,
    large,
    url,
    video }: ThumbWorkProps) {

    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className={`card-services w-full flex justify-center rounded-md ${className} cursor-pointer md:w-64`}>
            <div 
                className="card-services__content w-full h-full flex flex-col justify-center p-10"
                onClick={() => setModalOpen(true)}
                >
                <div className="card-services__icon mb-6 w-full flex justify-center">
                    <Image src={icon} 
                        alt={title}
                        width={100}
                        height={100}
                        className="mb-3"
                    />
                </div>
                <h3 className="mb-5 text-white text-3xl text-center w-full">{title}</h3>
            </div>

            <CustomModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                title={title}
                description={description ?? ''}
                large={large ?? ''}
                alt={alt ?? ''}
                industries={industries ?? ''}
                technologies={technologies ?? ''}
                duration={duration ?? ''}
                url={url}
                video={video}
            />

        </div>
    )
}  