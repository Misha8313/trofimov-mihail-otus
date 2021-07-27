const changePlayerTest = require("./changePlayer.ts");

test("test changePlayer functions", () => {
  const message: HTMLElement = document.createElement("p");
  message.innerHTML = "";

  const expectedMessage: HTMLElement = document.createElement("p");
  expectedMessage.innerHTML = "Ходит: O";
  const result = changePlayerTest("X", message);

  expect(result).toEqual("O");

  expect(expectedMessage).toEqual(message);
});
