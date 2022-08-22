//Напишите функцию, которая принимает два числовых аргумента a и b (a > b), и выводит в консоль числа от a до b кратные 3.
 //Выведите сумму в консоль.

// const get_nums = (a, b) => {
//     for(let i = a; i >= b; i--){
//         if(i % 3 === 0){
//         console.log(i)
//         }
        
//     }
    
// }

// get_nums(10, 1);

//Напишите функцию, которая суммирует числа от 0 до 100 кратные 3 и 5. Выведите сумму в консоль

// const get_sum = () => {
//     let sum = 0;
//     for(let i = 0; i <= 100; i++){
//         if(i % 3 === 0 || i % 5 === 0){
//        sum += i
//         }
//     }
//      return sum
// }

// console.log(get_sum()); 

//Напишите функцию, формирующую массив из чисел от 0 до 50 кратных 5.
// => [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// const get_array = (a, b) => {
//     let result = [];
//     for(let i = 0; i <= 50; i++){
//         if(i % 5 === 0 && i !== 0){
//        result.push(i)
//         }
//     }
// return result
// }

// console.log(get_array()); 

// Напишите функцию, формирующую массив из чисел от a до b (b > a) кратных 2.

const get_array = (a, b) => {
    let result = [];
    for(let i = a; i <= b; i++){
        if(i % 2 === 0 && i !== 0){
       result.push(i)
        }
    }
return result
}

console.log(get_array(0, 10));

// Write a function that reverses a string. The input string is given as an array of characters s.

const reverseStr = (arr) => {
    let reverse_arr = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverse_arr.push(arr[i])
    }
    return reverse_arr
}

const reverseStr1 = (arr) => arr.reverse();

console.log(reverseStr(["H", "a", "l", "l", "o"]));

console.log(reverseStr1(["H", "a", "l", "l", "o"]));

//

let a = [1, 40, 53, 3, 6, 15];

console.log(a.sort());

