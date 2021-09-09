import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IngredientModel } from "../models/ingredient";

//import { Ingredient } from "../graphql/types";
import PizzaInfoItem from "./pizza-info-item";

export type Props = {
  selectedIngredients: IngredientModel[];
};

const Header = styled.div`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Footer = styled.div`
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 7px;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const PizzaInfo: React.FC<Props> = ({ selectedIngredients }) => {
  const Summ = selectedIngredients.reduce(
    (sum, current) => sum + current.weight * current.count,
    0
  );

  const [summWeight, setSummWeight] = useState<number>(Summ);

  const handleIngredientCountChange = () => {
    setSummWeight(
      selectedIngredients.reduce(
        (sum, current) => sum + current.weight * current.count,
        0
      )
    );
  };

  useEffect(() => {
    setSummWeight(Summ);
  }, [Summ]);

  return (
    <div>
      <Header>Состав:</Header>
      {selectedIngredients.map((ingredient) => (
        <PizzaInfoItem
          key={ingredient.id}
          ingredient={ingredient}
          onIngredientCountChange={handleIngredientCountChange}
        ></PizzaInfoItem>
      ))}
      {summWeight !== 0 ? (
        <Footer data-testid="resultItem">Вес: {summWeight} гр.</Footer>
      ) : null}
    </div>
  );
};

export default PizzaInfo;
