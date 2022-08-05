// const age = 37;
// const name = 'Mariam';
// const last_name = 'Lofink';
// const is_cool = true;


// console.log(name + ' ' + last_name);

// console.log(age);
// console.log(name);
// console.log(is_cool);

// console.log(typeof(age));
// console.log(typeof(name));
// console.log(typeof(is_cool));

// const red = 134;
// const green = 124;
// const blue = 56;

// //rgb(134, 124, 56);

// console.log('rgb(' + red + ', ' + green + ', ' + blue +');');

// console.log(`rgb(${red}, ${green}, ${blue});`)


// const name = 'Mariam';
// const lastname = 'Lofink';
// const age = 28;

// console.log('Hallo' + ',' + ' ' + name + ' ' + lastname + '!' + ' ' + 'Sie sind' +  ' ' + (37 * 365 * 24 * 60) + ' ' + 'Stunden alt' + '!' );
// console.log(`Hallo ${name} ${lastname}! Sie sind ${age * 365 * 24 * 60} Minuten alt.` );

// const value_1 = 112;
// const value_2 = 25;

// console.log(value_1 + value_2);
// console.log(value_1 - value_2);
// console.log(value_1 * value_2);
// console.log(value_1 / value_2);
// console.log(value_1 % value_2);


// const value_1 = 12;

// console.log(value_1); //12 -  zdes' chislo
// console.log(''+value_1); //preobrasovali v stroku


//Takzhe mozhno preobrasovat' i stroku v chislo +''
// const value_1 = '12';

// console.log(+value_1);



// console.log(String(value_1));
// console.log(typeof(String(value_1)));

// const a = +prompt('Enter the first number: '); //preobrazovyvaem stroki v chisla
// const b = +prompt('Enter the first number: ');



// console.log(`${a}+${b}=${a + b}`);
// console.log(`${a}-${b}=${a - b}`);
// console.log(`${a}*${b}=${a * b}`);
// console.log(`${a}/${b}=${a / b}`);

// const a = prompt ('Enter the number');
// if (a > 0){
//     console.log(`the number ${a} is positive`);
// }else{
//     console.log(`the number ${a} is negative`);
// }

const a = +prompt ('Enter the first number');
const b = +prompt ('Enter the second number');

if (a > b){
    console.log(`the number ${a} is more the number ${b} by ${a-b}`);
}else if (a <b) {
    console.log(`the number ${b} is more the number ${a} by ${b-a}`);
}else{
    console.log('the numbers are equal');
}











