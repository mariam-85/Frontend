// let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

// // Сформируйте новый массив с числами, которые кратны 2. Предложите два способа решения (цикл for и метод .forEach).


// const divideOfTwo = (arr) => {
//     let array1 = []; 
//     for(let i = 0; i < arr.length; i++){
//         array1.push(arr[i] / 2)
//     }
//     return array1
// }

//  console.log(divideOfTwo(array));

//  array.forEach(elem => console.log(elem / 2));

// // Сформируйте новый массив с числами, которые заканчиваются на 5. Предложите два способа решения (цикл for и метод .forEach).

// const endWithFive = (arr) => {
//     let array2 = []; 
//     for(let i = 0; i < arr.length; i++){
//         if(i % 5 === 0 && i % 10 !== 0)
//         array2.push(i)
//     }
//     return array2
// }

//  console.log(endWithFive(array));

// array.forEach(elem => {
//     if(elem % 5 === 0 && elem % 10 !== 0){
//         console.log(elem)
//     }
//  }) ;

// // Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).

// const newArray = (arr) => {
//     let array3 = []; 
//     for(let i = 0; i < arr.length; i++){
//         if(i > 100){
//             arr[i] = '> 100';
//         } else {
//             arr[i] = '< 100';
//         }
        
//     }
// }

//  console.log(newArray(array));

//  array.forEach(elem => {
//      if(elem > 100){
//          console.log('${elem} )
//      }
//  }); 

let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];


 let new_array = array.map(el => el > 100 ? '> 100' : '< 100');

console.log(array);
console.log(new_array);

