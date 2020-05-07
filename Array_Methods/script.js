//Array.form()

console.log(Array.from('FOO'));

console.log(Array.from([1, 2, 3], x => x + x));

const set = new Set(['foo', 'bar', 'baz', 'foo']);

console.log(set);



console.log(Array.from(set));

