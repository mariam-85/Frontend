// Напишите цикл for, который выводит в консоль числа от 1 до 10

// for(let i = 1;  i <= 10; i ++){
// console.log(i)
// }
 
// for(let i = 15;  i <= 65; i += 5){
//     console.log(i)
// }

// for(let i = 65;  i >= 15; i -= 5){
//     console.log(i)
//     }


// В программе заданы две переменные n и m с числовым значением каждая. Число n больше числа m. Напишите цикл, который выводит в консоль все четные числа от m до n.

// function getNums(n, m){
//     for(let i = m; i <= n; i++){
//         if(i % 2 === 0) {
//             console.log(i)
//         } 
//     }
// }

// const getNums_arrow = (n, m) => {
//     for(let i = m; i <= n; i++){
//         if(i % 2 === 0) {
//             console.log(i)
//         } 
//     }
// }

// getNums_arrow(60, 40);

// В программе заданы две переменные n и m с числовым значением каждая. Напишите цикл, который выводит в консоль числа от большего числа до меньшего.

// const getNums_2 = (n, m) => {
//     if(n > m) {
//     for(let i = n; i >= m; i--){
//             console.log(i)
//         } 
//     } else if (m > n) {
//         for(let i = m; i >= n; i--){
//             console.log(i)
//         }
//     } else {
//     console.log('The numbers are equal')
//     }

//         }


// getNums_2(7, 19);
// getNums_2(70, 65);
// getNums_2(65, 65);

// const getNums_3 = (n, m) => {
//     if(n === m){
//         console.log('The numbers are equal')
//         return
//     }
//     for(let i = Math.max(n, m); i >= Math.min(n, m); i--){
//         console.log(i)
//     }
// }

// getNums_3(6, 9);
// getNums_3(12, 7);
// getNums_3(10, 10);



// Напишите программу, которая с помощью цикла считает сумму чисел от 1 до 10 и выводит в консоль.

// const getSum = () => {
//     let sum = 0;
//     for(let i = 1; i <= 10; i++){
//     sum += i // 1, 3, 5, 7.....
//     }
//     return sum
// }

// console.log(getSum());


// const getMult = () => {
//     let result = 1;
//     for(let i = 1; i <= 10; i++){
//     result *= i // 1, 3, 5, 7.....
//     }
//     return result
// }

// console.log(getMult());


const getSum = () => {
    let sum = 0;
    for(let i = 1; i <= 10; i++){
    if(i % 2 === 0)
    sum += i 
    }
    return sum
}

console.log(getSum());
