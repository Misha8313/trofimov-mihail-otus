import { gql } from "@apollo/client";

const GET_INGREDIENTS_BY_GROUP = gql`
  query GetIngredientsByGroups {
    getIngredientsByGroups {
      id
      nameGroup
      image
      typeCheckBox
      ingredients {
        id
        image
        nameIngredient
        weight
        price
        maxCount
      }
    }
  }
`;

export default GET_INGREDIENTS_BY_GROUP;
