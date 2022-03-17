import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProfileSeciton from "../components/ProfileSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

import { useState, useEffect, useRef } from "react";
import Data from "../data/projects.json";

export default function Home({props}) {
  const [scrollY, setScrollY] = useState(0);
  const data = props

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log('ini data home ', props.data)
  return (
    <>
      <Hero />
      <ProfileSeciton />
      <SkillsSection />
      <ProjectsSection projectsData={data.data} />
      <ContactSection />
      <Footer />
    </>
  );
}

 Home.getInitialProps = () => {
   return {
     props: {
       data: Data,
     },
   };
 };
