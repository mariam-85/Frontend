// function pow(value, p) {
// const result = value ** p;
// return result
//  }

//  const pow = (value, p) => {
//      const result = value ** p;
//      return result
//  }

//  console.log(pow(3, 2));
//  console.log(pow(4, 2));


//  const pow = (value, p) => value ** p;

// console.log(pow(3, 2));
// console.log(pow(4, 2));

// const getTrueOrFalse = (num) => {
//     if (num > 0) {
//         return true
//     } else {
//         return false
//     }
// }
//  console.log(getTrueOrFalse(3));
//  console.log(getTrueOrFalse(-5));

//  const getTrueOrFalse = num => num > 0;
    
//  console.log(getTrueOrFalse(3));
//  console.log(getTrueOrFalse(-5));

//  const isLeapYear = year => year % 4 === 0 && year % 100 !=0 || year % 400 === 0;

//  console.log(isLeapYear(1996));
//  console.log(isLeapYear(2003));
//  console.log(isLeapYear(2022));
//  console.log(isLeapYear(1985));

//  const isNumberEven = number => number % 2 === 0;

//  console.log(isNumberEven(8));
//  console.log(isNumberEven(3));
//  console.log(isNumberEven(29));

//  const a = isNumberEven;
//  console.log(a(13));

const compare = (a, b) => {
    if (a > b){
        return a
        } else {
        return b
        }
    }

const run_with_input_data = (func) =>{
    const value_1 = +prompt('Enter the number: ');
    const value_2 = +prompt('Enter the number: ');
    return func(value_1, value_2)
}

const result = run_with_input_data(compare);
console.log(result);



    