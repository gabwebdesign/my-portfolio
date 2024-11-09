import Link from "next/link";
import './contact.css';

export default function Contact() {
    return (
        <section className="bg-gray flex flex-col justify-between">
            <nav className="">
                <ul className="flex justify-between">
                <li className="navbrand">
                    GAB
                </li>
                <li>
                    <Link href="/fullstack_gabriel_aguilar.pdf" className="btn primary">RESUME</Link>
                </li>
                </ul>
          </nav>
          <div className="contact_content">
            <div> 
            </div>
            <div>
                <p className="mb-4">If you would like to learn more about my qualifications and <br className="hidden lg:block" /> discuss potential projects, please do not hesitate to reach out.</p>
                <ul>
                    <li className="mb-3">
                       <p className="font-bold">Address</p> 
                       <p>Condominio Rosedal 1, San Francisco, Heredia, Costa Rica.</p>
                    </li>
                    <li className="mb-3">
                        <p className="font-bold">Phone</p>
                        <Link href="tel:+50662000055">
                            +506 6200055
                        </Link>
                    </li>
                    <li className="mb-3">
                        <p className="font-bold">E-mail</p>
                        <Link href="mailto:gab.webdesign@gmail.com">
                            gab.webdesign@gmail.com
                        </Link>
                    </li>
                </ul>
            </div>
          </div>
          <div>
            <h2>Let’s work...</h2>
          </div>
        </section>
    )
}