//Создайте переменную user и присвойте ей значение:
//'   Ivan Ivanov    '.
//Выведите переменную user в консоль,
//но без лишних пробелов по краям.

let user = '   Ivan Ivanov    ';
console.log(user.trim());

//Напишите программу,
//которая выводит в консоль рандомное/случайное число
//от 0 до 1 и округляет его до третьего знака после точки.
//Воспользуйтесь методом toFixed().

let number = (Math.round(Math.random()).toFixed(3));
//let number = Math.round(Math.random());
//let fixed = number.toFixed(3);
//console.log(fixed);
console.log(number);

//Выведите на экран первую и последнюю буквы предложения,
//записанного в константу text (текст строки произвольный),
//в следующем формате:
//First: <первая буква строки>
//Last: <последняя буква строки>

let string = "Выведите на экран первую и последнюю буквы предложения, записанного в константу text";
console.log('First:' + string[0]);
console.log('Last:' + string[string.length-1]);


