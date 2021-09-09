import { graphql } from "msw";
import {
  GetIngredientsByGroupsQuery,
  GetIngredientsByGroupsQueryVariables,
} from "../graphql/types";
import getIngredientsByGroupsResponse from "./responses/get-ingredients-by-groups";

const link = graphql.link("http://localhost:4000/graphql");

/*export const getIngredientsByGroups = link.query<
  IngredientsByGroupsQuery,
  IngredientsByGroupsQueryVariables
>("getIngredientsByGroups", (request, result, context) =>
  result(context.data(getIngredientsByGroupsResponse))
);*/

export const getIngredientsByGroups = graphql.query<
  GetIngredientsByGroupsQuery,
  GetIngredientsByGroupsQueryVariables
>("GetIngredientsByGroups", (request, result, context) =>
  result(context.data(getIngredientsByGroupsResponse))
);

// eslint-disable-next-line import/no-anonymous-default-export
export default [getIngredientsByGroups];
