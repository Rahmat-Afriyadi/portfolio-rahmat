import { motion } from "framer-motion";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";
import { useEffect, useState, useRef } from "react";
import classnames from "classnames";

const skillsData = require("../data/skills.json");

const easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.13,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const fadeInUp = {
  initial: {
    y: 100,
    x: 100,
    opacity: 0.0,
  },
  animate: {
    y: 0,
    x: 0,
    opacity: 1,
  },
  transition: {
    duration: 0.5,
    type: "spring",
    stiffness: 50,
  },
};

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function SectionSkills() {
  const skills_ref = useRef(null);
  

  useEffect(()=>{
    const cards = document.querySelectorAll("#cards");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        // rootMargin: "-150px",
        threshold: 0.5,
      }
    );

    cards.forEach((element, idx) => {
      observer.observe(element);
    });
  },[])

  let offset_on = false;
  const skills_object = skills_ref.current;

  let skillOffset = skills_object?.getBoundingClientRect().top;
  let height_skills_object = skills_object?.getBoundingClientRect().height;

  // if (skillOffset < 250 && skillOffset > -(height_skills_object-120)) {
  if (skillOffset < 250) {
    offset_on = true;
  } else {
    offset_on = false;
  }
  let abs_skillOffset = Math.abs(skillOffset) - 100;
  return (
    <>
      <motion.section
        initial="initial"
        animate={offset_on ? "animate" : "initial"}
        className="pt-12 pb-3  bg-[#2d253a]"
        // className="pt-12 pb-3 bg-primarygray  bg-[#2d253a]"
        id="skills"
        ref={skills_ref}
      >
        <div className="container mx-auto px-10 2xl:px-0 overflow-x-hidden pt-10 pb-1">
          <h2
            className={`text-white text-2xl font-semibold font-mono text-center`}
          >
            Skills
          </h2>
          <SectionParagraph>some of my current skills...</SectionParagraph>
          <div
            // style={{ transform: `translateX(${skillOffset * .2}px)` }}
            variants={stagger}
            className="flex -mx-4 mt-20 mb-10 flex-wrap"
          >
            {skillsData.map((element, index) => {
              let cards = index % 2 == 0 ? "cards-left" : "cards-right";
              return (
                <div
                  // variants={fadeInUp}
                  key={index}
                  id="cards"
                  className={classnames(
                    "w-full sm:w-6/12 md:w-4/12 lg:w-3/12 cards transition duration-1000 text-center ease-in hover:scale-90 bg-transparent rounded-lg p-2",
                    cards
                  )}
                >
                  <SkillCard
                    key={index}
                    name={element.name}
                    level={element.level}
                    image={element.image}
                    imageClassName="h-16 rounded-full"
                  />
                </div>
              );
            })}
          </div>
          {/* <motion.div
            // style={{ transform: `translateX(${skillOffset * .2}px)` }}
            variants={stagger}
            className="flex -mx-4 mt-20 flex-wrap"
          >
            {skillsData.map((element) => {
              return (
                <motion.div
                  variants={fadeInUp}
                  whileHover={{
                    scale: 0.95,
                    transition: {
                      // yoyo: 2,
                    },
                  }}
                  className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 px-4 pb-8"
                >
                  <SkillCard
                    name={element.name}
                    level={element.level}
                    image={element.image}
                    imageClassName="h-16 rounded-full"
                  />
                </motion.div>
              );
            })}
          </motion.div> */}
        </div>
      </motion.section>
    </>
  );
}
