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
        let h = Math.floor(Math.random() * (360 - 0 + 1) + 0);
        let l = 50;

        let hslString = h + ',100%, ' + l + '%';
        thisCell.setAttribute(`data-color`, h);
        thisCell.setAttribute(`data-light`, l);

        thisCell.style.cssText = `background-color: hsl(${hslString});`;

        } else {
          let newL = thisCell.getAttribute('data-light');
          newL -= 5
          thisCell.setAttribute('data-light', newL);
          let h = thisCell.getAttribute('data-color');
          let hslString = h + ', 100%, ' + newL + '%';

          thisCell.style.cssText = `background-color: hsl(${hslString})`;
        };
    });
});


const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('mouseover', (e) => {
  resetBtn.classList.add('hovered');
});

resetBtn.addEventListener('mouseout', (e) => {
  resetBtn.classList.remove('hovered');
});

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
      if (!thisCell.style.backgroundColor) {
        let h = Math.floor(Math.random() * (360 - 0 + 1) + 0);
        let l = 50;

        let hslString = h + ',100%, ' + l + '%';
        thisCell.setAttribute(`data-color`, h);
        thisCell.setAttribute(`data-light`, l);

        thisCell.style.cssText = `background-color: hsl(${hslString});`;

        } else {
          let newL = thisCell.getAttribute('data-light');
          newL -= 5
          thisCell.setAttribute('data-light', newL);
          let h = thisCell.getAttribute('data-color');
          let hslString = h + ', 100%, ' + newL + '%';

          thisCell.style.cssText = `background-color: hsl(${hslString})`;
        };
  });
});
});