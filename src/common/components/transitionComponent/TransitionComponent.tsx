import { motion } from "framer-motion";
import { ReactNode } from "react";
import { PageTransitionVariants } from "../../animations/masterAnimationsVariants";

export default function TransitionComponent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={PageTransitionVariants} {...{ className }}>
      {children}
    </motion.div>
  );
}
