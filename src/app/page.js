
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import Work from "./components/Work/Work.jsx";
import Certifications from "./components/Certifications/Certifications.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Achievements from "./components/Achievements/Achievements.jsx";


export default function Home() {
  return (
    <>
     <Hero/> 
     <About />  
     <TechStack/> 
     <Work />
     <Experience />
     <Achievements />
     {/* <Certifications /> */}
     <Contact/>
    </>
  );
}