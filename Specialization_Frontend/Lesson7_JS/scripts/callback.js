// Коллбэк (callback) - это функция, переданная в другую функцию в качестве аргумента
// Функция высшего порядка - это функция, внутрь которой передана другая функция (коллбэк)


// const multThree = () => {
//     return 3 * 2
// }

// const multFour = () => {
//     return 4 * 2
// }

// const multFive = () => {
//     return 5 * 2
// }

// multNumber(6);
// multNumber(7);
// multNumber(8);

// let nums = [1, 2, 3, 4, 5];

// let nums2 = [10, 20, 30, 40];

// const divideNums = (arr) => {
//     let array = [];
//     for(let i = 0; i < arr.length; i++){
//         array.push(arr[i] / 2)
//     }
//     return array
// }

// const multNums = (arr) => {
//     let array = [];
//     for(let i = 0; i < arr.length; i++){
//         array.push(arr[i] * 2)
//     }
//     return array
// }




// console.log(divideNums(nums));
// console.log(divideNums(nums2));


// console.log(multNums(nums));
// console.log(multNums(nums2));

let nums = [1, 2, 3, 4, 5];

const changeNums = (arr, instruction) => {
    let array = [];
    for(let i = 0; i < arr.length; i++){
        array.push(instruction(arr[i]))
    }
    return array
}

 const divide = (num) => num / 2;
 const mult = (num) => num * 2;
 const plus = (num) => num + 2;
 const change = (num) => num = 0;


 console.log(changeNums(nums, divide));
 console.log(changeNums(nums, mult));
 console.log(changeNums(nums, plus));
 console.log(changeNums(nums, change));



