import Navbar from "./Navbar";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

export default function Hero() {
  const hero_ref = useRef(null);
  let hero_height = hero_ref.current?.getBoundingClientRect().height;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div
        ref={hero_ref}
        className="h-screen relative bg-fixed bg-center bg-cover bg-[url('/images/hero4-min.png')] md:h-screen overflow-y-hidden"
      >
        <div className="container h-full mx-auto px-20 2xl:px-0 overflow-y-hidden">
          <Navbar heroHeight={hero_height} />
          <div className="text-center pt-20">
            <motion.h1
              className="text-2xl md:text-3xl mt-20 text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 mx-auto leading-relaxed transition-all duration-300 ease-in"
              id="saya"
              style={{ transform: `translateY(${scrollY * 0.63}px)` }}
            >
              I am a{" "}
              <Typewriter
                options={{
                  strings: ["Frontend Engineer...", "Backend Engineer...", "Data Engineer..."],
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
              I'm a good boy who likes to help old people cross the street.
            </p>
          </div>
        </div>
        <Link
          style={{
            transform: `translateY(${scrollY * 0.4}px)`,
            width: "110px",
          }}
          to="profile"
          smooth={true}
          className="absolute z-10 mx-auto left-0 right-0 -mt-60 text-center transition-all py-3 font-semibold text-sm inline-block bg-green-400 cursor-pointer rounded-full hover:bg-yellow-600 text-white shadow-sm shadow-black"
        >
          Profile
        </Link>
        <motion.div
          initial={{ y: "300px" }}
          animate={{ y: 0 }}
          transition={{ duration: 2, type: "tween" }}
          className="md:block absolute w-full h-screen bg-[url('/images/hero2.png')] top-0 bg-center bg-cover z-10 hero2"
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
