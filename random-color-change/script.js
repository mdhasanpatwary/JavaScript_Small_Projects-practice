
const borderBtn = document.querySelector('.border');
const bgcolorBtn = document.querySelector('.bgcolor');
const colorBtn = document.querySelector('.color');
const boxp = document.querySelector('.box p');

function random(min, max) {
    const num = Math.floor(Math.random() * (max-min)) + min;
    return num;
}

function randomColor() {
    return "rgb(" + random(0, 255) + ', ' + random(0, 255) + ', ' + random(0, 255) + ")";
}


function setBgColor() {
    let newBgColor = randomColor();
    boxp.style.background = newBgColor;
}

function setBorder() {
    let newBorder = random(5, 30) + "px solid " + randomColor();
    boxp.style.setProperty('border', newBorder);
}

function setColor() {
    let newColor = randomColor();
    boxp.style.setProperty('color', newColor);
}

bgcolorBtn.addEventListener('click', setBgColor);
borderBtn.addEventListener('click', setBorder);
colorBtn.addEventListener('click', setColor);
