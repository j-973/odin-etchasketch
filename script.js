//PAGE ELEMENTS
let wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
document.body.appendChild(wrapper);

let title = document.createElement('h1');
title.setAttribute('id', 'title');
wrapper.appendChild(title);
title.textContent = 'Etch-a-Sketch';

let buttonsContainer = document.createElement('div');
buttonsContainer.setAttribute('id', 'buttonsContainer');
wrapper.appendChild(buttonsContainer);

let btnEraser = document.createElement('button');
btnEraser.setAttribute('id', 'btnEraser');
buttonsContainer.appendChild(btnEraser);
btnEraser.textContent = 'Eraser';

let btnBlack = document.createElement('button');
btnBlack.setAttribute('id', 'btnBlack');
buttonsContainer.appendChild(btnBlack);
btnBlack.textContent = 'Black';

let btnShade = document.createElement('button');
btnShade.setAttribute('id', 'btnShade');
buttonsContainer.appendChild(btnShade);
btnShade.textContent = 'Shade';

let btnRainbow = document.createElement('button');
btnRainbow.setAttribute('id', 'btnRainbow');
buttonsContainer.appendChild(btnRainbow);
btnRainbow.textContent = 'Rainbow';

let btnClearGrid = document.createElement('button');
btnClearGrid.setAttribute('id', 'btnClearGrid');
buttonsContainer.appendChild(btnClearGrid);
btnClearGrid.textContent = 'Clear Grid';

let btnNewGrid = document.createElement('button');
btnNewGrid.setAttribute('id', 'btnNewGrid');
buttonsContainer.appendChild(btnNewGrid);
btnNewGrid.textContent = 'Change Grid Size';

//CHANGING COLORS
const STARTING_OPACITY = 0.1;
const FULL_OPACITY = 1.0;
const INCREMENT_OPACITY = 0.1;
currentColor = 'rainbow';

eraserSketch = () => currentColor = 'eraser'; 
blackSketch = () => currentColor = 'black'; 
rainbowSketch = () => currentColor = 'rainbow';
shadeSketch = () => currentColor = 'shade';

createGridContainer = () => {
  let gridContainer = document.createElement('div');
  gridContainer.setAttribute('id', 'gridContainer');
  wrapper.appendChild(gridContainer);
  gridContainer.addEventListener('contextmenu', toggleGridlines);
}
removeExistingGrid = () => {
  //removes the grid container div from the DOM, removing all its child divs/cells too
  if (wrapper.contains(gridContainer)) {
    gridContainer.remove(); 
  }
}
clearGrid = () => {
  let cells = document.getElementsByClassName('cell');
  for (c = 0; c < cells.length; c++) {
    cells[c].style.backgroundColor = "initial";
    cells[c].style.opacity = "initial";
  }
}
changeGridNum = (newGridNum) => {
  //if user input is blank, or is NaN = not a number, or is not between 1-100, give an alert. trim removes extra spaces from either side of user's input
    newGridNum = parseInt(prompt('How many squares per side for new grid? (enter one number between 1-100)', '_ x _?').trim());
    if (newGridNum === '' || isNaN(newGridNum) || newGridNum == "initial" || newGridNum < 1 || newGridNum > 100) {
      alert('Invalid! Please enter a single whole number between 1-100.');
    } else {
        removeExistingGrid();
        createGridContainer();
        createGrid(newGridNum);
        return newGridNum;
    }
}
createGrid = (gridNum) => {
  //for every r rows (divs), there are c created cells (divs) nested within each row
  for (r = 0; r < gridNum; r++) {
    row = document.createElement('div');
    row.setAttribute('class', 'row')
    document.getElementById('gridContainer').appendChild(row);
    for (c = 0; c < gridNum; c++) {
      cell = document.createElement('div');
      cell.classList.add('cell');
      cell.classList.add('border');
      cell.setAttribute('id', `cell-${r}-${c}`); //gives each cell a unique numerical id for color change tracking purposes
      document.getElementsByClassName('row')[r].appendChild(cell);
      cell.addEventListener('mouseenter', changeColor);
    }
  }
      return cell;
}

//toggles cell border class for each cell c in cells array on right-click. preventDefault() stops the right-click menu from showing up
toggleGridlines = (ev) => {
  ev.preventDefault();
  let cells = document.getElementsByClassName('cell');
  for (c = 0; c < cells.length; c++) {
    cells[c].classList.toggle('border');
  }
}

addOpacity = (ev) => {
  let opacity = ev.currentTarget.style.opacity;
  const OPACITY_LIMIT = (opacity >= FULL_OPACITY);
  if (opacity && (opacity < FULL_OPACITY)) {
    ev.currentTarget.style.opacity = Number(opacity) + INCREMENT_OPACITY;
} else if (OPACITY_LIMIT) {
    opacity = FULL_OPACITY;
} else {
    opacity = (ev.currentTarget.style.opacity = STARTING_OPACITY);
  }
}

//.random() method generates a floating point (i.e. has a decimal) value between 0 and 1. 256 represents the total number of color values that exist for R, G, and B, plus 1
//must multiply math.random() by 256 to include all 255 possibilities per color, since math.random() by itself always generates a number less than 1
//Math.floor returns an integer equivalent of the previously generated floating point value. 
getRandomColor = (randColor) => {
  randColor = Math.floor(Math.random()*256);
  return randColor
}
changeColor = (ev) => {
  //ev.currenttarget changes the cell's background color (since each cell has an event listener)
  let alpha = 1.0; 
  switch (currentColor) {
    case 'eraser':
      cellFillColor = ev.currentTarget.style.backgroundColor = "initial";
                      ev.currentTarget.style.opacity = "initial";
      break;
    case 'black':
      cellFillColor = ev.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1.0)';
                      ev.currentTarget.style.opacity = "initial";
      break;
    case 'shade':
      cellFillColor = ev.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1.0)'; 
      addOpacity(ev);
      break;
    case 'rainbow':
      cellFillColor = ev.currentTarget.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${alpha})`;
                      ev.currentTarget.style.opacity = "initial";
      break;
  }
  return cellFillColor;
}

btnEraser.addEventListener('click', eraserSketch);
btnBlack.addEventListener('click', blackSketch);
btnShade.addEventListener('click', shadeSketch);
btnRainbow.addEventListener('click', rainbowSketch);
btnClearGrid.addEventListener('click', clearGrid);
btnNewGrid.addEventListener('click', changeGridNum);

createGridContainer();
createGrid(16);