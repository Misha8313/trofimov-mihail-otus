import React from "react";
import { useState } from "react";

export type Props = {
  onAddCityClick: (city: string) => void;
};

export const AddCity: React.FC<Props> = ({ onAddCityClick }) => {
  const [newCity, setNewCity] = useState<string>();

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (newCity !== undefined) {
      onAddCityClick(newCity);
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCity(e.target.value);
  };

  return (
    <div>
      <h1>Добавить город</h1>
      <label>город</label>
      <input type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>Добавить</button>
    </div>
  );
};
