let isDraw = false;
let isCross = true;
const gameField = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

document.addEventListener('DOMContentLoaded', () => {
  for (const cell of document.getElementsByClassName('cell')) {
    cell.addEventListener('click', cellClicked);
  }
});

function cellClicked(e) {
  const cell = e.currentTarget;
  const row = cell.id[0];
  const col = cell.id[1];

  if (gameField[row][col] !== 0) {
    return;
  }

  gameField[row][col] = isCross ? 1 : 2;
  drawSign(isCross, cell);
  isCross = !isCross;

  if (isGameFinished()) {
    let message;
    if (isDraw) {
      message = 'Cat\'s game!';
    } else if (isCross) {
      message = 'O has won!';
    } else {
      message = 'X has won';
    }
    setTimeout(() => {
      alert(message);
      restartGame();
    }, 100);
  }
}

function drawSign(isCross, cell) {
  const sign = cell.appendChild(document.createElement('div'));
  sign.classList.add('sign');
  sign.classList.add(isCross ? 'cross' : 'circle');
  sign.innerHTML = isCross ? '&#10060;' : '&#x25EF;';
  cell.appendChild(sign);
}

function isGameFinished() {
  const isWon =
      gameField[0][0] && gameField[0][0] === gameField[0][1] && gameField[0][1] === gameField[0][2] ||
      gameField[1][0] && gameField[1][0] === gameField[1][1] && gameField[1][1] === gameField[1][2] ||
      gameField[2][0] && gameField[2][0] === gameField[2][1] && gameField[2][1] === gameField[2][2] ||
      gameField[0][0] && gameField[0][0] === gameField[1][0] && gameField[1][0] === gameField[2][0] ||
      gameField[0][1] && gameField[0][1] === gameField[1][1] && gameField[1][1] === gameField[2][1] ||
      gameField[0][2] && gameField[0][2] === gameField[1][2] && gameField[1][2] === gameField[2][2] ||
      gameField[0][0] && gameField[0][0] === gameField[1][1] && gameField[1][1] === gameField[2][2] ||
      gameField[0][2] && gameField[0][2] === gameField[1][1] && gameField[1][1] === gameField[2][0];

  if (isWon) {
    return true;
  } else if (isGameFieldFilled()) {
    isDraw = true;
    return true;
  }
  return false;
}

function isGameFieldFilled() {
  for (const row of gameField) {
    for (const cell of row) {
      if (cell === 0) {
        return false;
      }
    }
  }
  return true;
}

function restartGame() {
  isDraw = false;
  isCross = true;
  for (let i = 0; i < gameField.length; i++) {
    gameField[i] = [0, 0, 0];
  }
  for (const cell of document.getElementsByClassName('cell')) {
    sign = cell.getElementsByClassName('sign')[0];
    if (sign) {
      sign.remove();
    }
  }
}
