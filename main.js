const wrapper = document.getElementById('wrapper');
let gridLength = 256;
const clear = document.getElementById('clear');
const randBtn = document.getElementById('randBtn');
const blackBtn = document.getElementById('blackBtn');
const whiteBtn = document.getElementById('whiteBtn');

for(let i = 0; i < gridLength; i++){
    let cell= document.createElement('div');
    cell.classList.add('cell');
    wrapper.appendChild(cell);
    colorCell(cell);
};

function colorCell(cell, color='black') {
    blackBtn.addEventListener('click', () => {
        color = 'black';
    });
    whiteBtn.addEventListener('click', () => {
        color = 'white';
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
}
