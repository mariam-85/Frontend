// .reduce() - служит для того, что мы получили какое-то финальное значение, совершив итерацию по массиву. Возвращает финальное занчение, число.

//Найти сумму чисел в массиве
let numbers = [1, 2, 3, 4, 5]; // 15

// цикл for

let sum = 0;
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i]
}


// .reduce()

let result = numbers.reduce((total, el) => total + el, 0);

// C 0 в initialValue
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15


// Без 0 в initialValue
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15


//====================

// Дан массив
let nums = [3, 6, 7, 1]; // 
// (3 + 6 + 7 + 1) / 4 = 4.25

//Найти среднеарифмитическое всех элементов массиов 

let sum1 = nums.reduce((total, el) => total + el); // 17
console.log(sum1 / nums.length);

let avg = nums.reduce((total, el) => total + el) / nums.length;
console.log(avg);
