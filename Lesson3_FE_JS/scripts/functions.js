//ФУНКЦИИ

//Функция - это всегда какое-то действие

// ОБЪЯВЛЕНИЕ ФУНКЦИИ (Function declaration)

function getSum(num1 = 10, num2 = 8) {
    return num1 + num2;
  }
  
  console.log(getSum(4, 7));
  console.log(getSum(23, 5));
  console.log(getSum());

  //NaN - not a number
// 5 + undefined = NaN
// 5 + '5' = 55
// 5 + true = NaN

  function getGreeting(firstName = 'Elena') {
      return `Hello, ${firstName}`
  }

  console.log(getGreeting('Olga'));
  console.log(getGreeting('Mariam'));
  console.log(getGreeting());


function getMult(num1, num2, num3 = 1) {
    return num1 * num2 * num3;
  }
  
  console.log(getMult(4, 7, 6));
  console.log(getMult(23, 5));


  function getGreeting(firstName = 'Elena', age = 18) {
    return `Hello, ${firstName}. Your age is ${age}.`;
  }
  
  
  console.log(getGreeting('Mariam', 37));
  console.log(getGreeting('Alex', 7));
  console.log(getGreeting());


  
  
  //ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ
  
  //Правила наименования функций
//1. использовать настоящие английские слова
//2. использовать snake_case или camalCase
//3. первое слово глагол (get, show, sum, divide и т.д.)
  
  //СТРЕЛОЧНЫЕ ФУНКЦИИ (Arrow functions)

