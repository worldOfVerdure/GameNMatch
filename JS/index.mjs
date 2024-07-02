import {setGame} from "./gameCreation.mjs";

const mainElement = document.querySelector("main");
const selectEle = document.querySelector("select");
let gameData;
//const resetButton = document.querySelector("#resetBtn");

// finish your resest button.

selectEle.addEventListener("change", event => {
  setGame(event, mainElement, gameData);
});
