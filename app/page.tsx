//import Image from "next/image";

import Skills from "./components/skills/skills";
import Experience from "./components/experience/experience";
import Contact from "./components/contact/contact";
import Introducing from "./components/introducing/introducing";
import Main from "./components/main/main";
import Services from "./components/services/services";
import Develop from "./components/develop-section/develop";

export default function Home() {
  return (
    <div className="grid wrapper overflow-hidden" id="container">
      <Main />
      <Services />
      <Develop />
      <Introducing />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}
