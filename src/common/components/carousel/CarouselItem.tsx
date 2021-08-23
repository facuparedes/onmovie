import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { carouselVariant } from "./animationVariants";

export default function CarouselItem({ dataElement: el }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      variants={carouselVariant}
      animate={isHovering ? "whileHover" : "initial"}
      className="flex-shrink-0 w-72 h-40 bg-custom-first bg-opacity-20 mr-2 rounded-xl overflow-hidden relative"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      <div className="w-full h-full flex p-4 items-end transition-colors opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 z-10 absolute">
        <span className="text-white text-lg font-medium">{el.title}</span>
      </div>
      <Image src={el.backdropPath} className="object-cover object-center pointer-events-none" layout="fill" />
    </motion.div>
  );
}
