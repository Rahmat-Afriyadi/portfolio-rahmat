import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Profile() {
  return (
    <section className="pt-10 pb-1 bg-[#2d253a] z-10" id="profile">
      <div className="container mx-auto md:px-10 2xl:px-0">
        <br></br>
        <SectionTitle black={true}>Profile</SectionTitle>
        <SectionParagraph>About myself.</SectionParagraph>

        <div className="flex md:items-start text-white flex-wrap xl:w-9/12 mx-auto -mt-10 md:mt-10 h-auto">
          <motion.div
            className="aspect-[4/5] md:w-5/12 p-1 md:p-2 lg:p-3 scale-50 md:scale-90 lg:scale-100 rounded-x -mt-32 md:-mt-0 lg:mt-3 rounded-lg"
            //   initial={{ backgroundColor: "hsl(0, 100, 50)" }}
            animate={{
              backgroundColor: [
                "hsl(0, 100, 75)",
                "hsl(120, 100, 75)",
                "hsl(240, 100, 75)",
                "hsl(120, 100, 75)",
                "hsl(0, 100, 75)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <motion.img alt="profile" src="/images/profilefix.jpg" layout="fill" className="rounded-lg" />
          </motion.div>
          <div className="vertical-scroll -mt-32 md:text-md sm:-mt-40 md:-mt-0 md:w-7/12 w-full pt-5 lg:pt-0 pb-10 px-5 md:px-9 overflow-y-auto md:h-[500px] lg:h-screen">
            <bold className="text-2xl font-semibold" id="profile">
              My goal
            </bold>
            <ul className="text-[15px] md:text-md">
              <li>&nbsp; &#8226; Become an expert at a startup unicorn</li>
            </ul>
            <br></br>
            <bold className="text-2xl font-semibold">My hobby</bold>
            <ul className="text-[15px] md:text-md">
              <li>&nbsp; &#8226; Playing game</li>
              <li>&nbsp; &#8226; Reading, like manga, knowladge books, etc</li>
            </ul>
            <br></br>
            <bold className="text-2xl font-semibold">My experience</bold>
            <ul className="text-[15px] md:text-md">
              <li>&nbsp; &#8226; Ministry of environment and forestry (Sep 2018 - Nov 2018)</li>
              <li>&nbsp; &#8226; Assessment and Learning Center (Oct 2021 - Dec 2021)</li>
              <li>&nbsp; &#8226; Department of Youth Education and Sports (Oct 2022 - Dec 2022)</li>
              <li>&nbsp; &#8226; Metrodata Electronics Ltd. (Feb 2023 - Jul 2023)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
