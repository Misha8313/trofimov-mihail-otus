import React from "react";

import { Ingredient } from "../graphql/types";
import IngredientItem from "./ingredient-item";

export type Props = {
  ingredients: readonly Ingredient[];
  onIngredientChange: (item: Ingredient, isCheked: boolean) => void; 
};

const Ingredients: React.FC<Props> = ({ ingredients, onIngredientChange }) => {
  return (
    <div>
      {ingredients?.map((ingredient) => (
        <IngredientItem
          key={ingredient.id}
          ingredient={ingredient}
          onIngredientChange={onIngredientChange}
        ></IngredientItem>
      ))}
    </div>
  );
};

export default Ingredients;
