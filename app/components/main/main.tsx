import './main.css';
import Image from "next/image";

export default function Main() {
    return (
        <div className="main bg-gray-100 w-full">
            <div className="w-full item row-span-4 bg-blue from-bottom">
                <div className='flex flex-col items-center justify-center w-full h-full p-5'>
                    <Image 
                        src={'/images/isotipo.svg'}
                        alt='logo'
                        width={36}
                        height={46}
                        className='mb-3'
                    ></Image>
                    <p className='special-font text-4xl text-white'>gab</p>
                </div>
            </div>
            <div className="w-full item row-span-7 bg-orange from-left">
                <div className='flex flex-col justify-end items-end w-full h-full p-7'>
                    <div className='w-full'>
                        <Image 
                            src={'/images/brand.svg'}
                            alt='brand design'
                            width={80}
                            height={143}
                        ></Image>
                    </div>
                    <h3 className='w-full text-white mb-3'>branding</h3>
                    <p className='text-white'>
                        Great web design isn’t just about creating something beautiful; it’s about crafting experiences that inspire, engage, and leave a lasting impact on the world.
                    </p>
                </div>
            </div>
            <div className="w-full justify-between hidden md:flex">
                <div className='brand-colors flex h-full rounded-md overflow-hidden'>
                    <div className='w-12 h-full bg-blue'></div>
                    <div className='w-12 h-full bg-orange'></div>
                    <div className='w-12 h-full bg-background'></div>
                </div>
                <p className='text-5xl text-blue special-font'>gab</p>
            </div>
            <div className="w-full item row-span-6 bg-blue hidden md:flex"></div>
            <div className="w-full item row-span-3 bg-blue hidden md:flex">
                <nav className='flex flex-col'>
                    <ul className='pl-7 pt-6 text-white'>
                        <li>work</li>
                        <li>contact</li>
                        <li>blog</li>
                    </ul>
                </nav>
            </div>
            <div className="w-full item col-span-2 row-span-6 bg-orange from-bottom">
                <div className='flex flex-col items-end justify-end h-full p-7'>
                    <p className='text-white w-full text-3xl'>&lt; open source of success &gt;</p>
                    <h3 className='w-full text-white'>website development</h3>
                    <p className='text-white w-full'>
                        Great web design isn’t just about creating something beautiful; <br className='hidden md:block'/> it’s about crafting experiences that inspire, engage, and leave a lasting impact on the world.
                    </p>
                </div>
            </div>
            <div className="w-full item row-span-4 bg-blue from-left"></div>
            <div className="w-full item row-span-4 bg-orange">
                <div className='flex flex-col items-end justify-end w-full h-full p-7'>
                    <h3 className='w-full text-white mb-3'>rag</h3>
                    <p className='text-white'>
                        I create beautiful, functional websites that are designed to help you achieve your business goals.
                    </p>
                </div>
            </div>
            <div className="w-full item row-span-2 bg-blue flex justify-center items-center">
                <p className='text-white font-bold'>&lt; skilled developer &gt;</p>
            </div>
            <div className="w-full item row-span-2 bg-blue"></div>
        </div>
    );
}