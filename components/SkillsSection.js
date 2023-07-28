import { motion } from "framer-motion";
import SectionParagraph from "./SectionParagraph";
import SkillCard from "./SkillCard";
import { useEffect, useRef } from "react";
import classnames from "classnames";

const skillsData = require("../data/skills.json");
const baseTech = require("../data/base-tech.json");

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

export async function getStaticProps(context) {
  return {
    props: {},
  };
}

export default function SectionSkills() {
  const skills_ref = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll("#cards");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    cards.forEach((element, idx) => {
      observer.observe(element);
    });
  }, []);

  let offset_on = false;
  const skills_object = skills_ref.current;

  let skillOffset = skills_object?.getBoundingClientRect().top;

  if (skillOffset < 250) {
    offset_on = true;
  } else {
    offset_on = false;
  }
  return (
    <>
      <motion.section
        initial="initial"
        animate={offset_on ? "animate" : "initial"}
        className="pt-12 pb-3  bg-[#2d253a]"
        id="skills"
        ref={skills_ref}
      >
        <div className="container mx-auto px-10 2xl:px-0 overflow-x-hidden pt-10 pb-1">
          <h2 className={`text-white text-2xl font-semibold font-mono text-center`}>Skills</h2>
          <SectionParagraph>some of my current skills...</SectionParagraph>

          <h2 className={`text-white text-lg font-semibold font-mono text-center mt-10`}>Base Tech</h2>
          <div variants={stagger} className="flex -mx-4 mt-10 mb-10 flex-wrap">
            {baseTech.map((element, index) => {
              let cards = index % 2 == 0 ? "cards-left" : "cards-right";
              return (
                <div
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

          <h2 className={`text-white text-lg font-semibold font-mono text-center`}>Framework</h2>
          <div variants={stagger} className="flex -mx-4 mt-10 mb-10 flex-wrap">
            {skillsData.map((element, index) => {
              let cards = index % 2 == 0 ? "cards-left" : "cards-right";
              return (
                <div
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
        </div>
      </motion.section>
    </>
  );
}
