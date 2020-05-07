let arrow = document.querySelector(".arrow");
let speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition(data => {
    console.log(data)
    speed.textContent = data.coords.speed + 10;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.log(err);
    alert("Hey! You Gotta Allow That To Happen!!!");
});