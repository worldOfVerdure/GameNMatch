import { setGame } from "./gameCreation.mjs";
import { TimerData } from "./dataObjects.mjs";

export const mainElement = document.querySelector("main");
const selectEle = document.querySelector("select");
export const attemptsDiv = document.getElementsByClassName("statsDisplay")[0];
export const resetButton = document.querySelector("#resetBtn");

export const timerDataObj = new TimerData();
export const timerComponents = document.getElementsByClassName("timerComponent");

selectEle.addEventListener("change", event => {
  setGame(event, mainElement);
});
