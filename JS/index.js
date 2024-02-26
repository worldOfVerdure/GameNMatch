import {setGame} from "./gameCreation.js";

function main () {
  let selectEle = document.querySelector("select");

  selectEle.addEventListener("change", event => {
    setGame(event);
  });
}

main();
