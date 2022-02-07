const wrapper = document.getElementById('wrapper');
const clear = document.getElementById('clear');
const randBtn = document.getElementById('randBtn');
const whiteBtn = document.getElementById('whiteBtn');
const gridRange = document.getElementById('gridRange');
const output = document.getElementById('output');
const hex = document.getElementById('hex');

function drawGrid(cellSize){
    removeGrid();
    gridSize = cellSize ** 2;
    wrapper.style.cssText = `grid-template-columns: repeat(${cellSize}, 1fr);`
    
    for(let i = 0; i < gridSize; i++){
        let cell= document.createElement('div');
        cell.classList.add('cell');
        wrapper.appendChild(cell);
        colorCell(cell);
    };
};

function removeGrid() {
    gridCells = wrapper.querySelectorAll('div');
    gridCells.forEach(gridcell => gridcell.remove());
};

gridRange.addEventListener('input', () => {
    drawGrid(gridRange.value);
    output.innerText = gridRange.value;
});

function colorCell(cell, color=hex.value) {
    hex.addEventListener('change', () =>{
        color = hex.value;
    })
    whiteBtn.addEventListener('click', () => {
        color = '';
    });
    randBtn.addEventListener('click', () => {
        color = randColor();
    });
    clear.addEventListener('click', () => {
        cell.style.background = '';
    });
    cell.addEventListener('mouseover', () => {
        cell.style.background = color;
    });
};

function randColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
};

drawGrid(16);