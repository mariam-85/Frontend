const lst = [-12, 4, -32, 45, 43, -23];
// lst.forEach(elem => console.log(elem));

// function forEach(lst, callback){
//     for(let i = 0; i < lst.length; i++){
//         callback(lst[i], i, lst);
//     }
// }

// forEach(lst, elem => console.log(elem));

 // написать forEach, который выводит только четные числа в консоль

// lst.forEach(elem => {
//     if(elem % 2 === 0){
//     console.log(elem);
//     }
// });


// написать forEach который выводит в консоль наибольше значения из массива

// let result = lst[0];

// lst.forEach(elem => {
//     if(elem > result){
//     result = elem;
//          }
//      });

//      console.log(result);

// function map(lst, callback){
//     const new_array = [];
//     for(let i = 0; i < lst.length; i++){
//         const new_elem = callback(lst[i], i, lst);
//         new_array.push(new_elem);
//     }
//     return new_array
// }

    //  const result = lst.map(elem => elem ** 2);
    //  console.log(result);


    //  function func(value){
    //      if(value < 0){
    //          value *= -1;
    //      }
    //      return value
    //  }

    //  console.log(lst.map(func));

    // const result = lst.map(even => even < 0 ? -even : elem);
    // console.log(result);

     // 

    //  function func(even){
    //     if(even % 2 !== 0){
    //         even += 1;
    //     }
    //     return even
    // }

    // console.log(lst.map(func));

    // const result = lst.map(even => even % 2 === 0 ? even : even + 1);
    // console.log(result);

// console.log(lst.filter(elem => elem > 0));

// const words = ['велосипед', 'самокат', 'ролики', 'телефон', 'стол', 'люстра'];

// // // сформировать массив, который состоит из слов, не длиннее 6 символов

// console.log(words.filter(elem => elem.length <= 6));

let words = ['велосипед', 'самокат', 'ролики', 'телефон', 'стол', 'люстра'];

const add = word => words = [...words, word];


add('stul');
console.log(words);

const add2 = word => words = [...words, word];


// add('televisor');
// console.log(words);

const del = word => words = words.filter(elem => elem !== word);


// add('televisor');

del('самокат');

console.log(words);

const read = () => words.forEach(elem => console.log('Word: ' + elem));


read();

const search = (substr) => words.filter(word => word.startsWith(substr));









console.log(search('s'));

