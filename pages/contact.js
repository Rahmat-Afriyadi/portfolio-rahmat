import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import classnames from "classnames";
import Image from "next/dist/client/image";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const ContactSection = dynamic(() => import("../components/ContactSection"), { ssr: false });
const Nav = dynamic(() => import("../components/Nav"), { ssr: false });
const Logo = dynamic(() => import("../components/Logo"), { ssr: false });
const Button = dynamic(() => import("../components/Button"), { ssr: false });

export default function Contact() {
  const [offcanvas, setOffcanvas] = useState(false);

  return (
    <>
      <div className="h-screen overflow-y-hidden bg-[#2d253a]">
        <div
          id="navbar"
          className="transition-all duration-500 ease-in-out fixed top-0 left-0 right-0 h-7 w-screen pl-7 sm:px-10 py-8 flex items-center z-10 bg-[#2d253a]"
        >
          <div className="w-10/12 md:w-5/12 lg:w-3/12">
            <Logo />
          </div>
          <motion.div
            initial={{ y: 470 }}
            animate={{ y: 0 }}
            transition={{
              delay: 1,
              duration: 2,
              type: "tween",
              ease: "anticipate",
            }}
            className="w-6/12 hidden md:block"
          >
            <Nav dir="horizontal" scheme="light" />
          </motion.div>
          <div className="w-3/12 text-right hidden lg:block">
            <Button href="contact" pill variant="outline-yellow">
              contact
            </Button>
          </div>
          {/* <div className="w-9/12 md:hidden text-right"> */}
          <motion.img
            // alt="menu button"
            src="/images/stack/menu.svg"
            // layout="fill"
            className="w-1/12 md:hidden text-right"
            onClick={() => setOffcanvas(true)}
          />
          {/* </div> */}
        </div>

        <div
          className={classnames(
            "fixed bg-white bg-opacity-75 z-10 top-0 h-full w-full p-10 md:hidden transition-all",
            offcanvas ? "right-0" : "-right-full"
          )}
        >
          <Image
            alt="close button"
            src="/images/stack/x.svg"
            // layout="fill"
            width={24}
            height={24}
            onClick={() => setOffcanvas(false)}
          />
          <Nav scheme="dark" dir="vertical" />
        </div>
        <ContactSection />
        <footer className="w-full text-sm tracking-wider text-gray-500 font-semibold text-center py-4 bg-[#2d253a] fixed bottom-0">
          DESIGN BY RAHMAT
        </footer>
      </div>
    </>
  );
}
