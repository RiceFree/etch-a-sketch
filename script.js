const container = document.querySelector('#container');
const contStyle = document.querySelector('#container').style;
container.classList.add('gridStyle');


let sqrNum = 16;
let cellDim = 700 / sqrNum - 0.2;
contStyle.gridTemplateColumns = `repeat(${sqrNum},${cellDim + 0.2}px)`;
contStyle.gridTemplateRows = `repeat(${sqrNum},${cellDim + 0.2}px)`;

for (let i = 0; i < (sqrNum * sqrNum); i++) {
  let thisCell = document.createElement("div");
  thisCell.classList.add('cell');
  thisCell.style.cssText = `width: ${cellDim}px; height: ${cellDim}px`;
  container.appendChild(thisCell);
};

const cells = document.querySelectorAll('.cell');

cells.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        let thisCell = event.currentTarget;
        if (!thisCell.style.backgroundColor) {
        let r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let rgbString = r + ', ' + g + ', ' + b;
        thisCell.style.cssText = `background-color: rgb(${rgbString});`;
        } else if (!thisCell.style.opacity) {
         thisCell.style.opacity = '0.9';
        } else {
          oldOp = thisCell.style.opacity;
          newOp = oldOp - 0.1;
          thisCell.style.opacity = newOp;
        }
    });
});


const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', (e) => {
sqrNum = prompt("How many squares per side?");
if (!sqrNum) return;
cellDim = 700 / sqrNum - 0.2;

contStyle.gridTemplateColumns = '';
container.classList.add('gridStyle');
contStyle.gridTemplateColumns = `repeat(${sqrNum},${cellDim + 0.2}px)`;
contStyle.gridTemplateRows = `repeat(${sqrNum},${cellDim + 0.2}px)`;

const allCells = document.querySelectorAll('.cell');
allCells.forEach((div) => {
  div.remove();
});

  for (let i = 0; i < (sqrNum * sqrNum); i++) {
  let thisCell = document.createElement("div");
  thisCell.classList.add('cell');
  thisCell.style.cssText = `width: ${cellDim}px; height: ${cellDim}px`;
  container.appendChild(thisCell);
};
const cells = document.querySelectorAll('.cell');
cells.forEach((div) => {
  div.addEventListener('mouseover', (e) => {
      let thisCell = event.currentTarget;
      thisCell.classList.add('trail');
  });
});
});