import classnames from "classnames";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAnimation } from "framer-motion";

export default function SkillCard({ name, level, image, imageClassName }) {
  const addImageClassName = imageClassName ? ` ${imageClassName}` : "";
  const image_url = "/images/stack/" + image;
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    hover: {
      // x: 50,
      scale: 1.9,
      rotate: 360,
      transition: {
        // yoyo: 2,
        type: "spring"
      },
    },
    initial: {
      // x: 0,
      scale: 1,
    },
    transition: {
      yoyo: 2,
    },
  };

  function handleMouseEnter() {
    setIsHovered(true);
  }

  function handleMouseLeave() {
    setIsHovered(false);
  }

  // Imperative
  const controls = useAnimation();
  function handleMouseEnterControls() {
    controls.start("hover");
  }

  function handleMouseLeaveControls() {
    controls.start("initial");
  }
  return (
    <>
      <div
        id="skills_card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // className="relative bg-grey shadow-skill p-6 rounded-lg grid text-center"
        className="shadow-md shadow-cyan-500/50 relative bg-white p-6 rounded-lg flex items-center text-center"
      >
        <motion.img
          src={image_url}
          variants={variants}
          animate={isHovered ? "hover" : "initial"}
          className={classnames("mr-7", addImageClassName)}
        />
        <div className="flex flex-col justify-center content-center mr-5 h-20 w-24 rounded-full bg-cover bg-center text-center ">
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
        </div>
      </div>
    </>
  );
}
