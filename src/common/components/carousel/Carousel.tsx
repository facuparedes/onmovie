import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { carouselVariant } from "./animationVariants";
import config from "../../utils/config";

export default function Carousel({ title, movies, padding = false }) {
  const ref = useRef<HTMLDivElement>();
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => setXOffset(ref.current.scrollWidth - ref.current.clientWidth), [ref.current]);

  return (
    <div className={`flex flex-col ${padding ? "pt-32" : ""} pb-32 px-4 md:px-24 overflow-x-hidden`}>
      <span className="text-custom-first font-poppins font-medium text-2xl sm:text-3xl line-clamp-1 mb-4">{title}</span>
      <motion.div ref={ref} className="flex" drag="x" dragConstraints={{ left: -xOffset, right: 0 }}>
        {movies.map((el) => (
          <motion.div key={el.id} variants={carouselVariant} whileHover="whileHover" className="flex-shrink-0 w-72 h-40 bg-custom-first bg-opacity-20 mr-2 rounded-xl overflow-hidden relative">
            <div className="w-full h-full flex p-4 items-end transition-colors opacity-0 hover:opacity-100 hover:bg-black hover:bg-opacity-30 absolute">
              <span className="text-white text-lg font-medium">{el.title}</span>
            </div>
            <img src={`${config.TMDB_APIIMAGEURL}${el.backdropPath}`} className="w-full h-full object-cover object-center pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
