import classnames from "classnames";

import Data from "../data/projects.json";
import Stack from "./Stack";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: {
    // y: 200,
    // rotate: 0,
    scale: 0,
    opacity: 0.0
  },
  animate: {
    // y: 0,
    // x:0,
    // rotate: 360,
    scale: 1,
    opacity: 1
  },
  transition: {
    duration: 4,
    type: "tween",
    // stiffness: 50,
  },
};


export default function ProjectItem({
  name,
  description,
  image,
  index,
  order,
}) {
  const image_url = "/images/projects/" + image;
  const data = Data;

  return (
    <article className="text-center w-full md:flex mb-16">

      <motion.img
        className={classnames(
          "md:w-6/12 w-full h-full rounded-lg",
          order == 1 ? "order-2" : ""
        )}
        src={image_url}
      />

      {/* <InView threshold={0.2}>
        {({ inView, ref, entry }) => (
          <motion.img
            ref={ref}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            transition="transition"
            variants={fadeInUp}
            className={classnames(
              "md:w-6/12 w-full h-full rounded-lg",
              // `bg-[url('/images/projects/${image}')]`,
              order == 1 ? "order-2" : ""
            )}
            src={image_url}
          />
        )}
      </InView> */}

      <div className="vertical-scroll text-white sm:px-11 h-96 md:overflow-y-auto md:w-6/12 w-full">
        <h2
          className=" font-semibold mt-7 lg:-mt-1 text-2xl sm:text-5xl md:text-4xl lg:text-5xl mb-1"
        >
          {name}
        </h2>
        <div
          key={index}
          className="flex justify-center items-center my-5 w-full"
        >
          {data[index].stack.map((element) => {
            return <Stack key={index} image={element} />;
          })}
        </div>
        <p
          key={index}
          className="text-left mb-1 text-sm sm:text-lg overflow-y-auto"
        >
          {description}
        </p>
      </div>
    </article>
  );
}

// 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;

// https://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@github.com/Rahmat-Afriyadi/portfolio-rahmat.git

// git config --global --add remote.origin.proxy "https://github.com/Rahmat-Afriyadi/portfolio-rahmat.git"