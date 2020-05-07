const speed = document.querySelector(".speed");
const bar = document.querySelector(".speed-bar");
const video = document.querySelector(".flex");


function handleMove(e){
    const y = e.pageY - speed.offsetTop;
    const persent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(persent * 100) + '%';
    const playbackRate = persent * (max - min) + min;
    bar.style.height = height;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    video.playbackRate = playbackRate;
    console.log(Math.round(video.playbackRate))
    
}

speed.addEventListener('mousemove', handleMove);