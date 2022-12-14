import dynamic from 'next/dynamic';

const Hero = dynamic(() => import("../components/Hero"), { ssr: false })  ;

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
      {/* <ContactSection />
      <Footer /> */}
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
