import classnames from "classnames";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function NavItem({ href, scheme, children }) {
    const schemes = {
        light: "text-white text-opacity-60 hover:text-opacity-100",
        dark: "text-black"
    }

    var offset_value = 10
    if (href == 'contact') {
        offset_value = 0  
    }

    const navClick = () => {
      // setBlack(true)
      // console.log("bisa nih ininya itu ", black)
    }

    // useEffect(()=>{

    // })
    
    const pickedScheme = schemes[scheme];

    return (
      <motion.li
        whileHover={{ scale: 1.2, originX: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link
          to={href}
          onClick={navClick}
          className={classnames(
            "text-lg transition font-semibold cursor-pointer",
            pickedScheme
          )}
          smooth={true}
          offset={offset_value}
        >
          {children}
        </Link>
      </motion.li>
    );
}
