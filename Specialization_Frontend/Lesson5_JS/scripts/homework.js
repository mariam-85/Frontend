// //1.

// function getMessage(name) {
//     return `Dear ${name}, welcome`
// }

// const getMessage_arrow = name => `Dear $(name), welcome`;
// console.log(getMessage());
// console.log(getMessage_arrow());


// //2.

// function getMessage1(name, age) {
//     if (age < 18) {
//         return `Dear ${name}, you are younger than 18`
//     } else {
//         return `Dear ${name}, you are adult`
//     }
// }

// console.log(getMessage1('Mariam', 37));
// console.log(getMessage1('Alex', 8));


// const getMessage1_arrow = (name, age) => {
//     if (age < 18) {
//         return `Dear ${name}, you are younger than 18`
//     } else {
//         return `Dear ${name}, you are adult`
//     }

// }

// console.log(getMessage1_arrow('Mariam', 37));
// console.log(getMessage1_arrow('Alex', 8));


const getMessage1_tern = (name, age) => age < 18 ? `Dear ${name}, you are younger than 18` : `Dear ${name}, you are adult`;

console.log(getMessage1_tern('Mariam', 37));
console.log(getMessage1_tern('Alex', 8));

// У1 ? У1 верно : У1 неверно


//3.

function getMultiplication(num1, num2 = 2) {
    return num1 * num2
}

console.log(getMultiplication(2, 5));

const getMultiplication_arrow = (num1, num2 = 2) => num1 * num2;

console.log(getMultiplication_arrow(2, 5));

//4. 

function getMinNum(num1, num2) {
    return Math.min(num1, num2)

}
console.log(getMinNum(2, 17));

const getMinNum_arrow = (num1, num2) => Math.min(num1, num2);

console.log(getMinNum_arrow(2, 17));


