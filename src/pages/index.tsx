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

const axiosFetch = async (endpoint: string) =>
  await axios
    .get(`${config.VERCEL_URL}/api/${endpoint}`)
    .then((res) => res.data)
    .catch((err) => ({ errorMsg: `${err?.message}. ${err?.code ?? ""}` }));

export const getServerSideProps: GetServerSideProps = async () => {
  const [featuredMovie, trendingMovies, discoverMovies, topRatedMovies] = await Promise.all([
    axiosFetch("movie/featured"),
    axiosFetch("movie/trending"),
    axiosFetch("movie/discover"),
    axiosFetch("movie/topRated"),
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
