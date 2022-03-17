import Navbar from "./Navbar";
import Button from "./Button";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  const hero_ref = useRef(null);
  let hero_height = hero_ref.current?.getBoundingClientRect().height;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);
  return (
    <>
      {/* https://media.giphy.com/media/4H5jdBI1AEvS2xlra6/giphy-downsized.gif */}
      <div
        ref={hero_ref}
        className="relative bg-fixed bg-center bg-cover bg-[url('/images/hero4.png')] md:h-screen overflow-y-hidden"
      >
        <div className="container h-full mx-auto px-20 2xl:px-0 overflow-y-hidden">
          <Navbar heroHeight={hero_height}/>
          <div className="text-center pt-20">
            <motion.h1
              className="text-2xl md:text-3xl mt-20 text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed transition-all duration-300 ease-in"
              id="saya"
              style={{ transform: `translateY(${scrollY * 0.65}px)` }}
            >
              Saya Seorang{" "}
              <Typewriter
                options={{
                  strings: [
                    "Frontend Engineer...",
                    "Backend Engineer...",
                    "Data Engineer...",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 85,
                  deleteSpeed: 50,
                  pauseFor: 1700,
                  wrapperClassName: "text-[#11ff11]",
                }}
              />
            </motion.h1>
            <p
              className=" hidden md:block text-white text-opacity-60 text-lg 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 transition-all duration-500"
              style={{ transform: `translateY(${scrollY * 0.6}px)` }}
            >
              Aku anak baik yang suka menolong orang tua menyebrangi jalanan.
            </p>
            <div
              className="mb-5 -mt-5 sm:-mt-0 transition-all duration-300 ease-in"
              style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
              <Button href="#profile" pill variant="yellow" className="mt-14">
                Pelajari
              </Button>
            </div>
          </div>
        </div>
        {/* <image src="/images/hero1.png" className="absolute w-full"/> */}
        <motion.div
          initial={{ y: "300px" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "tween", stiffness: 100 }}
          className="md:block absolute w-full h-screen bg-[url('/images/hero2.png')] top-0 bg-center bg-cover"
          style={{ transform: `translateY(-${scrollY * 0.06}px)` }}
        ></motion.div>
        <div
          className="hidden lg:block absolute w-full h-20 bg-[#2d253a]"
          style={{ transform: `translateY(-${scrollY * 0.06}px)` }}
        ></div>
      </div>
    </>
  );
}
