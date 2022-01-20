import React from "react";
import styled from "styled-components";

import { Ingredient } from "../graphql/types";

const Container = styled.div`
  position: relative;
  width: 500px;
`;

const PizzaImageContainer = styled.div`
  position: absolute;
  width: 500px;
`;

export type Props = {
  selectedIngredients: Ingredient[];
};

const PizzaImage: React.FC<Props> = ({ selectedIngredients }) => {
  return (
    <Container>
      {selectedIngredients
        .sort((x1, x2) => {
          return x1.id - x2.id;
        })
        .map((ingredient) => (
          <PizzaImageContainer key={ingredient.id}>
            <img src={`/images/ingredients/${ingredient.image}`} />
          </PizzaImageContainer>
        ))}
    </Container>
  );
};

export default PizzaImage;
