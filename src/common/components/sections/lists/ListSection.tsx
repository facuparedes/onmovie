import Carousel from "../../carousel/Carousel";

export default function ListSection({ trendingMovies, discoverMovies, topRatedMovies }) {
  return (
    <section>
      {!trendingMovies?.errorMsg && trendingMovies.length && <Carousel title="Trending" movies={trendingMovies} padding />}
      {!discoverMovies?.errorMsg && discoverMovies.length && <Carousel title="Discover" movies={discoverMovies} />}
      {!topRatedMovies?.errorMsg && topRatedMovies.length && <Carousel title="Top rated" movies={topRatedMovies} />}
    </section>
  );
}
