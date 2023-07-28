import NavItem from "../components/NavItem";
import classnames from "classnames";
import { motion } from "framer-motion";

export default function Nav({ scheme, dir }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 100,
      transition: {
        staggerChildren: 0.13,
      },
    },
  };

  const item = {
    hidden: { y: "-100vh" },
    show: {
      y: 0,
      transition: {
        duration: 2,
        type: "spring",
        stifness: 300,
      },
    },
  };

  const pickedDir = dirs[dir];

  return (
    <motion.ul variants={container} initial="hidden" animate="show" className={classnames("flex", pickedDir)}>
      <motion.div
        variants={item}
        // transition={{ delay: 2, duration: 1 }}
      >
        <NavItem scheme={scheme} href="/">
          Beranda
        </NavItem>
      </motion.div>
      <motion.div
        variants={item}
        // transition={{ delay: 2, duration: 1 }}
      >
        <NavItem scheme={scheme} href="profile">
          Profile
        </NavItem>
      </motion.div>
      <motion.div
        variants={item}
        // transition={{ delay: 2, duration: 1 }}
      >
        <NavItem scheme={scheme} href="skills">
          Skills
        </NavItem>
      </motion.div>
      <motion.div
        variants={item}
        // transition={{ delay: 2, duration: 1 }}
      >
        <NavItem scheme={scheme} href="projects">
          Projects
        </NavItem>
      </motion.div>
      <motion.div
        variants={item}
        // transition={{ delay: 2, duration: 1 }}
      >
        <NavItem scheme={scheme} href="contact">
          Contact
        </NavItem>
      </motion.div>
    </motion.ul>
  );
}
