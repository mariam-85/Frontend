// forEach - перебирает элементы массива и выполняет с ними callback функцию

// map - перебирает элементы массива и выполняет с ними callback функцию
// то, что callback функция возвращает попадает в новый массив

// filter - перебирает элементы массива и выполняет с ними callback функцию
// те элементы, в которыми функция вернула true остаются в итоговом массиве, 
// а иные отбрасываются


// find - возвращает первое значение в массиве, которое при вызове callback 
// возвращает true

// reduce - получает callback функцию, которая получает результат предидущего 
// вызова callback и следующий элемент из массива

//const arr = [12, 4, 32, 45, 6, 43, 23];

//вывести эти числа в консоль (по одному)

//arr.forEach(elem => console.log(elem));

//arr.filter(el => el % 2 === 0).forEach(el => console.log(el));


// arr.forEach(elem => {
//     if (elem % 2 === 0){
//     console.log(elem)
// }
// });

//let new_arr = arr.map(el => el ** 2);
//console.log(new_arr);

// let new_arr = arr.map(el => el % 2 === 0 ? el ** 2 : el);
// console.log(new_arr);

// const result = arr.filter(elem => elem % 2 === 0).map(elem => elem ** 2);
// console.log(result);

// const arr_2 = ['велосипед', 'самокат', 'ролики', 'лыжи'];
// [9, 7, 6, 4]

// написать программу, которая формирует из массива со строками массив с их длинами


// console.log((arr_2.map(elem => elem.length)));

// (arr_2.map(elem => elem.length));

// console.log(arr_2);

// console.log(arr_2.map(elem => ({
//     word: elem,
//     length: elem.length
// })
//     ));


   const arr = [
        {
            word: 'велосипед', 
            length: 9
        },
        {
            word: 'самокат', 
            length: 7
        },
        {
            word: 'ролики', 
            length: 6
        },
        {
            word: 'лыжи', 
            length: 4
        }
    ];

    //console.log(arr_3.map(elem => elem.word));
    

    
    // необходимо сформировать массив из названий (word)

const result = arr.map(({ word, length }) => ({ word, length }));

console.log(result);