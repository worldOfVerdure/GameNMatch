import {setGame} from "./gameCreation.js";

function main () {
  const mainElement = document.querySelector("main");
  const selectEle = document.querySelector("select");
  const resetButton = document.querySelector("#resetBtn");
  // finish your sest button.

  selectEle.addEventListener("change", event => {
    setGame(event, mainElement);
  });
}

main();
