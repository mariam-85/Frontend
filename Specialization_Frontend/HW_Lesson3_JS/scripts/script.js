//1. Напишите функцию, которая принимает в качестве аргумента строку, а возвращает ее длину.
//Выведите результат в консоль. 

let getLength = (string) => string.length;
      
console.log(getLength('hello'));

//2.Напишите функцию, которая принимает два аргумента (основание степени и саму степень)
//и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2. 

let getExp = (num1, num2 = 2) => num1 ** num2;
  
console.log(getExp(4, 3));
console.log(getExp(5));

//3.Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение.
//Выведите результат в консоль.
//Предложите два варианта решения (через условный оператор и Math.max()).

let getMaxNum = (num1, num2) => Math.max(num1, num2);

console.log(getMaxNum(13, 67));


let getMaxNum1 = (num1, num2) => {
        if(num1 > num2){
        return num1
        } else {
        return num2
        }
    };

console.log(getMaxNum(45, 18));


//4. Напишите функцию, принимающую в качестве аргументов три числа
//и выводящую в консоль отсортированные числа по убыванию.
//Используйте условный оператор.

let sortNums_3 = (num1, num2, num3) => {
    if(num1 > num2 && num1 > num3){
        if(num2 > num3){
            console.log(num1, num2, num3)
        } else {
            console.log(num1, num3, num2)
        }
    } else if (num2 > num1 && num2 > num3) {
        if(num1 > num3) {
            console.log(num2, num1, num3)
        } else {
            console.log(num2, num3, num1)
        }
    } else {
        if(num1 > num2) {
            console.log(num3, num1, num2)
        } else {
            console.log(num3, num2, num1)
        }
    }
 }

 console.log(sortNums_3(5, 18, 45));
 console.log(sortNums_3(4, -8, 90));


 //5.Напишите функцию, принимающую в качестве аргументов пять чисел
 //и выводящую в консоль наибольшее из них.
 //Используйте условный оператор.

 let maxOf_5 = (a, b, c, d, e) => {
    let max = a;
    if (b > a) {
        max = b;
    } 
    if (max < c) {
        max = c;
    } 
    if (max < d) {
        max = d;
    }
    if (max < e) {
        max = e;
    }
    
    return max;
}

 console.log(maxOf_5(13, 22, 3, 64, 25));

 //let maxOf_5 = (num1, num2, num3, num4, num5) => Math.max(num1, num2, num3, num4, num5);

//console.log(maxOf_5(9, 7, 1, 5, 10));
  


    
    