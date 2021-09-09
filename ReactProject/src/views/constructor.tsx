import React, { useState } from "react";

import { ApolloError } from "@apollo/client";
import {
  GetIngredientsByGroupsQuery,
  Ingredient,
  Maybe,
} from "../graphql/types";

import styled from "styled-components";
import { IngredientModel } from "../models/ingredient";
import GroupsIngredients from "./groups-ingredients";
import PizzaInfo from "./pizza-info";
import PizzaImage from "./pizza-image";

export type Props = {
  loading: boolean;
  error: Maybe<ApolloError>;
  data: Maybe<GetIngredientsByGroupsQuery>;
};

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  display: relative;
`;

const Header = styled.h1`
  display: relative;
  text-align: center;
`;

const LeftSide = styled.div`
  flex-shrink: 0.3;
  width: 300px;
`;

const Center = styled.div`
  margin-top: 50px;
  flex-shrink: 0.4;
`;

const RigthSide = styled.div`
  flex-shrink: 0.3;
  width: 300px;
`;

const Constructor: React.FC<Props> = ({ loading, error, data }) => {
  const groupsIngredients = data?.getIngredientsByGroups || [];

  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientModel[]
  >([]);

  const onIngredientChange = (ingredient: Ingredient, isChecked: boolean) => {
    const newSelectedIngredients: IngredientModel[] = [];

    selectedIngredients.forEach((i) => {
      if (isChecked || (!isChecked && i.id !== ingredient.id)) {
        newSelectedIngredients.push(i);
      }
    });
    console.log(isChecked);
    if (isChecked) {
      if (
        isChecked &&
        !newSelectedIngredients.find((x) => x.id === ingredient.id)
      ) {
        const model: IngredientModel = {
          id: ingredient.id,
          image: ingredient.image,
          nameIngredient: ingredient.nameIngredient,
          price: ingredient.price,
          weight: ingredient.weight || 0,
          count: 1,
          maxCount: ingredient.maxCount || 1,
        };

        newSelectedIngredients.push(model);
      }
    }
    setSelectedIngredients(newSelectedIngredients);
  };

  return (
    <Main>
      <Header>КОНСТРУКТОР ПИЦЦЫ</Header>
      <Body>
        <LeftSide>
          <GroupsIngredients
            groupIngredients={groupsIngredients}
            onIngredientChange={onIngredientChange}
          />
        </LeftSide>
        <Center>
          <PizzaImage selectedIngredients={selectedIngredients} />
        </Center>
        <RigthSide>
          <PizzaInfo selectedIngredients={selectedIngredients} />
        </RigthSide>
      </Body>
    </Main>
  );
};

export default Constructor;
