import dynamic from 'next/dynamic';

const ContactSection = dynamic(() => import("../components/ContactSection"), { ssr: false })  ;
const Footer = dynamic(() => import("../components/Footer"), { ssr: false })  ;
const Hero = dynamic(() => import("../components/Hero"), { ssr: false })  ;
const ProfileSeciton = dynamic(() => import("../components/ProfileSection"), { ssr: false })  ;
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"), { ssr: false })  ;
const SkillsSection = dynamic(() => import("../components/SkillsSection"), { ssr: false })  ;

import { useState, useEffect, useRef } from "react";
import Data from "../data/projects.json";
import Mobile from "../components/Mobile";

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
      {/* <Mobile /> */}
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
