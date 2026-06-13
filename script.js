'use strict';

let rollDiceNum = function () {
  return Math.trunc(Math.random() * 6) + 1;
};
let diceNum = 0;
let score = [0, 0];
let playerNo = 0;
let currentScore = 0;
let gameStart = false;
let gameWin = false;
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceImg = document.querySelector('.dice');
document.getElementById(`score--0`).textContent = 0;
document.getElementById(`score--1`).textContent = 0;
// document.getElementById('popup').classList.add('hidden');

if (gameStart == false) {
  diceImg.classList.add('hidden');
}

let switchPlayer = function () {
  document
    .querySelector(`.player--${playerNo}`)
    .classList.remove('player--active');
  playerNo = 1 - playerNo;
  document
    .querySelector(`.player--${playerNo}`)
    .classList.add('player--active');
};

btnNew.addEventListener('click', function () {
  newGame();
});

// roll dice button functionality
btnRoll.addEventListener('click', function () {
  if (gameWin == true) {
    return;
  }
  if (gameStart == false) {
    diceImg.classList.remove('hidden');
    gameStart = true;
  }
  diceNum = rollDiceNum();
  diceImg.src = `dice-${diceNum}.png`;
  if (diceNum == 1) {
    currentScore = 0;
    document.getElementById(`current--${playerNo}`).textContent = currentScore;
    switchPlayer();
    return;
  }
  currentScore += diceNum;
  document.getElementById(`current--${playerNo}`).textContent = currentScore;
});

// hold button functionality
btnHold.addEventListener('click', function () {
  if (
    document
      .querySelector(`.player--${playerNo}`)
      .classList.contains('player--winner')
  ) {
    return;
  }
  score[playerNo] += currentScore;
  document.getElementById(`score--${playerNo}`).textContent = score[playerNo];
  currentScore = 0;
  document.getElementById(`current--${playerNo}`).textContent = currentScore;
  if (score[playerNo] >= 100) {
    document
      .querySelector(`.player--${playerNo}`)
      .classList.add('player--winner');
    gameWin = true;
    document.getElementById('winnerMessage').textContent =
      `Player ${playerNo + 1} Wins (^_^)`;
    document.getElementById('overlay').classList.remove('hidden');
    return;
  }
  switchPlayer();
});

// new game button funcrtionality
let newGame = function () {
  document.getElementById('overlay').classList.add('hidden');
  document
    .querySelector(`.player--${playerNo}`)
    .classList.remove('player--winner');
  if (playerNo != 0) {
    switchPlayer();
  }
  gameWin = false;
  diceNum = 0;
  score = [0, 0];
  playerNo = 0;
  currentScore = 0;
  gameStart = false;
  document.getElementById(`current--${0}`).textContent = currentScore;
  document.getElementById(`current--${1}`).textContent = currentScore;
  document.getElementById(`score--${0}`).textContent = score[0];
  document.getElementById(`score--${1}`).textContent = score[1];
};

// overlay button functionality
document.getElementById('overlay').addEventListener('click', function (e) {
  // Only close if the click is directly on the overlay, not inside the popup box
  if (e.target.id === 'overlay') {
    document.getElementById('overlay').classList.add('hidden');
  }
});
