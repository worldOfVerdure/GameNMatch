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
    //const optgroupSelection = event.target.selectedOptions[0].parentNode.label;
    const optgroupSelection = event.target.selectedOptions[0].closest("optgroup").label;
    alert(optgroupSelection);
  }
}
/*
> Is the selectEl assigned the select element due to bubbling? The target was an option element, and the select element had the eventListener.

No, the target is the `select` element. It is the `select` element that changed, not the `option` element. 

> Specifically, the ".label". Are we accessing the attribute with the dot operator because it is a property of the optgroup element object? We don't need the getAttribute method? 

You can access label using both options.
*/

// ToQuery: Is it that I changed the select element by clicking the option element?
