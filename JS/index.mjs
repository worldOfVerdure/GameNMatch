import { setGame } from "./gameCreation.mjs";
import { TimerData } from "./dataObjects.mjs";

const selectEle = document.querySelector("select");
export const attemptsDiv = document.getElementsByClassName("statsDisplay")[0];
export const mainElement = document.querySelector("main");
export const resetButton = document.querySelector("#resetBtn");
export const timerComponents = document.getElementsByClassName("timerComponent");
export const timerDataObj = new TimerData();

selectEle.addEventListener("change", event => {
  setGame(event, mainElement);
});
