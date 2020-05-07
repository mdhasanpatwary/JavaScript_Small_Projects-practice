
let countdown;
let timerDisplay = document.querySelector(".display__time-left");
let endTime = document.querySelector(".display__end-time");
let buttons = document.querySelectorAll('[data-time]');



function timer(seconds) {
    //Clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    //console.log({now, then});
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondLeft = Math.round((then - Date.now()) / 1000);
        if(secondLeft < 0) {
            clearInterval(countdown);
            return;
        }

        //Display It
        displayTimeLeft(secondLeft);
    }, 1000);
}


function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainSeconds = seconds % 60;
    const display = `${minutes}:${remainSeconds < 10 ? '0' : ''}${remainSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}


function displayEndTime(timestemp) {
    const end = new Date(timestemp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const adjustHour = hour > 12 ? hour - 12 : hour;
    endTime.textContent = `Be Back At ${adjustHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}


function startTimer() {
    const seconds = parseFloat(this.dataset.time);
    timer(seconds);   
}


buttons.forEach(button => button.addEventListener('click', startTimer));


document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset(); 
});