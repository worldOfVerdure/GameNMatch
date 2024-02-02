import {setGame} from "./gameCreation.js";

let selectEle = document.querySelector("select");

selectEle.addEventListener("change", event => {
  setGame(event);
});
