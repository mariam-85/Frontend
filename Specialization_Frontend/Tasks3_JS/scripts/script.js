// vyvesti is massiva tolko polozhitelnie chisla

// const arr = [12, -4, 32, -34, 5, -32, 34];

// // for(let i = 0; i < arr.length; i++){
// //     if(arr[i] >= 0){
// //         console.log(arr[i]);
// //     }
// // }

// // arr[2] = -1;
// // console.log(arr); // menyaem snachenie indexa v massive


// // preobrasovyvaet vse otr. chisla v polozhitelnye

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 0){
//         arr[i] *= -1;
//     }
// }
// console.log(arr);

// preobrasovyvaet vse nechetnye chisla v chetnye


// const arr = [12, 3, 32, 33, 5, 32, 34];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//         arr[i] += 1;
//     }
// }
// console.log(arr);

// написать цикл, который выводит только числа, квадрат которых меньше 1000

// const arr = [12, 3, 32, 33, 5, 32, 34];

// for(let i = 0; i < arr.length; i++){
//     if(arr[i] ** 2 < 1000){
//     console.log(arr[i]);
//     }
// }

// naiti summu chisel v massive


// const arr = [12, 3, 32, 33, 5, 32, 34]; 

// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//     sum += arr[i];
//     }
    
// }
// console.log(sum);

// написать цикл (один), который находит сумму четных чисел и сумму нечетных
// после цикла выведите эти значения

// const arr = [12, 3, 32, 33, 5, 32, 34]; 

// let sum_even = 0;
// let sum_odd = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//     sum_even += arr[i]
//     } else {
//     sum_odd += arr[i]
//     }
    
// }
// console.log(sum_even);
// console.log(sum_odd);


// // найти сумму положительных чисел и отрицательных из массива
// использовать только один цикл
// сумму отрицательных чисел нужно посчетать без минуса

// const arr = [12, -3, 32, 33, -5, 32, 34]; 

// let sum_pos = 0;
// let sum_neg = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//     sum_pos += arr[i]
//     } else {
//     sum_neg -= arr[i];
    
//     }
    
// }
// console.log(sum_pos);
// console.log(sum_neg);

// // найти максимальное число из массива
// все числа в массиве потожительные


// const arr = [12, 3, 32, 33, 5, 32, 34];

// let result = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > result){
//         result = arr[i];
//     }
// }

// console.log(result);

// найти максимальное число из массива

// const arr = [-12, -3, -32, -33, -5, -32, -34];

// let result = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > result){
//         result = arr[i];
//     }
// }

// console.log(result);

// // написать цикл, который находит индекс максимального числа
// если максим альных чисел несколько, то в мы сохраняем индекс 
// первого максимального числа

// const arr = [-12, -3, -32, -33, -5, -32, -34];

// let max_result = arr[0];
// let max_index = 0;
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max_result){
//         max_result = arr[i];
//         max_index = i;
//     }
// }

// console.log(max_index);

// // найти в массиве преднеибольшое число

const arr = [4, 7, 12, 11];

let max_result = arr[0];
let pred_max_result = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i] > max_result){
        pred_max_result = max_result;
        max_result = arr[i];
    } else if(arr[i] > pred_max_result) {
        pred_max_result = arr[i];

    }
}

console.log(pred_max_result);