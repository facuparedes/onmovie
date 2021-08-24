import { FeaturedMovieInterface } from "../interfaces/mainSection";
import config from "../utils/config";

export default function parseMovieData(data: any): FeaturedMovieInterface {
  return {
    data: {
      id: data.id,
      backdropPath: `${config.TMDB_APIIMAGEURL}${data.backdrop_path}`,
      posterPath: `${config.TMDB_APIIMAGEURL}${data.poster_path}`,
      title: data.title,
      description: data.overview,
      releaseDate: data?.release_date ?? null,
      voteAverage: data?.vote_average.toFixed(1) ?? null,
      duration: data?.runtime ?? null,
      rateCertification: data?.releases?.countries ?? null,
    },
  };
}
