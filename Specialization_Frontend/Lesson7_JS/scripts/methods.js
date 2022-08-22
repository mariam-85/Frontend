// МЕТОДЫ МАССИВОВ

// .forEach() - выполяняет переданную функцию один раз для каждого элемента массива, ничего не возвращает (undefined)

let age = [40, 45, 53, 23, 12, 7];
for(let i = 0; i < age.length; i++){
    if(age[i] >= 18){
        console.log(age[i])
    }
}

age.forEach(elem => {
    if(elem >= 18){ 
    console.log(elem)
}
});

age.forEach(elem => console.log(elem / 2));

let age_arr = [];
age.forEach(elem => age_arr.push(elem + 1));

console.log(age_arr);

