
const result = document.getElementById('result');
const submit = document.getElementById('submit');


function binary(e) {
    e.preventDefault();

    const num = document.getElementById('number').value;
    console.log(num);
    

    if(num === '') {
        alert('Please Enter A Number');
    } else if(num < 0) {
        alert('Please Enter a Positive Number');
    } else {
        result.style.visibility = 'visible';
    }
    result.innerText = Number(num).toString(2);
}


submit.addEventListener('click', binary);




// Remove Duplicates
let numbers = [1, 2, 1, 3, 5, 3, 2, 1, 1, 1, 5, 4, 6, 2000];


let noDuplicate = numbers.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
});


let sorted = noDuplicate.slice().sort((a, b) => {
    //return b - a;
    if(b > a) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sorted);
console.log(noDuplicate);




