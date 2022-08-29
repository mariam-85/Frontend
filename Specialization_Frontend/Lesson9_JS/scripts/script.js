// Создайте функцию, принимающую массив и возвращающую массив с отрицательными числами

let arr = [1, 34, -10, 8, -5, -3];

const negative_nums = (arr) => {
  let new_arr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      new_arr.push(arr[i])
    }
  }
  return new_arr
}


// Создайте функцию, принимающую массив и возвращающую массив с положительными числами

const positive_nums = (arr) => {
  let new_arr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      new_arr.push(arr[i])
    }
  }
  return new_arr
}