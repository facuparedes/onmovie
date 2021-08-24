import axios from "axios";
import { NextApiResponse } from "next";
import { ParsedDataInterface } from "../../../common/interfaces/parsedData";
import parseMovieData from "../../../common/functions/parseMovieData";
import config from "../../../common/utils/config";

export default async function handler(_, res: NextApiResponse) {
  const data: ParsedDataInterface = await axios
    .get(`${config.TMDB_APIURL}/discover/movie?api_key=${config.TMDB_APIKEY}&language=en-US`)
    .then((res) => res?.data?.results)
    .then((data) => data.map((el) => parseMovieData(el).data))
    .catch((err) => ({ errorMsg: `${err?.message}. ${err?.code ?? ""}` }));

  if (data?.errorMsg) return res.status(400).send(data.errorMsg);
  return res.status(200).json(data);
}
