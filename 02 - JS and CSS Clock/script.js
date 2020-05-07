
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


setInterval(setDate, 1000);

function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    let minuts = now.getMinutes();
    let minsDegree = ((minuts / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    let hours = now.getHours();
    let hourDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    
}

