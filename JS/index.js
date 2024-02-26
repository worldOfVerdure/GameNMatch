import {setGame} from "./gameCreation.js";

function main () {
  const selectEle = document.querySelector("select");
  const resetButton = document.querySelector("#resetBtn");
  

  selectEle.addEventListener("change", event => {
    setGame(event);
  });
}

main();
