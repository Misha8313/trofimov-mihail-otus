var message = document.getElementById("message");
var restart = document.getElementById("restart");
var win_x = document.getElementById("win_x");
var win_0 = document.getElementById("win_0");
var win_draw = document.getElementById("win_draw");
var cells = document.getElementsByClassName("cell");
var player = "x";
var paused = false;
var data = []; //Здесь будут храниться отмеченые ячейки
var win = { x: 0, 0: 0, draw: 0 };
var stepCount = 0;
var winIndex = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
for (var i = 0; i < cells.length; i++) {
  addEvent(cells[i]);
}
restart.addEventListener("click", gameRestart);
function addEvent(cell) {
  cell.addEventListener("click", step);
  function step() {
    if (!cell.innerHTML && !paused) {
      cell.innerHTML = player;
      var id = cell.getAttribute("data-id");
      data[id] = player;
      stepCount++;
      if (checkWin()) {
        message.innerHTML = "Выиграл: " + player;
        win[player]++;
        stepCount = 0;
        paused = true;
      } else {
        changePlayer();
      }
      if (stepCount >= 9) {
        win.draw++;
        stepCount = 0;
        message.innerHTML = "Ничья";
      }
      updateStatistics();
    }
  }
}
function checkWin() {
  for (var i = 0; i < winIndex.length; i++) {
    var id = winIndex[i];
    var check =
      data[id[0]] && data[id[0]] == data[id[1]] && data[id[1]] == data[id[2]];
    if (check) {
      return true;
    }
  }
  return false;
}
function changePlayer() {
  if (player === "x") {
    player = "0";
  } else {
    player = "x";
  }
  message.innerHTML = "Ходит: " + player;
}
function clear() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}
function gameRestart() {
  clear();
  changePlayer();
  data = [];
  paused = false;
}
function updateStatistics() {
  win_x.innerHTML = win.x;
  win_0.innerHTML = win["0"];
  win_draw.innerHTML = win.draw;
}
