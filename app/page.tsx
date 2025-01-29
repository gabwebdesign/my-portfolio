//import Image from "next/image";

import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Introducing from "./components/introducing/introducing";
import Main from "./components/main/main";
import Services from "./components/services/services";
import Develop from "./components/develop-section/develop";
import ContactSection from "./components/contact-section/contact-section";

export default function Home() {
  return (
    <div className="grid wrapper overflow-hidden" id="container">
      <Main />
      <Services />
      <Develop />
      <ContactSection />
      <Introducing />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

//TODO: Add the following components
// 1. Brand
// 2. Contact
// 3. Improve the design

