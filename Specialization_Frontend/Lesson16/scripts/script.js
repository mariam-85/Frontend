let a = Math.pow(10, 3);

console.log(a);

let b = Math.abs(5); //5
let c = Math.abs(-5); //5

let d = Math.ceil(4.33); //5
let e = Math.floor(4.33); //4
let f = Math.round(4.33); //4

console.log(d);
console.log(e);
console.log(f);

let min = Math.min(5, 34, -100, 56, 777); // -100
let max = Math.max(5, 34, -100, 56, 777); // 777

console.log(min);
console.log(max);

let random = Math.random(); 
console.log(random);


////Напишите программу, которая выводит случайное число от 0 до 10

let step1 = Math.random();
let step2 = step1 * 10 + 10;
let step3 = Math.round(step2);

console.log(step1);
console.log(step2);
console.log(step3);


let random_num = Math.round(Math.random() *10); //0 - 10
let random_num2 = Math.round(Math.random() *10 + 1); //1 - 11
let random_num3 = Math.round(Math.random() *10 + 2); //2 - 12
let random_num4 = Math.round(Math.random() *9 + 1); //0 - 10

console.log(random_num);
console.log(random_num2);
console.log(random_num3);
console.log(random_num4);

let random_num5 = Math.round(Math.random() * 10 + 15);
let random_num6 = 15 + Math.round(Math.random() * 10);

console.log(random_num5);
console.log(random_num6);


let random_num7 = Math.floor(Math.random() * 11); //0 - 10
console.log(random_num7);























