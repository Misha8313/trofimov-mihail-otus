import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Модель представляет информацию о группе ингредиентов */
export type GroupIngredients = {
  readonly __typename?: "GroupIngredients";
  /** ID группы */
  readonly id: Scalars["Int"];
  /** Название группы */
  readonly nameGroup: Scalars["String"];
  /** Изображение группы */
  readonly image: Scalars["String"];
  /** Список ингредиентов в группе */
  readonly ingredients?: Maybe<ReadonlyArray<Ingredient>>;
  /** Тип чекбокса */
  readonly typeCheckBox?: Maybe<Scalars["Int"]>;
};

/** Модель представляет ингредиент для пиццы */
export type Ingredient = {
  readonly __typename?: "Ingredient";
  /** Ид ингредиента */
  readonly id: Scalars["Int"];
  /** Название ингредиента */
  readonly nameIngredient: Scalars["String"];
  /** Изображение ингредиента */
  readonly image: Scalars["String"];
  /** Вес ингредиента */
  readonly weight?: Maybe<Scalars["Int"]>;
  /** Стоимость ингредиента */
  readonly price: Scalars["Int"];
  /** Максимальное количество порций на пицце */
  readonly maxCount?: Maybe<Scalars["Int"]>;
};

/** Схема запроса ингредиентов для пиццы */
export type IngredientsSchema = {
  readonly __typename?: "IngredientsSchema";
  /** Список ингредиентов */
  readonly getIngredientsByGroups?: Maybe<ReadonlyArray<GroupIngredients>>;
};

export type GetIngredientsByGroupsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetIngredientsByGroupsQuery = {
  readonly __typename?: "IngredientsSchema";
  readonly getIngredientsByGroups?: Maybe<
    ReadonlyArray<{
      readonly __typename?: "GroupIngredients";
      readonly id: number;
      readonly nameGroup: string;
      readonly image: string;
      readonly typeCheckBox?: Maybe<number>;
      readonly ingredients?: Maybe<
        ReadonlyArray<{
          readonly __typename?: "Ingredient";
          readonly id: number;
          readonly image: string;
          readonly nameIngredient: string;
          readonly weight?: Maybe<number>;
          readonly price: number;
          readonly maxCount?: Maybe<number>;
        }>
      >;
    }>
  >;
};

export const GetIngredientsByGroupsDocument = gql`
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

/**
 * __useGetIngredientsByGroupsQuery__
 *
 * To run a query within a React component, call `useGetIngredientsByGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIngredientsByGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIngredientsByGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetIngredientsByGroupsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetIngredientsByGroupsQuery,
    GetIngredientsByGroupsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetIngredientsByGroupsQuery,
    GetIngredientsByGroupsQueryVariables
  >(GetIngredientsByGroupsDocument, options);
}
export function useGetIngredientsByGroupsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetIngredientsByGroupsQuery,
    GetIngredientsByGroupsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetIngredientsByGroupsQuery,
    GetIngredientsByGroupsQueryVariables
  >(GetIngredientsByGroupsDocument, options);
}
export type GetIngredientsByGroupsQueryHookResult = ReturnType<
  typeof useGetIngredientsByGroupsQuery
>;
export type GetIngredientsByGroupsLazyQueryHookResult = ReturnType<
  typeof useGetIngredientsByGroupsLazyQuery
>;
export type GetIngredientsByGroupsQueryResult = Apollo.QueryResult<
  GetIngredientsByGroupsQuery,
  GetIngredientsByGroupsQueryVariables
>;
