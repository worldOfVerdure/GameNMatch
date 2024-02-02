export function setGame() {
  let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const myMain = document.querySelector("main");
  myMain.innerText = `The vw is ${vw} and the vh is ${vh}`;
}
