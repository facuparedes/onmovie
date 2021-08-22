import { motion } from "framer-motion";
import { PageTransitionVariants } from "../../animations/masterAnimationsVariants";

export default function TransitionComponent({ children }) {
  return (
    <motion.div initial="initial" animate="animate" exit="exit" variants={PageTransitionVariants}>
      {children}
    </motion.div>
  );
}
