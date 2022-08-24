// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)

// .filter() - возращает новый массив со всеми элементами, прошедшими проверку



let array = [200, 45, 65, 670, 352, 32, 1, 0, 7];

//

let new_array = array.filter(el => el < 100);

console.log(new_array);


//
let users = ['Ivan', 'Victoria', 'Olga', 'Elena', 'Anton'];

let new_users = users.filter(el => el.length >= 5);

console.log(users);
console.log(new_users);

let new_array2 = array.filter(el => el % 10 === 5);

console.log(new_array2);

let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];

let new_arr = arr.filter(el => el.length > 10);
console.log(new_arr);

// .map() - возвращает новый массив с результатом вызова указанной функции для каждого элемента (изменяет каждый элемент)

// Вернуть новый массив с каждым элементом, умноженным на 2

let mult_on_2 = array.map(el => el * 2);
console.log(mult_on_2);

//======================

let age = [23, 15, 18, 56, 43, 28];

// Сформировать новый массив с совершеннолетними
// Сформировать новый массив, где возраст всех совершеннолетних заменен на 100

let age_adult = age.filter(el => el >=18);

console.log(age);
console.log(age_adult);

let age_changed = age.map(el => {
    if(el >= 18){
        return el = 100
    }
})

// let age_changed1 = age_adult.map(el => el = 100);

console.log(age_changed);

// let adults = age.map(el => {
//     if(el < 18) {
//         return el = 'child'
//     }
//     return el = 'adult'

// });

let adults = age.map(el => el < 18 ? 'child' : 'adult');

console.log(age);
console.log(adults);

// Сформируйте массив, в котором числа больше 100 заменены на строку '>100', а числа меньше ста - на '<100'. Предложите два способа решения (цикл for и метод .forEach).



// Сформировать массив из последних цифр элементов => [3, 5, 8, 6, 3, 8]

let new_age2 = age.map(el => el % 10);
console.log(new_age2);