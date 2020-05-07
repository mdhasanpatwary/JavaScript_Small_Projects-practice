/*

//Reduce Function
let numbers1 = [1, 3, 7, 2, 13]


let max = numbers1.reduce((acc, val) => {

    //return Math.max(acc, val);

    if(acc > val) {
        return acc;
    } else {
        return val;
    }
});

console.log(max);


//Array.min()
let maxx = numbers1.reduce((acc, val) => Math.max(acc, val));
let min = numbers1.reduce((acc, val) => Math.min(acc, val));
console.log(max, min);

*/


/*

const numbers = [12, 23, 34, 55, 21, 34, 5, 9, 99, 62];

const votes = ['Yes', 'No', 'Yes', 'Yes', 'Yes', 'No', 'Absent'];
let tk = [];
const products = [
    {name: 'pen', amount: 5, price: 10},
    {name: 'book', amount: 3, price: 300},
    {name: 'Notebook', amount: 2, price: 50}
];

// const total = products.reduce((acc, item) => {
//     return acc + (item.amount * item.price);
// }, 0);
// console.log(total);


const total = votes.reduce((acc, vote) => {
    if(acc[vote]) {
        acc[vote]++;
    } else {
        acc[vote] = 1;
    }

    return acc;
    
}, {});
console.log(total);

*/



/*
    * Practice Spread Operator *
*/


let sum = 0;

function add(a, b, ...argu) {
    console.log(argu);

    for(let val of argu) {
        sum += val;
    }
    
    return sum + a + b;
}

let arr = [5, 6, 7, 8];
let arr2 = [1, 2, 3, 4, ...arr];
//let arr2 = [1, 2, 3, 4].concat(arr);
console.log(arr2);


console.log(add(...arr2));






let a = {
    x: {
        name: 'ahmed',
        surname: 'sohid'
    },
    y: 2,
    z: 3
}


let {x, ...b} = a;

console.log(x, typeof(x));
console.log(b);
