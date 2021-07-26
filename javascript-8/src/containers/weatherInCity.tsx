import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export type Props = {
  city?: string;
};

export type WeatherInfo = {
  temp: string;
  feelsLike: string;
  pressure: string;
  humidity: string;
};

export const WeatherInCity: React.FC<Props> = ({ city }) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=79bd919f5bda3fc6800dde2dae2c9348`
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setWeatherInfo({
          feelsLike: data.main.feels_like,
          temp: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
        });
      });
  }, [city]);

  return (
    <>
      <h1>Погода в городе {city}</h1>
      {!isLoaded ? (
        <div>данные загружаются</div>
      ) : (
        <ul>
          <li>
            <span>Температура:</span>
            <span>{weatherInfo?.temp}</span>
          </li>
          <li>
            <span>Ощущается как:</span>
            <span>{weatherInfo?.feelsLike}</span>
          </li>
          <li>
            <span>Давление:</span>
            <span>{weatherInfo?.pressure}</span>
          </li>
          <li>
            <span>Влажность:</span>
            <span>{weatherInfo?.humidity}</span>
          </li>
        </ul>
      )}
    </>
  );
};
