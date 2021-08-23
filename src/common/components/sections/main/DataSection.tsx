import { ArrowUpRight, Calendar, Clock, Eye, Star } from "react-feather";
import { FeaturedMovieInterface } from "../../../interfaces/mainSection";
import config from "../../../utils/config";
import theme from "../../../utils/theme";
import MovieFact from "../../movieFact/MovieFact";
import TransitionComponent from "../../transitionComponent/TransitionComponent";

export default function DataSection(data: FeaturedMovieInterface["data"]) {
  return (
    <TransitionComponent>
      <img src={`${config.TMDB_APIIMAGEURL}${data.backdropPath}`} className="w-full h-screen object-cover object-center pointer-events-none absolute" />
      <div className="w-full h-screen bg-custom-background bg-opacity-40 absolute" />
      <div className="flex flex-col justify-end w-full h-screen py-10 px-4 md:px-16 absolute">
        <span className="text-custom-first font-poppins font-bold text-4xl lg:text-7xl line-clamp-1 mb-4">{data.title}</span>
        <div className="flex">
          <div className="flex flex-col xl:w-2/4">
            <span className="text-custom-first font-poppins font-normal text-xl mb-12">{data.description}</span>
            <div className="flex">
              <div className="flex flex-col w-1/2 justify-center">
                {data?.releaseDate && <MovieFact icon={Calendar} iconColor={theme.colors.custom.accent} text={data?.releaseDate.split("-")[0]} />}
                {data?.duration && <MovieFact icon={Clock} iconColor={theme.colors.custom.accent} text={`${data?.duration}min`} bottomPadding={false} />}
              </div>
              <div className="flex flex-col w-1/2 justify-center">
                {data?.rateCertification && (
                  <MovieFact
                    icon={Eye}
                    iconColor={theme.colors.custom.accent}
                    text={data?.rateCertification?.find((el) => el.iso_3166_1 === "US" || el.iso_3166_1 === "NL")?.certification}
                    customClassName="font-poppins text-xs ml-4 border-1 border-custom-first px-2 py-1 rounded"
                  />
                )}
                {data?.voteAverage && <MovieFact icon={Star} iconColor={theme.colors.custom.accent} text={data.voteAverage.toString()} bottomPadding={false} />}
              </div>
              <div className="flex flex-col w-full justify-center">
                <div className="flex">
                  <button className="w-1/4 text-custom-first font-poppins text-base py-4 bg-custom-first bg-opacity-20 hover:bg-opacity-30 focus:bg-opacity-10 rounded-xl">INFO</button>
                  <button className="w-3/4 text-custom-first font-poppins text-base py-4 bg-custom-accent bg-opacity-80 hover:bg-opacity-90 focus:bg-opacity-70 ml-5 rounded-xl">
                    WATCH
                    <ArrowUpRight color={theme.colors.custom.first} className="ml-4 inline" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionComponent>
  );
}
