"use client";
import Image from "next/image";

export type ServicesProps = {
    icon: string;
    title: string;
    description: string;
    className?: string;
}

export default function CardServices({ icon, title, description, className }: ServicesProps) {
    return (
        <div className={className}>
            <div className={`card-services p-6 bg-white lg:w-72 lg:min-h-[430px]`}>
            <div className="card-services__icon pt-5">
                <Image src={icon} 
                    alt={title}
                    width={35}
                    height={35}
                    className="mb-5"
                />
            </div>
            <div className="card-services__content mb-5">
                <h4 className="mb-5 text-3xl">{title}</h4>
                <p className="text-2xl">{description}</p>
            </div>
            
            </div>
            <div className="btn primary" onClick={()=>{
                window.open('#contact', '_self')
            }}>More Info</div>
        </div>
        
    )
}  