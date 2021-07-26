import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export type Props = {
  city?: string;
  cntDay?: string;
};

export type WeatherInfoType = {
  temp: string;
  feelsLike: string;
  pressure: string;
  humidity: string;
};

export const WeatherInCity: React.FC<Props> = ({ city, cntDay }) => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoType>();
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(cntDay);

  useEffect(() => {
    const dataCash = localStorage.getItem(city || "" + cntDay);
    if (dataCash !== undefined && dataCash != null) {
      setIsLoaded(true);
      setWeatherInfo(JSON.parse(dataCash));
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather/?q=${city}&cnt=${cntDay}&appid=79bd919f5bda3fc6800dde2dae2c9348`
      )
        .then((response) => response.json())
        .then((data) => {
          setIsLoaded(true);
          const info: WeatherInfoType = {
            feelsLike: data.main.feels_like,
            temp: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
          };
          setWeatherInfo(info);
          localStorage.setItem(city || "" + cntDay, JSON.stringify(info));
        });
    }
  }, [city, cntDay]);

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
