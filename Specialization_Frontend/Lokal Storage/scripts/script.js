localStorage.setItem('number_15', JSON.stringify(15));
const a = JSON.parse(localStorage.getItem('number_15'));

// console.log(a);
// console.log(typeof a);


const numbers = [1, 2, 3, 4, 5];


localStorage.setItem('numbers_array', JSON.stringify(numbers));
const b = JSON.parse(localStorage.getItem('numbers_array'));

// console.log(b);
// console.log(typeof b);

const c = '1, 2, 3, 4, 5';

const d = [1, 2, 3, 4, 5];

console.log(JSON.parse(d));
