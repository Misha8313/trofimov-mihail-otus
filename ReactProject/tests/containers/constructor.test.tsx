import React from "react";

import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../render";
import { setupServer } from "msw/node";

import { getIngredientsByGroups as getIngredientsByGroupsHanlder } from "../../src/mocks/handlers";
import getIngredientsByGroups from "../../src/mocks/responses/get-ingredients-by-groups";
import Constructor from "../../src/containers/constructor";
import { App } from "../../src/app";

const server = setupServer(getIngredientsByGroupsHanlder);

const getIngredientsByGroupByMock =
  getIngredientsByGroups?.getIngredientsByGroups;

describe("constructor test", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers);
  afterAll(() => server.close());

  test("load", async () => {
    render(<Constructor />);
    await waitFor(() => screen.getByText("Группа3"));

    console.log(
      "getIngredientsByGroupByMock count =" +
        getIngredientsByGroupByMock?.length
    );

    const groupItems = screen.getAllByTestId("groupItem");
    expect(groupItems.length).toEqual(getIngredientsByGroupByMock?.length);

    groupItems.forEach((groupItem) => {
      console.log(groupItem.innerHTML);
      fireEvent.click(screen.getByText(groupItem.innerHTML));
    });

    await waitFor(() => screen.getByText("Ингредиент3"));

    const ingredients = screen.getAllByTestId("ingredientsItem");

    expect(ingredients.length).toEqual(3);

    ingredients.forEach((ingredient) => {
      fireEvent.click(ingredient);
    });

    await waitFor(() => screen.getByTestId("resultItem"));

    const result = screen.getByTestId("resultItem");

    expect(result.innerHTML).toEqual("Вес: 70 гр.");
  });
});
