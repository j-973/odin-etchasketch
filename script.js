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
  newGridNum = prompt('How many squares per side for new grid? (enter one number)', '_ x _?', 'Please enter a whole number');
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

//.random() method generates a floating point (i.e. has a decimal) value between 0 and 1. 16777215 represents the total number of color values that exist from black to white (#000000 - #FFFFFF). 
//Math.floor returns an integer equivalent of the previously generated floating point value. Then, toString(16) converts the integer value to base 16 / hexidecimal.
getRandomColor = (randColor) => {
  randColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  return randColor
}


changeColor = (ev) => {
  //ev.currenttarget changes the cell's background color (since each cell has an event listener)
  cellFillColor = ev.currentTarget.style.backgroundColor = getRandomColor();
  return cellFillColor;
}

createGridContainer();
createGrid(16);