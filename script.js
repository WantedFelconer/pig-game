'use strict';

let rollDiceNum = function () {
  return Math.trunc(Math.random() * 6) + 1;
};
let diceNum = 0;
let score = [0, 0];
let playerNo = 0;
let currentScore = 0;

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceImg = document.querySelector('.dice');
document.getElementById(`score--0`).textContent = 0;
document.getElementById(`score--1`).textContent = 0;

let switchPlayer = function () {
  playerNo = 1 - playerNo;
};

let isWin = function () {};

let newGame = function () {
  let diceNum = 0;
  let score = [0, 0];
  let playerNo = 0;
  let currentScore = 0;
  document.getElementById(`current--${0}`).textContent = currentScore;
  document.getElementById(`current--${1}`).textContent = currentScore;
  document.getElementById(`score--${0}`).textContent = score[0];
  document.getElementById(`score--${1}`).textContent = score[1];
};

btnRoll.addEventListener('click', function () {
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

btnHold.addEventListener('click', function () {
  score[playerNo] += currentScore;
  document.getElementById(`score--${playerNo}`).textContent = score[playerNo];
  currentScore = 0;
  document.getElementById(`current--${playerNo}`).textContent = currentScore;
  if (score[playerNo] >= 100) {
    prompt(`Player ${playerNo} won the game`);
    newGame();
    return;
  }
  switchPlayer();
});
