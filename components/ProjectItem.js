import classnames from "classnames";

import Data from "./data/projects.json";
import Stack from "./Stack";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: {
    // y: 200,
    // rotate: 0,
    scale: 0,
    opacity: 0.0,
  },
  animate: {
    // y: 0,
    // x:0,
    // rotate: 360,
    scale: 1,
    opacity: 1,
  },
  transition: {
    duration: 4,
    type: "tween",
    // stiffness: 50,
  },
};

export default function ProjectItem({ name, description, image, index, order, date }) {
  const image_url = "/images/projects/" + image;
  const data = Data;

  return (
    <article className="text-center w-full md:flex mb-16">
      <motion.img
        className={classnames("md:w-6/12 w-full h-full rounded-lg pr-6 pl-2", order == 1 ? "order-2" : "")}
        src={image_url}
      />

      <div className="vertical-scroll text-white sm:px-8 h-[100px] md:overflow-y-auto md:w-6/12 w-full">
        <h2 className=" font-semibold mt-7 lg:-mt-1 text-2xl sm:text-5xl md:text-4xl lg:text-4xl mb-1">{name}</h2>
        <small key={index}>{date}</small>
        <br></br>
        <div key={index} className="flex justify-center items-center my-5 w-full">
          {data[index].stack.map((element) => {
            return <Stack key={index} image={element["image"]} name={element["name"]} />;
          })}
        </div>
        <p key={index} className="text-center mb-1 text-sm sm:text-lg overflow-y-auto">
          {description}
        </p>
      </div>
    </article>
  );
}
