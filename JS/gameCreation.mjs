function clearGame (mainElement, gameData, timerObj) {
  while(mainElement.firstChild)
    mainElement.removeChild(mainElement.firstChild);
  
  for (const gameProperty in gameData) {
    gameData[gameProperty] = 0;
  }

  clearInterval(timerObj.intervalID);
  for (const timerProperty in timerObj) {
    timerObj[timerProperty] = 0;
  }
}

function runGame(mainElement, gameData, timerObj, chosenOptgroup, chosenOption) {
  // Create div elements to be appended to main
  const gridFragment = new DocumentFragment();
  for (let i = 0; i < gameData.numOfTiles; ++i) {
    const gridCellDiv = document.createElement("div");
    // zzz Need to make grid relative, its children are absolute. Backcard should have a greater z
    // index, shouldn't be problem with images not being opaque.
    // When rotated with animation, new image on top will be the new face. You got this! Soon you
    // will be a programmer. Neverr give up.
    const backcardImg = document.createElement("img");

    gridFragment.append(gridCellDiv);
  }
  mainElement.append(gridFragment);
  timerObj.intervalID = setInterval(timer(), 1);
}

export function setGame(event, mainElement, gameData, timerObj) {
  if(mainElement.hasChildNodes())
    clearGame(mainElement, gameData, timerObj);

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  if ((vw <= 600) || (vh <= 700))
    gameData.numOfTiles = 16;

  else if ((vw > 600 && vw <= 1000) && (vh > 700 && vh <= 1000))
    gameData.numOfTiles = 24;

  else if ((vw > 1000) || (vh > 1000))
    gameData.numOfTiles = 30;

  else
    gameData.numOfTiles = undefined;

  if (gameData.numOfTiles !== undefined) {
    const optgroupSelection = event.target.selectedOptions[0].closest("optgroup").label;
    const selectOption = event.target.selectedOptions[0];
    const theBody = document.querySelector("body");
    const pElements = document.querySelectorAll("p");
    // Select colors 
    switch (optgroupSelection) {
      case "Fauna":
        theBody.style.background = "conic-gradient(at 50% -3%, #382417 90deg, #2d634c, #B19470 270deg)";
        pElements.forEach(e => {e.style.color = "#F8FAE5";});
        break;
      case "Flora":
        theBody.style.background = "conic-gradient(at 50% -3%, #2da5ad 120deg, #169761, #463594 240deg)";
        pElements.forEach(e => {e.style.color = "#F8FF95"});
        break;
      case "Fungi":
        theBody.style.background = "conic-gradient(at 50% -1%, #35858B, #072227, #AEFEFF";
        pElements.forEach(e => {e.style.color = "#78e6e2"});
        break;
      default:
        console.log("The appropriate optgroup was not chosen.");
        alert("Try refreshing the webpage.");

      theBody.style.backgroundRepeat = "no-repeat";
    }

    runGame(mainElement, gameData, timerObj, optgroupSelection, selectOption);
  }
}
/*
> Is the selectEl assigned the select element due to bubbling? The target was an option element, and the select element had the eventListener.

No, the target is the `select` element. It is the `select` element that changed, not the `option` element. 

> Specifically, the ".label". Are we accessing the attribute with the dot operator because it is a property of the optgroup element object? We don't need the getAttribute method? 

You can access label using both options.
*/

// ToQuery: Is it that I changed the select element by clicking the option element?
