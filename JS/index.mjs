import {setGame} from "./gameCreation.mjs";

const mainElement = document.querySelector("main");
const selectEle = document.querySelector("select");
//const resetButton = document.querySelector("#resetBtn");
const gameData = {
  numOfTiles: 0,
  attempts: 0,
  firstCard: null,
  secondCard: null,
};

const timerObj = {
  minutes: 0,
  seconds: 0,
  miliseconds: 0,
  intervalID: 0,
};
// finish your resest button.

selectEle.addEventListener("change", event => {
  setGame(event, mainElement, gameData, timerObj);
});
