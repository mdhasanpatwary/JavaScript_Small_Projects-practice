const digitalClock = document.querySelector('.digital-clock');

setInterval(function() {
    //Collect date form date method
    const data = new Date();
    //collect the hour
    const Hour = data.getHours();
    //collect the Minute
    const Minute = data.getMinutes()
    //collect the Second
    const Second = data.getSeconds();
    //set the time value
    let timeValue = (Hour >= 12) ? "PM" : "AM";
    //convert the to 12 Hour
    let newHour = (Hour > 12) ? Hour - 12: Hour;

    //es5
    digitalClock.innerHTML = newHour + " : " + Minute + " : " + Second + " : " + timeValue;

    //digitalClock.innerHTML = `${newHour} : ${Minute} : ${Second} : ${timeValue}`

}, 1000);


setInterval(function() {

    let second = document.querySelector('.second');
    let minute = document.querySelector('.minutes');
    let hour = document.querySelector('.hour');

    const data = new Date();
    const secondTime = data.getSeconds();
    const minuteTime = data.getMinutes();
    const hourTime = data.getHours()
  
/*
    //es5
    second.style.transform = "rotate(".concat(6 * secondTime + 90, "deg)");
    minute.style.transform = "rotate(".concat(6 * minuteTime + 90, "deg)");
    hour.style.transform = "rotate(".concat(6 * hourTime + 90, "deg)");
*/

    //es6
    second.style.transform = `rotate(${6 * secondTime + 90}deg)`;
    minute.style.transform = `rotate(${6 * minuteTime + 90}deg)`;
    hour.style.transform = `rotate(${6 * hourTime + 90}deg)`;

}, 1000)
