/* Get Our Elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const fullscreen   =  player.querySelector('.fullscreen-btn');



/* Build Our Function */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const icon = this.paused ? '⏸' : '▶';
    toggle.textContent = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(video.currentTime);  
}

function handleUpdate() {
    video[this.name] = this.value;
    console.log(this.name, this.value);
    
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
    
}

function scurb(e) {
    const scurbTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scurbTime;
    
}

function toggleFullscreen() {
	if(video.requestFullScreen){
		video.requestFullScreen();
	} else if(video.webkitRequestFullScreen){
		video.webkitRequestFullScreen();
	} else if(video.mozRequestFullScreen){
		video.mozRequestFullScreen();
	}
}


/* Hook up the event listners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleUpdate));

let mousedown = false;
progress.addEventListener('click', scurb);

progress.addEventListener('mousemove', (e) => mousedown && scurb(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


fullscreen.addEventListener('click', toggleFullscreen);