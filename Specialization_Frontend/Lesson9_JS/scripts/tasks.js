// Задан массив:
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];

// Задачи:
// 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.
// 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.
// 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.


arr.unshift(67);
arr.push(56);

console.log(arr);

let arr_less_than_100 = arr.filter(el => el < 100);

console.log(arr_less_than_100);

let arr_ends_on_7 = arr.filter (el => el % 10 === 7);

console.log(arr_ends_on_7);

let sum_less_than_100 = arr.filter(el => el < 100).reduce((total, el) => total + el);

console.log(sum_less_than_100);

let sum_ends_on_7 = arr.filter (el => el % 10 === 7).reduce((total, el) => total + el);

console.log(sum_ends_on_7);

// Задан массив:
let arr = [137, 5, 84, 299, 777, 500, 1, 8, 17];

// // Задачи:
// // 1. Добавьте в начало массива число 67, используя метод .unshift(). Затем добавьте в конец массива число 56. Далее решайте задачи с обновленным массивом.

// arr.unshift(67);
// arr.push(56);

// // 2. Сформируйте массив из чисел меньше 100. Выведите в консоль результат.


// let arr_less_than_100 = arr.filter(el => el < 100);


// // 3. Сформируйте массив, состоящий только из чисел, кончающихся на 7.

// let arr_ends_on_7 = arr.filter(el => el % 10 === 7);

// // 4. Найдите сумму чисел, которые меньше 100.

// let sum = arr.filter(el => el < 100).reduce((total, el) => total + el);
// let sum1 = arr_less_than_100.reduce((total, el) => total + el);



// let sum2 = arr.reduce((total, el) => {
//   if(el < 100){
//     total += el
//   }
//   return total
// });



// // 5. Найдите сумму чисел, которые заканчиваются на 7.

// let sum3 = arr.filter(el => el % 10 === 7).reduce((total, el) => total + el);
// let sum4 = arr_ends_on_7.reduce((total, el) => total + el);

// console.log(sum3);
// console.log(sum4);