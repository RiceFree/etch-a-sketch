const container = document.querySelector('#container');
const contStyle = document.querySelector('#container').style;
container.classList.add('gridStyle');


let sqrNum = 16;
let cellDim = 700 / sqrNum;
contStyle.gridTemplateColumns = `repeat(${sqrNum},${cellDim + cellDim * 0.01}px)`;

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


const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', (e) => {
sqrNum = prompt("How many squares per side?");
if (!sqrNum) return;
cellDim = 700 / sqrNum;

contStyle.gridTemplateColumns = '';
container.classList.add('gridStyle');
contStyle.gridTemplateColumns = `repeat(${sqrNum},${cellDim + cellDim * 0.03}px)`;

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