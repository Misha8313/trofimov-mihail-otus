import React from "react";
import { useParams } from "react-router-dom";
import { FilterWeatherByDay } from "./filterWeatherByDay";

import { WeatherInCity } from "./weatherInCity";

export type Params = {
  city: string;
  cnt: string;
};

export const ForecastWeatherInCity: React.FC = () => {
  const { city, cnt } = useParams<Params>();
  return (
      <>
     <FilterWeatherByDay city={city} />
     <WeatherInCity city={city} cntDay={cnt} />
     </>
  )
};
