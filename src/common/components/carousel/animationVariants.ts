import { Variants } from "framer-motion";

export const carouselVariant = (<T extends Variants>(variants: T): T => variants)({
  initial: { zIndex: 1, scale: 1, transitionEnd: { zIndex: 0 } },
  whileHover: { zIndex: 2, scale: 1.15, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" },
});
