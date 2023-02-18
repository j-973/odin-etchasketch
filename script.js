getMousePos = () => {
  let mousePosX = event.clientX;
  let mousePosY = event.clientY;
  mousePosXY = console.log([mousePosX, mousePosY]);
  return mousePosXY;
}

addEventListener('onmousemove', getMousePos);

createContainer = () => {
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  document.body.appendChild(container);
}

createGrid = (numRows, numCells) => {
  //for every r rows (divs), there are c created cells (divs) nested within each row
  for (r = 0; r < numRows; r++) {
    row = document.createElement('div');
    row.setAttribute('class', 'row')
    document.getElementById('container').appendChild(row);
    for (c = 0; c < numCells; c++) {
      cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('id', `cell-${r}-${c}`); //gives each cell a unique numerical id for color change purposes
      document.getElementsByClassName('row')[r].appendChild(cell);
    }
  }
}

createContainer();
createGrid(16, 16);