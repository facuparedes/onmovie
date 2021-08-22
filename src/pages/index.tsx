import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Navbar from "../common/components/navbar/Navbar";
import ListSection from "../common/components/sections/lists/ListSection";
import MainSection from "../common/components/sections/main/MainSection";
import { FeaturedMovieInterface } from "../common/interfaces/mainSection";
import config from "../common/utils/config";

export default function Home({ featuredMovie, trendingMovies, discoverMovies, topRatedMovies }) {
  return (
    <div>
      <Head>
        <title>ONMOVIE | Movies streaming service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <MainSection {...{ featuredMovie }} />
        <ListSection {...{ trendingMovies, discoverMovies, topRatedMovies }} />
      </main>
    </div>
  );
}

const axiosFetch = (endpoint: string) =>
  axios
    .get(`${config.TMDB_APIURL}/${endpoint}?api_key=${config.TMDB_APIKEY}&language=en-US`)
    .then((res) => res?.data?.results)
    .then((data) => data.map((item) => ({ id: item.id, backdropPath: item.backdrop_path, title: item.title })))
    .catch((err) => ({ errorMsg: `${err?.message}. ${err?.code ?? ""}` }));

export const getServerSideProps: GetServerSideProps = async () => {
  const [featuredMovie, trendingMovies, discoverMovies, topRatedMovies] = await Promise.all([
    axios
      .get(`${config.TMDB_APIURL}/movie/popular?api_key=${config.TMDB_APIKEY}&language=en-US`)
      .then((res) => res?.data?.results[0]?.id)
      .then((id) => axios.get(`${config.TMDB_APIURL}/movie/${id}?api_key=${config.TMDB_APIKEY}&language=en-US&append_to_response=releases`))
      .then((res) => res?.data)
      .then(
        (data): FeaturedMovieInterface => ({
          data: {
            id: data.id,
            backdropPath: data.backdrop_path,
            posterPath: data.poster_path,
            title: data.title,
            description: data.overview,
            releaseDate: data.release_date,
            voteAverage: data.vote_average.toFixed(1),
            duration: data.runtime,
            rateCertification: data.releases.countries,
          },
        })
      )
      .catch((err) => ({ errorMsg: `${err?.message}. ${err?.code ?? ""}` })),
    axiosFetch("trending/movie/week"),
    axiosFetch("discover/movie"),
    axiosFetch("movie/top_rated"),
  ]);

  return {
    props: {
      featuredMovie,
      trendingMovies,
      discoverMovies,
      topRatedMovies,
    },
  };
};
