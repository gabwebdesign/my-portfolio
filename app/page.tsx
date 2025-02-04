//import Image from "next/image";


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
    </div>
  );
}

//TODO: Do the following:
// 1. Mejorar la linea en los icons
// 2. animacion intro

