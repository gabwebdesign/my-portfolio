import Image from "next/image";
import './skills.css';

export default function Skills() {
  return (
      <section className="bg-blue bg-effect">
        <div className="flex flex-col justify-between h-full">
            <div>
                <blockquote>A person who never made a<br className="hidden lg:block" /> mistake, has never tried<br className="hidden lg:block" /> something new. 
                    <cite className="author"> ALBERT EINSTEN</cite>
                </blockquote>
            </div>
            <div className='content-text flex flex-col-reverse md:flex-row justify-between'>
                <div className='skills-and-description flex justify-between flex-col'>
                    <p className='description'>Highly skilled Front-End Developer with over 10 years of experience building web applications and interactive experiences. Proven ability to collaborate effectively with designers and back-end developers to deliver high-quality, user-friendly solutions. Adept in modern front-end technologies.</p>
                    <div className='skills'>
                        <p>JavaScript, TypeScript, Apex, Python, C#, SOQL, React, Angular, Next.js, SPA, Bootstrap, Tailwind CSS, GSAP Animation, LLM, Langchain.</p>
                    </div>
                </div>
                <div className='profile-img'>
                    <Image
                        className="rounded-md img-fluid"
                        src="/profile.png"
                        alt="profile image"
                        width={208}
                        height={236}
                        priority
                        />
                </div>

            </div>
        </div>

      </section>
  );
}
