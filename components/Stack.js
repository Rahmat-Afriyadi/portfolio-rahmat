import classnames from "classnames";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";
// import Image from "next/dist/client/image";
export default function Stack({ image }) {
  const image_url = "/images/stack/" + image
  return (
    <motion.img
      className={classnames(
        "h-11 w-11 mx-1 bg-cover bg-center bg-white/95 rounded-2xl shadow-smd shadow-yellow-100",
      `bg-[url('/images/stack/${image}')]`
        // `bg-[url('/images/stack/lumen.png')]`
      )}
      src={image_url}
    />
  );
}
