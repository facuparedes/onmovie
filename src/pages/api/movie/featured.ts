import axios from "axios";
import { NextApiResponse } from "next";
import parseMovieData from "../../../common/functions/parseMovieData";
import config from "../../../common/utils/config";

const getRandom = (max: number) => Math.floor(Math.random() * max);

export default async function handler(_, res: NextApiResponse) {
  const data = await axios
    .get(`${config.TMDB_APIURL}/movie/popular?api_key=${config.TMDB_APIKEY}&language=en-US`)
    .then((res) => res?.data?.results[getRandom(res.data.results.length)]?.id)
    .then((id) => axios.get(`${config.VERCEL_URL}/api/movie/${id}`))
    .then((res) => parseMovieData(res?.data))
    .catch((err) => ({ errorMsg: `${err?.message}. ${err?.code ?? ""}` }));

  if (data?.errorMsg) return res.status(400).send(data.errorMsg);
  return res.status(200).json(data);
}
