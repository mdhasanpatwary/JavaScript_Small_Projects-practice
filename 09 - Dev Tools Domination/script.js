const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');


// Interpolated
console.log('Hello I am a %s String!', '⌚');


// Styled
console.log('%c This is Styled Text', 'font-size: 40px; color: red; text-shadow: 2px 2px 1px green;');


// warning!
console.warn('This Is Warning Text');


// Error :|
console.error('This Is Error Text');


// Info
console.info('This Is Info Text');

// Testing
let p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'You didn\'t Select the Right Elements!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} Years Old`);
    console.groupEnd(`${dog.name}`);
});


// counting
console.count('wes');
console.count('wes');
console.count('Dev');
console.count('Dev');
console.count('Dev');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('wes');
console.count('Dev');
console.count('wes');
console.count('wes');

// timing
let url = 'https://api.github.com/users';
        console.time('fatching data');
        fetch(url)
            .then(res => res.json())
                .then(data => {
                    console.timeEnd('fatching data');
                    console.log(data);
                });

//Table
console.table(dogs);