import {gameData, timerData, animalImages} from "./dataObjects.mjs";
import {randomizeImages, addBackground} from "./imageUtilityFunctions.mjs";

function clearGame (mainElement) {
  while(mainElement.firstChild)
    mainElement.removeChild(mainElement.firstChild);

  gameData.numOfTiles = 0;
  gameData.attempts = 0;
  gameData.firstCard = null;
  gameData.secondCard = null;

  // clearInterval(timerData.intervalID);
  // for (const timerProperty in timerData) {
  //   timerData[timerProperty] = 0;
  // }
}

function flipCard(event) {
  event.currentTarget.classList.toggle("isRotated");
}

function createCards(mainElement, imageNamesArray, chosenOptgroup, chosenOption) {
  const gridFragment = new DocumentFragment();
  
  for (let i = 0; i < gameData.numOfTiles; ++i) {
    const scene = document.createElement("div"); //Has Perspective
    const card = document.createElement("div"); //Gets flipped
    const cardBack = document.createElement("div"); //Back of card
    const cardFront = document.createElement("div"); //Front of card
    //TODO: Change card flip function so that the eventlistener of the event.currentTarget is
    //TODO: temporarily disabled. The function that is called will handle the attempt. Have an
    //TODO: if-else that checks if 0, 1, or 2 cards have been flipped.
    
    //*gameData object to record number of cards clicked, determines if more may be flipped
    card.addEventListener("click", event => {
      flipCard(event);
    });

    card.append(cardFront);
    card.append(cardBack);
    scene.append(card);
    scene.classList.add("scene");
    card.classList.add("card");

    switch (chosenOptgroup) {
      case "Fauna":
        cardBack.classList.add("back", "backFauna");
        break;
      case "Flora":
        cardBack.classList.add("back", "backFlora");
        break;
      case "Fungi":
        cardBack.classList.add("back", "backFungi");
        break;
      default:
        console.log("The appropriate optgroup was not chosen.");
        alert("Try refreshing the webpage.");
    }
    
    cardFront.classList.add("front");
    cardFront.style.background = addBackground(imageNamesArray, i, chosenOptgroup, chosenOption);
    
    gridFragment.append(scene);
  }
  mainElement.append(gridFragment);
  //timerData.intervalID = setInterval(timer(), 1);
}

export function setGame(event, mainElement) {
  //Everytime we enter setGame, check if we need to clear the board.
  if(mainElement.hasChildNodes())
    clearGame(mainElement, gameData, timerData);

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  
  if ((vw <= 600) || (vh <= 700))
    gameData.numOfTiles = 16;

  else if (vw > 600 && vw <= 1000)
    gameData.numOfTiles = 24;

  else if (vw > 1000)
    gameData.numOfTiles = 30;

  else
    gameData.numOfTiles = undefined;

  if (gameData.numOfTiles !== undefined) {
    const optgroupSelection = event.target.selectedOptions[0].closest("optgroup").label;
    const selectOption = event.target.selectedOptions[0].innerHTML;
    const theBody = document.querySelector("body");
    const pElements = document.querySelectorAll("p");
    // Select colors 
    theBody.className = ""; //Reset classes
    pElements.forEach(p => {p.className = ""});
    switch (optgroupSelection) {
      case "Fauna":
        theBody.classList.add("faunaGradient");
        pElements.forEach(p => {p.classList.add("faunaColor")});
        break;
      case "Flora":
        theBody.classList.add("floraGradient");
        pElements.forEach(p => {p.classList.add("floraColor")});
        break;
      case "Fungi":
        theBody.classList.add("fungiGradient");
        pElements.forEach(p => {p.classList.add("fungiColor")});
        break;
      default:
        console.log("The appropriate optgroup was not chosen.");
        alert("Try refreshing the webpage.");
    }
    // Generate random order for front card images
    const imageNamesArray = randomizeImages(gameData.numOfTiles, optgroupSelection, selectOption);

    createCards(mainElement, imageNamesArray, optgroupSelection, selectOption);
  }
}
