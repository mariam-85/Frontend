//1. Напишите функцию, которая принимает в качестве аргумента имя (строку), а возвращает сообщение в формате: Dear ИМЯ, welcome.
//Выведите результат в консоль. Запишите функцию в двух форматах (function declaration и arrow function).

function getGreeting(name) {
   return `Dear, ${name}, welcome!`
}

console.log(getGreeting('Mariam'));

const getGreeting_2 = name => `Dear, ${name}, welcome!`;

console.log(getGreeting_2('Alex'));


//2.Напишите функцию, которая принимает в качестве аргументов два значения: имя и возраст. Если переданный возраст меньше 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are younger than 18. Если возраст больше или равен 18, то функция возвращает сообщение в формате: Dear ИМЯ, you are adult. 
//Запишите функцию в двух форматах (function declaration и arrow function).

function getGreeting_3(name, age) {
    if(age < 18) {
        return `Dear, ${name}, you are younger than 18!`;
    } else {
        return `Dear, ${name}, you are adult!`;
    }
}

console.log(getGreeting_3('Mariam', 37));
console.log(getGreeting_3('Alex', 8));

const getGreeting_4 = (name, age) => {
    if(age < 18) {
        return `Dear, ${name}, you are younger than 18!`;
    } else {
        return `Dear, ${name}, you are adult!`;
    }
}

console.log(getGreeting_4('Mariam', 37));
console.log(getGreeting_4('Alex', 8));

//3. 3. Напишите функцию, которая принимает два числовых аргумента и возвращает результат их умножения.
//Значение второго аргумента должно быть указано по умолчанию 2. Запишите функцию в двух форматах (function declaration и arrow function).

function getMult(num1, num2 = 2) {
    return num1 * num2
}

console.log(getMult(3, 4)); 
console.log(getMult(5)); 

const getMult_2 = (num1, num2 = 2) => {
    return num1 * num2
}

console.log(getMult_2(8, 5)); 
console.log(getMult_2(15)); 


//4. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает меньшее значение.
//Выведите результат в консоль. Предложите два варианта решения. Запишите функцию в двух форматах (function declaration и arrow function).

function getSmallestNumber(num1, num2) {
    return Math.min(num1, num2)
}

console.log(getSmallestNumber(12, 6));

function getSmallestNumber_2(num1, num2) {
    if(num1 < num2){
        return num1
    } else {
        return num2
    }
}

console.log(getSmallestNumber_2(45, 18));
console.log(getSmallestNumber_2(9, 34));



const getSmallestNumber_3 = (num1, num2) => {
    return Math.min(num1, num2)
}

console.log(getSmallestNumber_3(9, 6));
console.log(getSmallestNumber_3(3, 8));


const getSmallestNumber_4 = (num1, num2) => {
    if(num1 < num2){
        return num1
    } else {
        return num2
    }
}

console.log(getSmallestNumber_4(12, 7));
console.log(getSmallestNumber_4(4, 32));