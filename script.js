//ev refers to the mousemove event object 
//it allows access to the x and y coordinates of the mouse, among other properties recorded on mousemove event
getMousePos = (ev) => {
  let mousePosX = ev.clientX;
  let mousePosY = ev.clientY;
  let mousePosXY = `X:${mousePosX}, Y:${mousePosY}`
  console.log(mousePosXY);
  return mousePosXY;
}

document.addEventListener('mousemove', getMousePos);

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
      cell.setAttribute('id', `cell-${r}-${c}`); //gives each cell a unique numerical id for color change tracking purposes
      document.getElementsByClassName('row')[r].appendChild(cell);
      cell.addEventListener('mouseenter', changeColor); 
    }
  }
}

changeColor = (ev) => {
  //ev.currenttarget changes the cell's background color (since each cell has an event listener)
  ev.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 1)';
}

createContainer();
createGrid(16, 16);