const GroupsIngredients = require("./data/groupsIngredients");
const Ingredients = require("./data/ingredients");

let {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const IngredientType = new GraphQLObjectType({
  name: "Ingredient",
  description: "Модель представляет ингредиент для пиццы",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: "Ид ингредиента",
    },
    nameIngredient: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Название ингредиента",
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Изображение ингредиента",
    },
    weight: { type: GraphQLInt, description: "Вес ингредиента" },
    price: {
      type: GraphQLNonNull(GraphQLInt),
      description: "Стоимость ингредиента",
    },
    maxCount: {
      type: GraphQLInt,
      description: "Максимальное количество порций на пицце",
    },
  }),
});

const GroupIngredientsType = new GraphQLObjectType({
  name: "GroupIngredients",
  description: "Модель представляет информацию о группе ингредиентов",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt), description: "ID группы" },
    nameGroup: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Название группы",
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
      description: "Изображение группы",
    },
    ingredients: {
      type: GraphQLList(GraphQLNonNull(IngredientType)),
      description: "Список ингредиентов в группе",
    },
    typeCheckBox: {
      type: GraphQLInt,
      description: "Тип чекбокса",
    },
  }),
});

const ShopQueryRootType = new GraphQLObjectType({
  name: "IngredientsSchema",
  description: "Схема запроса ингредиентов для пиццы",
  fields: () => ({
    getIngredientsByGroups: {
      type: GraphQLList(GraphQLNonNull(GroupIngredientsType)),
      description: "Список ингредиентов",
      resolve: function () {
        return GroupsIngredients.map((x) => getGroupIngredients(x));
      },
    },
  }),
});

function getGroupIngredients(gi) {
  const groupIngredientsType = {
    id: gi.id,
    nameGroup: gi.name,
    image: gi.image,
    typeCheckBox: gi.typeCheckBox,
    ingredients: Ingredients.map((x) => getIngredients(x)).filter(
      (x) => x.group_id === gi.id
    ),
  };
  return groupIngredientsType;
}

function getIngredients(i) {
  const groupIngredientsType = {
    id: i.id,
    group_id: i.group_id,
    nameIngredient: i.name,
    image: i.image,
    price: i.price,
    weight: i.weight,
    maxCount: i.maxCount,
  };
  return groupIngredientsType;
}

const ShopAppSchema = new GraphQLSchema({
  query: ShopQueryRootType,
});

module.exports = ShopAppSchema;
