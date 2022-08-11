// Task 1

let user = '   Ivan Ivanov   ';
console.log(user.trim());

// Task 2

let random = Math.random();
let random_fixed = +random.toFixed(3);

console.log(random);
console.log(random_fixed);
console.log(typeof random_fixed);

// Task 3

const text = 'Hello, world';

let result = `First: <${text[0]}>\nLast: <${text[text.length - 1]}>`;
console.log(result);