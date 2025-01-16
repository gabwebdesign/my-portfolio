import Image from "next/image";

export type ServicesProps = {
    icon: string;
    title: string;
    description: string;
    className?: string;
}

export default function CardServices({ icon, title, description, className }: ServicesProps) {
    return (
        <div className={`card-services p-6 bg-white rounded-md lg:w-72 ${className}`}>
            <div className="card-services__icon pt-5">
                <Image src={icon} 
                    alt={title}
                    width={60}
                    height={60}
                    className="mb-3"
                />
            </div>
            <div className="card-services__content">
                <h3 className="mb-5">{title}</h3>
                <p className="text-2xl">{description}</p>
            </div>
        </div>
    )
}  