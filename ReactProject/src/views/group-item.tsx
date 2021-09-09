import React, { useState } from "react";
import styled from "styled-components";
import { GroupIngredients, Ingredient } from "../graphql/types";
import Ingredients from "./ingredients";

export type Props = {
  groupIngredient: GroupIngredients;
  onIngredientChange: (item: Ingredient, isCheked: boolean) => void;
};

const Group = styled.span`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding-left: 7px;
`;

const Icon = styled.i`
  color: cornflowerblue;
  cursor: pointer;
  dispay: inline;
  width: 16px;
  height: 16px;
`;
const Container = styled.div`
  margin-top: 15px;
`;

const GroupItem: React.FC<Props> = ({
  groupIngredient,
  onIngredientChange,
}) => {
  const [isExpand, setExpand] = useState<Boolean>(false);

  const handleClick = () => {
    setExpand(!isExpand);
  };

  return (
    <Container>
      <Icon
        className={isExpand ? "bi-caret-up" : "bi-caret-down"}
        onClick={handleClick}
      ></Icon>
      <Group onClick={handleClick} data-testid="groupItem">
        {groupIngredient.nameGroup}
      </Group>
      {groupIngredient?.ingredients && isExpand && (
        <Ingredients
          ingredients={groupIngredient?.ingredients}
          onIngredientChange={onIngredientChange}
        ></Ingredients>
      )}
    </Container>
  );
};

export default GroupItem;
