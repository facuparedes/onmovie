import { motion } from "framer-motion";
import { Loader } from "react-feather";
import { PageTransitionVariants } from "../../../animations/masterAnimationsVariants";
import theme from "../../../utils/theme";
import TransitionComponent from "../../transitionComponent/TransitionComponent";
import { loadingSpinnerVariant } from "../animationVariants";

export default function LoadingSection() {
  return (
    <TransitionComponent>
      <div className="w-full h-screen absolute" />
      <div className="w-full h-screen flex justify-center items-center">
        <motion.div animate="animate" variants={loadingSpinnerVariant}>
          <Loader color={theme.colors.custom.first} />
        </motion.div>
      </div>
    </TransitionComponent>
  );
}
