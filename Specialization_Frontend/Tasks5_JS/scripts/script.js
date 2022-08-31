const lst = [12, -43, 32, 3, 16, -45, 56, 43];

// используя метод forEach выведите квадраты этих чисел в консоль

lst.forEach(elem => console.log(elem ** 2));


// используя forEach выведите в консоль только четные числа


lst.forEach(elem => {
    if(elem % 2 === 0){
        console.log(elem)
    }
});

// for(let i = 0; i < lst.length; i++){
//     if(lst[i] % 2 === 0){
//         console.log(lst[i])
//     }
// }


// пользуясь методом map реализуйте новый массив, в котором все отрицательные значения были преобразованы в положительные

let lst2 = lst.map(el => el > 0 ? el : el * -1);

// let lst2 = lst.map(el => el < 0 ? -el : el);


console.log(lst2);


// const lst2 = lst.map(el =>  {
//     if(el < 0){
//         return -el
//     } else {
//         return elem
//     }
// });

// console.log(lst2);


// с использование метода map реализуйте процесс, который формирует новый массив
// состоящий из булевых значений
// если число в изначальном массиве четное, то в результирующий добавляется true, в ином случае false

let new_array = lst.map(el => el % 2 === 0);

//let new_array = lst.map(el => !(el % 2));

console.log(new_array);


// используя метод filter сформировать массив, который состоит только их чисел, меньше 10

let new_lst = lst.filter(el => el < 10);
console.log(new_lst);

const arr = [12, 4, 45, 32, 3, 43];

const result = arr.reduce((prev, value) => prev + value, 1000);

console.log(result);


// используя метод reduce найдите произведение всех чисел массива


const result2 = arr.reduce((prev, value) => prev * value);

console.log(result2);

// используя метод reduce найдите максимальное значение в массиве


const result3 = arr.reduce((prev, value) => {
    if(prev > value){
        return prev
    }else{
        return value
    }
});

// const result3 = arr.reduce((prev, value) => prev > value ? prev : value);

console.log(result3);


// доработать процесс reduce, чтобы он выводил сумму четных чисел



const result4 = arr.reduce((prev, value) => (value % 2 === 0 ? prev + value : prev + 0));

console.log(result2);
