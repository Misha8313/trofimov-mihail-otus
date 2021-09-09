import React from "react";
import { GroupIngredients, Ingredient } from "../graphql/types";
import GroupItem from "./group-item";

export type Props = {
  groupIngredients: readonly GroupIngredients[];
  onIngredientChange: (item: Ingredient, isCheked: boolean) => void;
};

const GroupsIngredients: React.FC<Props> = ({
  groupIngredients,
  onIngredientChange,
}) => {
  return (
    <div>
      {groupIngredients.map((group) => (
        <div key={group.id}>
          <GroupItem
            onIngredientChange={onIngredientChange}
            groupIngredient={group}
          />
        </div>
      ))}
    </div>
  );
};

export default GroupsIngredients;
