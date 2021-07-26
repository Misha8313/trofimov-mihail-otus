import React from "react";
import { useState } from "react";

import { AddCity } from "../containers/addCity";
import { CitiesList } from "./citiesList";
import { SearchCity } from "./searchCity";

export const WeatherMainFrom: React.FC = () => {
  const [cities, setCurrentCities] = useState<string[]>([]);

  const onAddCityHandler = (city: string) => {
    const citiesArray = [...cities, city];
    setCurrentCities(citiesArray);
  };

  return (
    <>
      <AddCity onAddCityClick={onAddCityHandler} />
      <CitiesList cities={cities} />
      <SearchCity cities={cities} />
    </>
  );
};
