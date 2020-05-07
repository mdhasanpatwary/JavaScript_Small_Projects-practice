
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

let ul = document.querySelector('#bands');

function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// const sortBands = bands.sort((a, b) => {
//     if(strip(a) > strip(b)) {
//         return 1
//     } else {
//         return -1;
//     }
// })

const sortBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);


ul.innerHTML = sortBands.map(band => `<li>${band}</li>`).join('');
