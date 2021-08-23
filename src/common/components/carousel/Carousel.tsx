import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CarouselItem from "./CarouselItem";

export default function Carousel({ title, movies, padding = false }) {
  const ref = useRef<HTMLDivElement>();
  const [xOffset, setXOffset] = useState(0);

  useEffect(() => setXOffset(ref.current.scrollWidth - ref.current.clientWidth), [ref.current]);

  return (
    <div className={`flex flex-col ${padding ? "pt-32" : ""} pb-32 px-4 md:px-24 overflow-x-hidden`}>
      <span className="text-custom-first font-poppins font-medium text-2xl sm:text-3xl line-clamp-1 mb-4">{title}</span>
      <motion.div ref={ref} className="flex" drag="x" dragConstraints={{ left: -xOffset, right: 0 }}>
        {movies.map((el) => (
          <CarouselItem dataElement={el} key={el.id} />
        ))}
      </motion.div>
    </div>
  );
}
