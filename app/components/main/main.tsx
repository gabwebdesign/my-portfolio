'use client';
import { useEffect, useState } from 'react';
import PieChart from '../chart-skill/pie-chart';
import './main.css';
import Image from "next/image";
import Link from 'next/link';
import gsap from 'gsap';

export default function Main() {

    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(        
        () => {


            const tl = gsap.timeline({
                defaults: {
                    delay:2,
                    ease: "power4.out"
                },
                
            });
            tl
            .from('.piechart',{x:-(window.innerWidth),opacity:0},.1)
            .from('.message',{x:(window.innerWidth),opacity:0},.1)
            .from('.profile',{x:-(window.innerWidth)},.1)
            .from('.lets-talk',{y:-800},.2)
            .from('.second-piechart',{y:-800},.3)

        },[]
    ); 

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('no-scroll');
            gsap.to('.bread', {transformOrigin:'center center',rotation:405,ease:'bounce.out',duration: .2});
            gsap.to('.bread-2', {transformOrigin:'center center',rotation:-405,y:-15,ease:'bounce.out',duration: .2});
        } else {
            document.body.classList.remove('no-scroll');
            gsap.to('.bread', {rotation:0,duration: .2});
            gsap.to('.bread-2', {rotation:0,y:0,duration: .2});
        }
    }, [menuOpen]);

    return (
        <div id='main'>
            <div className='navigation w-full p-6 fixed bg-gray z-1 index'>
                <div className='flex justify-between items-center cursor-pointer'>
                    <nav className='hidden md:flex'>
                        <ul className='flex gap-5'>
                            <li><Link href='#development'>web development</Link></li>
                            <li><Link href='#ia'>AI software</Link></li>
                            <li><Link href='#contact'>contact</Link></li>
                        </ul>
                    </nav>
                    <div className='hamburguer block md:hidden w-8 h-full' onClick={()=>setMenuOpen(!menuOpen)}>
                        <ul className='flex flex-col gap-3 justify-center h-full'>
                            <li className='bread w-full h-1 bg-blue'></li>
                            <li className='bread-2 w-full h-1 bg-blue'></li>
                        </ul>
                    </div>
                    <Link href='#main' className='special-font text-4xl'>gab</Link>
                </div>
                {
                   menuOpen && 
                   <div className='nav-mobile w-full md:hidden h-full bg-gray p-6 z-1'>
                        <ul className='flex flex-col gap-10 mt-20'>
                            <li className='text-center'><Link href='#development' onClick={()=>{setMenuOpen(false)}}>web development</Link></li>
                            <li className='text-center'><Link href='#ia' onClick={()=>{setMenuOpen(false)}}>AI software</Link></li>
                            <li className='text-center'><Link href='#contact' onClick={()=>{setMenuOpen(false)}}>contact</Link></li>
                        </ul>
                    </div>
                }
                
            </div>
            <div className="main bg-gray-100 w-full">
            <div className="w-full flex justify-center row-span-2">
                <div className='flex flex-col items-center justify-center w-full p-5'>
                    <Image 
                        src={'/images/isotipo_black.svg'}
                        alt='logo'
                        width={46}
                        height={56}
                        className='mb-3'
                    ></Image>
                </div>
            </div>
            <div className="flex justify-center items-center w-full bg-orange row-span-2">
                    <Image 
                        src={'/images/icons/monitor.png'}
                        alt='icono monitor'
                        width={62}
                        height={62}
                    ></Image>
            </div>
            <div className="piechart w-full flex justify-center items-center bg-light row-span-2 col-span-2 p-6 h-[11rem] md:h-auto gap-6">
                    <Image 
                        src={'/images/graph-skills.png'}
                        alt='skills chart'
                        width={228}
                        height={144}
                    ></Image>           
            </div>
            <div className="profile w-full flex flex-col justify-between bg-orange col-span-2 row-span-3">
                <div className='flex flex-col items-end justify-between'>
                    <ul className='grid grid-cols-3 h-4 w-full '>
                        <li className='w-full h-full bg-blue'></li>
                        <li className='w-full h-full'></li>
                        <li className='w-full h-full bg-white'></li>
                    </ul>
                </div>
                <div className='flex justify-center w-full'>
                    <Image 
                        src={'/images/draw.svg'}
                        alt='just me in draw'
                        width={250}
                        height={297}
                    ></Image>
                </div>
            </div>
            <div className="w-full flex-col pt-10 items-center hidden lg:flex row-span-4">
                <p className='text-3xl text-orange'>AaBbCc</p>
                <p className='text-3xl text-blue'>AaBbCc</p>
                <p className='text-3xl text-purple'>AaBbCc</p>
            </div>
            <div className="message w-full row-span-3 col-span-3  bg-blue">
                <div className='flex flex-col items-end justify-between w-full h-full p-7'>
                    <Image 
                        src={'/images/icons/asterisk.svg'}
                        alt='just asterisk'
                        width={62}
                        height={62}
                    ></Image>
                    <h2 className='w-full text-white mb-3'>Hi, 👋 Gab, your software developer, open your<br  className='hidden lg:flex 2xl:hidden'/>source of success!</h2>
                </div>
            </div>
            <div className='second-piechart col-span-2 row-span-3 flex flex-col justify-between bg-light h-full'>
                    <div className='w-full flex justify-start'>
                        <Image 
                            src={'/images/boxes2.svg'}
                            alt='boxes'
                            width={48}
                            height={48}
                        ></Image>
                    </div>
                    <div className='w-full flex justify-center'>
                        <Image 
                            src={'/images/graph-soft-skills.png'}
                            alt='soft skills chart'
                            width={320}
                            height={155}
                            className='ml-10 p-6'
                        ></Image>
                    </div>
                    

                    <div className='w-full flex justify-end'>
                        <Image 
                            src={'/images/boxes2.svg'}
                            alt='boxes'
                            width={48}
                            height={48}
                        ></Image>
                    </div>
            </div>
            
            <div className='col-span-2'>
                <Image 
                        src={'/images/boxes.svg'}
                        alt='boxes'
                        width={48}
                        height={48}
                    ></Image>
            </div>
            <div className='lets-talk bg-blue text-white flex justify-between items-center p-7 cursor-pointer' 
                onClick={() => {
                    const contactSection = document.getElementById('contact');
                    contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}>
                <p className='text-3xl'>Let's Talk</p>
                <Image 
                    src={'/images/icons/arrow.svg'}
                    alt='arrow button to contact section'
                    width={22}
                    height={2}
                ></Image>
            </div>
        </div>
        </div>

    );
}