export function setGame(event) {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  let numOfTiles;
  
  if ((vw <= 600) || (vh <= 700))
    numOfTiles = 14;

  else if ((vw > 600 && vw <= 1000) || (vh > 700 && vh <= 1000))
    numOfTiles = 22;

  else if ((vw > 1000) || (vh > 1000))
    numOfTiles = 34;

  else
    numOfTiles = undefined;

  if (numOfTiles !== undefined) {
    const optgroupSelection = event.target.parentElement.tagName;
    alert(optgroupSelection);
  }
}

// export function setGame(event) {
//   const optgroupSelection = event.target.parentElement; // get the optgroup element
//   alert(optgroupSelection.label); // show the optgroup label
//   // do something with the optgroup element, such as changing its style
//   optgroupSelection.style.backgroundColor = "yellow";
// }
