
function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip it if it's not transform
    e.target.classList.remove('playing');
    
    //this.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);












/*
Note: window te keydown event gotle anonymous function ti trigar hove. sekhane amra ekta variable er moddhe audio element ta ke store korbo. and audio element er data-key er value ti amra dynamically store korbo mane keycode ti ke.

and amra ekta condition apply korbo je, jodi audio element ti store kora variable ti te kono audio element na thake tahole okhane function ti return hoye jabe, next code gulo r execute hove na.

and next amra audio element store kora variable tir sathe builtIn paly() function ti use korbo. tahole window te keypress er sathe function ti trigar hove and audio ti play hove.
and amra audio tir current time set kora dive jate kore ati per keypress e 0 thake start hoy.
and dom a amr animation er jonno ekti class add korbo audio element er sathe.

next amra sob gula key ke select korbo and sekhane ekta foreach chalabo, and loop er single element er sathe amra "transitionend" event ti set korbo and "removeTransition" name a ekta function call korbo
*/
