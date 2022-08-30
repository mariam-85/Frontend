// Задан массив:

let arr = [8, 7, -30, 76, 53, 93, -3, 10, -15, 0, 33];
console.log(arr);

// Задачи:
// 1. Добавьте в начало массива число 53. Затем удалите из конца массива последние 2 числа. Далее решайте задачи с обновленным массивом.


arr.unshift(53);
console.log(arr);

arr.pop(arr.length - 1);
console.log(arr);

arr.pop(arr.length - 1);
console.log(arr);


// 2. Сформируйте массив из положительных чисел меньше 50. Найдите сумму всех положительных чисел меньше 50.

let arr_positive_less_than_50 = arr.filter(el => el > 0 && el < 50);
console.log(arr_positive_less_than_50);

let sum_positive_less_than_50 = arr.filter(el => el > 0 && el < 50).reduce((total, el) => total + el);
console.log(sum_positive_less_than_50);

// 3. Сформируйте массив, состоящий только из положительных чисел, кончающихся на 3. Найдите сумму всех положительных чисел, кончающихся на 3.

let arr_positive_end_on_3 = arr.filter(el => el > 0 && el % 10 == 3);
console.log(arr_positive_end_on_3);

let sum_positive_end_on_3 = arr.filter(el => el > 0 && el % 10 == 3).reduce((total, el) => total + el);
console.log(sum_positive_end_on_3);

// 3. Сформируйте массив, в котором положительные числа на строку '+', а отрицательные числа - на '-'.




let new_arr = arr.map(el => (el > 0 ? `-` : `+`));

console.log(new_arr);







