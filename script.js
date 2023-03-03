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

let btnClearGrid = document.createElement('button');
btnClearGrid.setAttribute('id', 'btnClearGrid');
buttonsContainer.appendChild(btnClearGrid);
btnClearGrid.textContent = 'Clear Grid';

let btnNewGrid = document.createElement('button');
btnNewGrid.setAttribute('id', 'btnNewGrid');
buttonsContainer.appendChild(btnNewGrid);
btnNewGrid.textContent = 'Change Grid Size';

createGridContainer = () => {
  let gridContainer = document.createElement('div');
  gridContainer.setAttribute('id', 'gridContainer');
  wrapper.appendChild(gridContainer);
}
removeExistingGrid = () => {
  //removes the grid container div from the DOM, removing all its child divs/cells too
  if (wrapper.contains(gridContainer)) {
    gridContainer.remove(); 
  }
}
clearGrid = () => {
  let cell = document.querySelectorAll('.cell');
  cell.forEach(cell => {
    cell.style.backgroundColor = null;
  });
}
changeGridNum = (newGridNum) => {
  //if user input is blank, or is NaN = not a number, or is not between 1-100, prompt them again. trim removes extra spaces from either side of user's input
 while (newGridNum === '' || isNaN(newGridNum) || newGridNum < 1 || newGridNum > 100) {
    newGridNum = parseInt(prompt('How many squares per side for new grid? (enter one number between 1-100)', '_ x _?',).trim());
  }
  removeExistingGrid();
  createGridContainer();
  createGrid(newGridNum);
  return newGridNum;
}

btnClearGrid.addEventListener('click', clearGrid);
btnNewGrid.addEventListener('click', changeGridNum);

createGrid = (gridNum) => {
  //for every r rows (divs), there are c created cells (divs) nested within each row
  for (r = 0; r < gridNum; r++) {
    row = document.createElement('div');
    row.setAttribute('class', 'row')
    document.getElementById('gridContainer').appendChild(row);
    for (c = 0; c < gridNum; c++) {
      cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('id', `cell-${r}-${c}`); //gives each cell a unique numerical id for color change tracking purposes
      document.getElementsByClassName('row')[r].appendChild(cell);
      cell.addEventListener('mouseenter', changeColor);
    }
  }
      return gridNum;
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
  cellFillColor = ev.currentTarget.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}, ${alpha})`;
  return cellFillColor;
}

createGridContainer();
createGrid(16);