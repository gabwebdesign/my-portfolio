//import Image from "next/image";

import Link from "next/link";
import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Introducing from "./components/introducing/introducing";

export default function Home() {
  return (
    <div className="grid wrapper overflow-hidden" id="container">
      <Introducing />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
