
let pressed = [];
const secretCode = "patwary";

window.addEventListener('keyup', e => {
    console.log(e.key);
    
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

    if(pressed.join('').includes(secretCode)) {
        console.log(pressed.join(''));
        cornify_add();
    }
});


// let res = 1;
// setInterval(function() {
//     cornify_add();
//     document.querySelector('body span').innerHTML = res++;
// }, 1000);