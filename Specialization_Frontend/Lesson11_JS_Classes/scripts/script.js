//1. Создайте функцию, которая принимает в качестве аргументов объект и ключ объекта, а возвращает значение объекта, доступное по этому ключу.

// Пример: ({ key: 'property' }, 'key') => 'property'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan' }, 'first_name') => 'Nelli'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'last_name') => 'Efremyan'
// Пример: ({ first_name: 'Nelli', last_name: 'Efremyan', age: 27 }, 'age') => 27

const user = {
    first_name: 'Mariam',
    last_name: 'Lofink',
    age: 37
}

const get_value = (obj, key = 'first_name') => obj[key];

console.log(get_value(user));

console.log(get_value(user, 'first_name'));

//console.log(get_value({first_name: 'Mariam', last_name: 'Lofink', age: 37}, 'age'));


// 2. Проверьте, что массив не пустой - в нем есть хотя бы один объект с ключом age.

const people = [
    {
      first_name: 'Ivan',
      last_name: 'Ivanov',
      age: 20,
      city: 'Moscow',
      country: 'Russia',
      active: true
    },
    {
      first_name: 'dmitry',
      last_name: 'Petrov',
      age: 7,
      city: 'Berlin',
      country: 'Germany',
      active: true
    },
    {
      first_name: 'Irina',
      last_name: 'Alexandrova',
      age: 46,
      city: 'Paris',
      country: 'France',
      active: false
    },
    {
      first_name: 'Denis',
      last_name: 'Sokolov',
      age: 10,
      city: 'Rome',
      country: 'Italy',
      active: false
    }
  ];



  console.log(people[0].age); //20
  console.log(people[0].hasOwnProperty('age')); //20
  console.log('age' in people[0]); //20
