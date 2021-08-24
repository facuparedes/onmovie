import { FeaturedMovieInterface } from "./mainSection";

export interface ParsedDataInterface {
  movies?: FeaturedMovieInterface[];
  errorMsg?: string;
}
