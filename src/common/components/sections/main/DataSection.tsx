import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, Eye, Star } from "react-feather";
import { FeaturedMovieInterface } from "../../../interfaces/mainSection";
import MovieFact from "../../movieFact/MovieFact";
import TransitionComponent from "../../transitionComponent/TransitionComponent";
import theme from "../../../utils/theme";

export default function DataSection(data: FeaturedMovieInterface["data"]) {
  const rateCertification =
    data?.rateCertification?.find((el) => el.iso_3166_1 === "US" || el.iso_3166_1 === "NL")?.certification || data?.rateCertification?.find((el) => el.iso_3166_1 !== "")?.certification || null;

  return (
    <TransitionComponent className="w-screen h-screen">
      <Image src={data.backdropPath} className="w-full h-screen object-cover object-center pointer-events-none absolute" layout="fill" loading="eager" />
      <div className="w-full h-screen bg-custom-background bg-opacity-40 absolute" />
      <div className="flex flex-col justify-end w-full h-screen py-10 px-4 md:px-16 absolute">
        <span className="text-custom-first font-poppins font-bold text-2xl sm:text-4xl lg:text-7xl line-clamp-1 pb-4">{data.title}</span>
        <div className="flex">
          <div className="flex flex-col xl:w-2/4">
            <span className="text-custom-first font-poppins font-normal text-base sm:text-xl line-clamp-3 mb-12">{data.description}</span>
            <div className="flex">
              <div className="flex flex-col w-1/2 justify-center gap-4">
                {data?.releaseDate && <MovieFact icon={Calendar} iconColor={theme.colors.custom.accent} text={data?.releaseDate.split("-")[0]} />}
                {data?.duration > 0 && <MovieFact icon={Clock} iconColor={theme.colors.custom.accent} text={`${data?.duration}min`} />}
              </div>
              <div className="flex flex-col w-1/2 justify-center gap-4">
                {rateCertification && (
                  <MovieFact icon={Eye} iconColor={theme.colors.custom.accent} text={rateCertification} customClassName="font-poppins text-xs ml-4 border-1 border-custom-first px-2 py-1 rounded" />
                )}
                {data?.voteAverage && <MovieFact icon={Star} iconColor={theme.colors.custom.accent} text={data.voteAverage.toString()} />}
              </div>
              <div className="ml-4 sm:ml-0 flex flex-col sm:flex-row w-full justify-center">
                <button className="sm:w-1/4 text-custom-first font-poppins text-base py-4 bg-custom-first bg-opacity-20 hover:bg-opacity-30 focus:bg-opacity-10 rounded-xl">INFO</button>
                <button className="sm:w-3/4 text-custom-first font-poppins text-base py-4 bg-custom-accent bg-opacity-80 hover:bg-opacity-90 focus:bg-opacity-70 sm:ml-5 rounded-xl">
                  WATCH
                  <ArrowUpRight color={theme.colors.custom.first} className="ml-4 inline" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionComponent>
  );
}
