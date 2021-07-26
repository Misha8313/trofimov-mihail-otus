import React from "react";
import { Link } from "react-router-dom";

export type Props = {
  cities: string[];
};

export const CitiesList: React.FC<Props> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li><Link to={`/city/${city}`}>{city}</Link></li>
      ))}
    </ul>
  );
};
