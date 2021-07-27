const changePlayer = (player: string, message: Element): string => {
  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }
  if (message != null) message.innerHTML = "Ходит: " + player;
  return player;
};

module.exports = changePlayer;
