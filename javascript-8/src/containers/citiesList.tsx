import React from "react";

export type Props = {
  cities: string[];
};

export const CitiesList: React.FC<Props> = ({ cities }) => {
  return (
    <ul>
      {cities.map((city) => (
        <li>{city}</li>
      ))}
    </ul>
  );
};
