'use strict';

let rollDice = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let diceImg = document.querySelector('.dice');
let p1CurrentScore = document.getElementById('current--0');
let p2CurrentScore = document.getElementById('current--1');

let diceNum = 0;
let score = [0, 0];
let playerNo = 0;

let switchPlayer = function () {
  playerNo = 1 - playerNo;
};

btnRoll.addEventListener('click', function () {
  diceNum = rollDice();
  score[playerNo] += diceNum;
  console.log(score[playerNo]);
  diceImg.src = `dice-${diceNum}.png`;
  p1CurrentScore.textContent = diceNum;
});
