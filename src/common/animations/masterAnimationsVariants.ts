import { Variants } from "framer-motion";

export const PageTransitionVariants = (<T extends Variants>(variants: T): T => variants)({
  initial: {
    scale: 1.05,
    transformOrigin: "center center",
    opacity: 0,
    transition: { bounce: 0, duration: 0.6, ease: "anticipate" },
  },
  animate: {
    scale: 1,
    transformOrigin: "center center",
    opacity: 1,
    transition: { bounce: 0, duration: 0.6, ease: "anticipate" },
  },
  exit: {
    scale: 1.05,
    transformOrigin: "center center",
    opacity: 0,
    transition: { bounce: 0, duration: 0.6, ease: "anticipate" },
  },
});
