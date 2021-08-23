import { Icon } from "react-feather";

export interface MovieFactInterface {
  icon: Icon;
  iconColor: string;
  text: string;
  textColor?: string;
  customClassName?: string;
  bottomPadding?: boolean;
}

export interface FeaturedMovieInterface {
  errorMsg?: string;
  data?: {
    id: number;
    backdropPath: string;
    posterPath: string;
    title: string;
    description: string;
    releaseDate: string;
    voteAverage: number;
    duration: number;
    rateCertification: Array<RateCertificationInterface> | null;
  };
}

export interface RateCertificationInterface {
  certification: string;
  iso_3166_1: string;
}
