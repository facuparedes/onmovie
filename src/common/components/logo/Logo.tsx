import { motion } from "framer-motion";
import Link from "next/link";
import { underlineNavVariant } from "./animationVariants";

export default function Logo() {
  return (
    <motion.div initial="withoutHover" whileHover="withHover">
      <Link href="/">
        <a className="font-bold text-2xl font-poppins">
          <motion.span variants={underlineNavVariant} className="text-custom-accent">
            ON
          </motion.span>
          <span className="text-custom-first">MOVIE</span>
        </a>
      </Link>
    </motion.div>
  );
}
