import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import parseMovieData from "../../../common/functions/parseMovieData";
import config from "../../../common/utils/config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!req.query.id) return res.status(400).send("Missing parameter: id");

  const data = await axios
    .get(`${config.TMDB_APIURL}/movie/${req.query.id}?api_key=${config.TMDB_APIKEY}&language=en-US&append_to_response=releases`)
    .then((res) => res?.data)
    .catch((err) => ({ errorMsg: `${err?.message}. ${err?.code ?? ""}` }));

  if (data?.errorMsg) return res.status(500).send(data.errorMsg);
  return res.status(200).json(data);
}
