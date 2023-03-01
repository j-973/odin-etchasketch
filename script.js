//page wrapper, button, and gridContainer of divs
let wrapper = document.createElement('div');
wrapper.setAttribute('id', 'wrapper');
document.body.appendChild(wrapper);

let title = document.createElement('h1');
title.setAttribute('id', 'title');
wrapper.appendChild(title);
title.textContent = 'Etch-a-Sketch';

let btnNewGrid = document.createElement('button');
btnNewGrid.setAttribute('id', 'btnNewGrid');
wrapper.appendChild(btnNewGrid);
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
changeGridNum = (newGridNum) => {
  //if user input is blank, or is NaN = not a number, prompt them again. trim removes extra spaces from either side of user's input
  while (newGridNum === '' || isNaN(newGridNum)) {
    newGridNum = prompt('How many squares per side for new grid? (enter one number)', '_ x _?', 'Please enter a whole number').trim();
  }
  removeExistingGrid();
  createGridContainer();
  createGrid(newGridNum);
  return newGridNum;
}

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

//.random() method generates a floating point (i.e. has a decimal) value between 0 and 1. 255 represents the total number of color values that exist for R, G, and B. 
//Math.floor returns an integer equivalent of the previously generated floating point value. 
getRandomColor = (randColor) => {
  randColor = Math.floor(Math.random()*255);
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