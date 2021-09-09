import React, { useState } from "react";
import styled from "styled-components";

import { Ingredient } from "../graphql/types";

export type Props = {
  ingredient: Ingredient;
  onIngredientChange: (item: Ingredient, isCheked: boolean) => void;
};

const NameIngredient = styled.span<{ isChecked?: boolean }>`
  margin-left: 5px;
  width: 200px;
  ${({ isChecked }) => isChecked && "color: red"};
`;

const WeightIngredient = styled.span`
  margin-left: 5px;
  font-style: italic;
  font-size: 12px;
`;

const Container = styled.div`
  margin-top: 3px;
  margin-left: 15px;
`;

const IngredientItem: React.FC<Props> = ({
  ingredient,
  onIngredientChange,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleIngredientChange = () => {
    onIngredientChange(ingredient, !isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <Container>
      <label>
        <input
          type="checkBox"
          onChange={handleIngredientChange}
          checked={isChecked}
        />
        <NameIngredient isChecked={isChecked} data-testid="ingredientsItem">
          {ingredient.nameIngredient}
        </NameIngredient>
        {ingredient.weight ? (
          <WeightIngredient> вес {ingredient.weight} гр.</WeightIngredient>
        ) : null}
      </label>
    </Container>
  );
};

export default IngredientItem;
