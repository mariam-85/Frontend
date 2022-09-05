// Дан массив с данными
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
  //1. Сформируйте массив строк - каждая строка включает в себя информацию по каждому человеку в следующем формате: "<Имя> <Фамилия> (<Город>, <Страна>)". Пример => ['Ivan Ivanov (Moscow, Russia)', {...}, {...}, ...]
  
  const people_information = people.map(person => `${person.first_name} ${person.last_name} (${person.city}, ${person.country})`);

  console.log(people_information);
  
  
  // 2. Сформируйте массив из активных людей

const active_people = people.filter(person => person.active === true);

//const active_people = people.filter(person => person.active);


console.log(active_people);

  

//3. Сформируйте массив из людей, чьи имена начинаются на 'D' (регистр буквы может быть и нижним)
  

const people_d = people.filter(person => person.first_name[0] === 'D' || person.first_name[0] === 'd');
  
const people_d_2 = people.filter(person => person.first_name[0].toUpperCase() === 'D');

console.log(people_d);

console.log(people_d_2);


//4. Получите из массива объект, где страной проживания человека является 'Germany'
  

//const person_live_in_germany = people.filter(person => person.country === 'Germany');

const person_live_in_germany = people.find(person => person.country === 'Germany');

console.log(person_live_in_germany);

// 5. Сформируйте массив из совершеннолетних пользователей. И выведите в консоль результат в формате: [ {<Имя> <Фамилия> (<возраст>), <Страна> (<Город>)}, {...}, {...}, ...]

const adults = people.filter(person => person.age >= 18).map(person => `${person.first_name} ${person.last_name} (${person.age}), ${person.country} (${person.city})`);

console.log(adults);


// 6. Измените у первого элемента значение first_name на "Petr" и age на 99;


people[0].first_name = 'Petr';

people[0].age = 99;


console.log(people);

