//ФУНКЦИИ

//Функция - это всегда какое-то действие

// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)

// function getSum(num1 = 10, num2 = 8) {
//     return num1 + num2;
//   }
  
//   console.log(getSum(4, 7));
//   console.log(getSum(23, 5));
//   console.log(getSum());

//   //NaN - not a number
// // 5 + undefined = NaN
// // 5 + '5' = 55
// // 5 + true = NaN

//   function getGreeting(firstName = 'Elena') {
//       return `Hello, ${firstName}`
//   }

//   console.log(getGreeting('Olga'));
//   console.log(getGreeting('Mariam'));
//   console.log(getGreeting());


// function getMult(num1, num2, num3 = 1) {
//     return num1 * num2 * num3;
//   }
  
//   console.log(getMult(4, 7, 6));
//   console.log(getMult(23, 5));


//   function getGreeting(firstName = 'Elena', age = 18) {
//     return `Hello, ${firstName}. Your age is ${age}.`;
//   }
  
  
//   console.log(getGreeting('Mariam', 37));
//   console.log(getGreeting('Alex', 7));
//   console.log(getGreeting('Michi'));
//   console.log(getGreeting(undefined, 56));
//   console.log(getGreeting());


//   function getDiv(num1, num2) {
//     if (num1 > num2){
//     return num1 / num2;
//     } else {
//     return num2 / num1
//     }
//   }
//   console.log(getDiv(1,4));
//   console.log(getDiv(4, 2));
  
// function getDiv1(num1, num2){
//   return Math.max(num1, num2) / Math.min(num1, num2)
// }

// console.log(getDiv(1, 4));
// console.log(getDiv(4, 2));
  
  


  // function greeting_declaration(name, lastname){
  //   return `Hello ${name} ${lastname}!`
  // }
  
  // //ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ

  // let greeting = function getHello(name, lastname) {
  //   return `Hello ${name} ${lastname}!`
  // }
  
  // console.log(greeting('Olga', 'Petrova'));

  //Правила наименования функций
//1. использовать настоящие английские слова
//2. использовать snake_case или camalCase
//3. первое слово глагол (get, show, sum, divide и т.д.)
  
  //СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)


  
  let greeting_arrow = (name, lastname) => `Hello ${name} ${lastname}!`;
  
  console.log(greeting_arrow('Olga', 'Petrova'));

