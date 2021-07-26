import React from "react";
import { useState } from "react";

import { WeatherInCity } from "./weatherInCity";

export type Props = {
  cities: string[];
};

export const SearchCity: React.FC<Props> = ({ cities }) => {
  const [searchCity, setSearchCity] = useState<string>("");

  const [selectedCity, setSelectedCity] = useState<string>();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (cities.indexOf(searchCity) > -1) {
      setSelectedCity(searchCity);
    } else {
      setSelectedCity(undefined);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCity(e.target.value);
  };

  return (
    <div>
      <h1>Найти город</h1>
      <label>город</label>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>Найти</button>
      {selectedCity === undefined ? (
        <div>город не найден</div>
      ) : (
        <WeatherInCity city={selectedCity} />
      )}
    </div>
  );
};
