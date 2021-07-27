const changePlayer = require("./changePlayer");
const message: HTMLElement | null = document.getElementById("message");
const restart: HTMLElement | null = document.getElementById("restart");
const win_x: HTMLElement | null = document.getElementById("win_x");
const win_0: HTMLElement | null = document.getElementById("win_0");
const win_draw: HTMLElement | null = document.getElementById("win_draw");
const cells: HTMLCollectionOf<Element> =
  document.getElementsByClassName("cell");
let player: string = "X";
let paused: boolean = false;
let data: string[] = []; //Здесь будут хратися отмеченые ячейки
const win: WinType = { X: 0, O: 0, draw: 0 };
let stepCount: number = 0;
const winIndex: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export type WinType = {
  X: number;
  O: number;
  draw: number;
};

for (let i: number = 0; i < cells.length; i++) {
  addEvent(cells[i]);
}

if (restart !== null) {
  restart.addEventListener("click", gameRestart);
}
function addEvent(cell: Element): void {
  cell.addEventListener("click", step);
  function step() {
    if (!cell.innerHTML && !paused) {
      cell.innerHTML = player;
      const id: number = Number(cell.getAttribute("data-id"));
      data[id] = player;
      stepCount++;
      if (checkWin()) {
        if (message !== null) {
          message.innerHTML = "Выиграл: " + player;
        }
        switch (player) {
          case "X":
            win.X++;
            break;
          case "O":
            win.X++;
            break;
          default:
            win.draw++;
        }
        stepCount = 0;
        paused = true;
      } else {
        player = changePlayer(player, message);
      }
      if (stepCount >= 9) {
        win.draw++;
        stepCount = 0;
        if (message != null) message.innerHTML = "Ничья";
      }
      updateStatistics();
    }
  }
}
function checkWin(): boolean {
  for (let i: number = 0; i < winIndex.length; i++) {
    var id = winIndex[i];
    var check =
      data[id[0]] && data[id[0]] === data[id[1]] && data[id[1]] === data[id[2]];
    if (check) {
      return true;
    }
  }
  return false;
}
function clear(): void {
  for (let i: number = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}
function gameRestart(): void {
  clear();
  changePlayer(player, message);
  data = [];
  paused = false;
}
function updateStatistics(): void {
  if (win_x !== null) win_x.innerHTML = win.X.toString();

  if (win_0 !== null) win_0.innerHTML = win.O.toString();

  if (win_draw !== null) win_draw.innerHTML = win.draw.toString();
}
