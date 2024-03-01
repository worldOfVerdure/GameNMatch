import {setGame} from "./gameCreation.js";

function main () {
  const mainElement = document.querySelector("main");
  const selectEle = document.querySelector("select");
  const resetButton = document.querySelector("#resetBtn");
  const gameData = {
    numOfTiles: 0,
    attempts: 0,
  };
  // finish your sest button.

  selectEle.addEventListener("change", event => {
    setGame(event, mainElement, gameData);
  });
}

main();
