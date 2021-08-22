import { AnimatePresence } from "framer-motion";
import { FeaturedMovieInterface } from "../../../interfaces/mainSection";
import DataSection from "./DataSection";
import ErrorSection from "./ErrorSection";
import LoadingSection from "./LoadingSection";

export default function MainSection({ featuredMovie }: { featuredMovie: FeaturedMovieInterface }) {
  return (
    <section className="h-screen">
      <AnimatePresence>
        {(() => {
          if (!featuredMovie?.errorMsg && !featuredMovie?.data) return <LoadingSection />;
          else if (featuredMovie?.errorMsg) return <ErrorSection error={featuredMovie?.errorMsg} />;
          else return <DataSection {...featuredMovie?.data} />;
        })()}
      </AnimatePresence>
    </section>
  );
}
