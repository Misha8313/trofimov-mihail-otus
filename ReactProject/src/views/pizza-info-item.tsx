import React, { useState } from "react";
import styled from "styled-components";

import { IngredientModel } from "../models/ingredient";

export type Props = {
  ingredient: IngredientModel;
  onIngredientCountChange: () => void;
};

const IconPlus = styled.i`
  color: cornflowerblue;
  cursor: pointer;
  dispay: inline;
  width: 28px;
  height: 28px;
  margin-left: 2px;
  margin-right: 7px;
  font-size: 20px;
  font-weight: bold;
`;
const IconMinus = styled.span`
  color: red;
  cursor: pointer;
  dispay: inline;
  width: 20px;
  height: 16px;
  padding: 7px;
  margin-left: 7px;
  margin-right: 2px;
  font-size: 25px;
  font-weight: bold;
`;

const Counter = styled.span`
  font-weight: bold;
  font-size: 18px;
`;

const PizzaInfoItem: React.FC<Props> = ({
  ingredient,
  onIngredientCountChange,
}) => {
  const [count, setCount] = useState<number>(1);

  const handleClickMinus = () => {
    if (count > 1) {
      ingredient.count--;
      setCount(ingredient.count);
      onIngredientCountChange();
    }
  };

  const handleClickPlus = () => {
    if (count < ingredient.maxCount) {
      ingredient.count++;
      setCount(ingredient.count);
      onIngredientCountChange();
    }
  };

  return (
    <div>
      <IconMinus onClick={handleClickMinus}>-</IconMinus>
      <Counter>{ingredient.count}</Counter>
      <IconPlus onClick={handleClickPlus}>+</IconPlus>
      <span key={ingredient.id}>{ingredient.nameIngredient}</span>
    </div>
  );
};

export default PizzaInfoItem;
