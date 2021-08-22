import { Variants } from "framer-motion";

export const loadingSpinnerVariant = (<T extends Variants>(variants: T): T => variants)({
  animate: {
    rotate: 180,
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.5,
    },
  },
});
