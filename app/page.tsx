//import Image from "next/image";

import Link from "next/link";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";

export default function Home() {
  return (
    <div className="grid wrapper">
      <section>
        <div className="flex flex-col justify-between h-full">
          <nav>
            <ul className="flex justify-between">
              <li className="navbrand">
                GAB
              </li>
              <li>
                <Link href="/" className="btn primary">CONTACT</Link>
              </li>
            </ul>
          </nav>
          <div>
            <h1>A developer building<br /> interactive experiences</h1>
          </div>
        </div>
      </section>
      <Skills />
      <Experience />
    </div>
  );
}
