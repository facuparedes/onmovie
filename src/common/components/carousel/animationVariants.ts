import { Variants } from "framer-motion";

export const carouselVariant = (<T extends Variants>(variants: T): T => variants)({
  whileHover: { scale: 1.15, zIndex: 1, boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)" },
});
