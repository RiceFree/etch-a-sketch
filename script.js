const container = document.querySelector('#container');
container.classList.add('gridStyle');



for (let i = 0; i < 256; i++) {
  let thisCell = document.createElement("div");
  thisCell.classList.add('cell')
  thisCell.setAttribute('id',i);
  container.appendChild(thisCell);
};

const cells = document.querySelectorAll('.cell');

cells.forEach((div) => {
    div.addEventListener('mouseover', (e) => {
        let thisCell = event.currentTarget;
        thisCell.classList.add('trail');
    });
});