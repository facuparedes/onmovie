import { Variants } from "framer-motion";
import theme from "../../utils/theme";

export const underlineNavVariant = (<T extends Variants>(variants: T): T => variants)({
  withoutHover: { textShadow: "none" },
  withHover: { textShadow: theme.textShadow.navLogo },
});
