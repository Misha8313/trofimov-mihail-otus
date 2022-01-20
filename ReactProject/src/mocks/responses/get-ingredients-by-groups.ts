import { GetIngredientsByGroupsQuery } from "../../graphql/types";

// eslint-disable-next-line import/no-anonymous-default-export
const ingredientsByGroupsQuery: GetIngredientsByGroupsQuery = {
  getIngredientsByGroups: [
    {
      __typename: "GroupIngredients",
      id: 1,
      nameGroup: "Группа1",
      image: "bases.png",
      typeCheckBox: 1,
      ingredients: [
        {
          __typename: "Ingredient",
          id: 1,
          image: "base1.png",
          nameIngredient: "Ингредиент1",
          weight: 20,
          price: 20,
          maxCount: 3,
        },
      ],
    },
    {
      __typename: "GroupIngredients",
      id: 2,
      nameGroup: "Группа2",
      image: "sauces.png",
      typeCheckBox: 1,
      ingredients: [
        {
          __typename: "Ingredient",
          id: 2,
          image: "1000_sous1.png",
          nameIngredient: "Ингредиент2",
          weight: 10,
          price: 20,
          maxCount: 3,
        },
      ],
    },
    {
      __typename: "GroupIngredients",
      id: 3,
      nameGroup: "Группа3",
      image: "sauces.png",
      typeCheckBox: 1,
      ingredients: [
        {
          __typename: "Ingredient",
          id: 3,
          image: "1000_sous1.png",
          nameIngredient: "Ингредиент3",
          weight: 40,
          price: 20,
          maxCount: 3,
        },
      ],
    },
  ],
};

export default ingredientsByGroupsQuery;
