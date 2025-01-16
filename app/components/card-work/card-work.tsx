import Image from "next/image";

export type WorkProps = {
    icon: string;
    title: string;
    className: string;
}

export default function CardWork({ icon, title, className }: WorkProps) {
    return (
        <div className={`card-services w-full md:w-1/3 flex justify-center rounded-md ${className} cursor-pointer md:w-72`}>
            <div className="card-services__content w-full h-full flex flex-col justify-center p-10">
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
        </div>
    )
}  