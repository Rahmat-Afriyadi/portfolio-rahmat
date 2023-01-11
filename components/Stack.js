import classnames from "classnames";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";
import { Tooltip, Button } from "@material-tailwind/react";
import { elementDragControls } from "framer-motion/types/gestures/drag/VisualElementDragControls";
// import Image from "next/dist/client/image";
export default function Stack({ image, name}) {
  const image_url = "/images/stack/" + image
  
  return (
    <Tooltip 
      className="h-[39px] m-auto text-md flex items-center justify-center"
      content={name} 
      placement="top-start" 
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
    }}>
      <Button variant="gradient"><motion.img
      className={classnames(
        "h-11 w-11 mx-1 bg-cover bg-center bg-white/95 rounded-2xl shadow-smd shadow-yellow-100",
      `bg-[url('/images/stack/${image}')]`
        // `bg-[url('/images/stack/lumen.png')]`
      )}
      src={image_url}
    /></Button>
    </Tooltip>
    
  );
}
