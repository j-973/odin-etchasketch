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

createGrid = (numRows, numCells) => {
  //for every r rows (divs), there are c created cells (divs) nested within each row
  for (r = 0; r < numRows; r++) {
    row = document.createElement('div');
    row.setAttribute('class', 'row')
    document.getElementById('gridContainer').appendChild(row);
    for (c = 0; c < numCells; c++) {
      cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('id', `cell-${r}-${c}`); //gives each cell a unique numerical id for color change tracking purposes
      document.getElementsByClassName('row')[r].appendChild(cell);
      cell.addEventListener('mouseenter', changeColor); 
    }
  }
}

changeGridSize = (sizeInput) => {
  clearGrid();
  sizeInput = prompt('How many squares?', '_ x _?', 'Please enter a number');
}

changeColor = (ev) => {
  //ev.currenttarget changes the cell's background color (since each cell has an event listener)
  ev.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

createGridContainer();
createGrid(16, 16);