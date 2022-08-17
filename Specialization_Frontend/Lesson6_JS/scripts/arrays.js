//Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

const get_letter = (str) => {
    for(let i = 0; i < str.length; i ++){
        console.log(str[i])
    }
}

get_letter('Hello');

// MASSIV ARRAY


// Найти длину последнего элемента массива. Заранее не известна длина массива

let str = 'hello, world';
let elements = ['hello', 5, true, false, 23, 'bye', str];

console.log(elements[elements.length - 1].length);

let last_element = elements[elements.length - 1];
console.log(last_element[last_element.length - 1]);

// Создайте функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива.
// Если входной массив пуст, функция возвращает null.
// Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов.

// Для начала пропишите аргументы функции.  

// Пример: [ 'one', 'two', 'three' ] => 'three'

const get_longest_string = (array) => {
    let result = array[0];
    if(array.length === 0){
        return null
    }

    for(let i = 0; i < array.length; i++){
        if(array[i].length > result.length){
            result = array[i]
            
        }
    }
    return result
}

console.log(get_longest_string([ 'one', 'two', 'three', 'longest' ]));
console.log(get_longest_string([]));