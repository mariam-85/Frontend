class Car {
    constructor(name, model, country, volume, color, year){
      this.name = name;
      this.model = model;
      this.country = country;
      this.volume = volume;
      this.color = color;
      this.year = year;
    }
  
    get_info(){
      console.log(`Машина: ${this.name} (${this.model}), из страны: ${this.country}`)
    }
  
    get_year(){
      console.log(`Год выпуска: ${this.year}`)
    }
  }
  
  
  // Экземпляр класса - объект, созданный через класс
  // this - контекст, ссылка на объект, с которым происходит действие
  
  
  // Создаем экземпляры классов
  
  const car_1 = new Car('Toyota', 'RAV4', 'Japan', 2.4, 'red', 2020);
  // this.name === car_1.name
  
  const car_2 = new Car('BMW', 'X3', 'Germany', 2.0, 'black', 2018);
  // this.name === car_2.name
  
  const car_3 = new Car('Audi', 'Q3', '', 2.0, 'white', 2018);
  // this.name === car_3.name
  
  
  // Вызываем метод get_info()
  
  // car_1.get_info();
  // car_2.get_info();
  // car_3.get_info();
  
  // car_2.get_year();
  
  
  
  // Литеральная нотация
  const car_1_1 = {
    name: 'Toyota',
    model: 'Rav',
    country: 'Japan',
    volume: 2.4,
    color: 'red',
    year: 2020
  }
  
  

// ЗАДАЧА
// Реализуйте класс Country (Страна), который будет иметь следующие свойства: 
// name (имя), capital (столица), population (численность населения), climat (климат)
//Создайте 3 экземпляра этого класса с разными свойствами
//Выведите в консоль по 1 свойству на выбор из каждого экземпляра класса

//Реализйуте метод get_capital, который выводит в консоль сообщение 'The capital of <COUNTRY> is <CAPITAL>'



class Country {
    constructor(name, capital, population, climat ){
        this.name = name;
        this.capital = capital;
        this.population = population;
        this.climat = climat;
        
    }
    get_capital(){
        console.log(`The capital of ${this.name} is ${this.capital}.`);
}
}
const country_1 = new Country('Russia', 'Moscow', 144.1, 'moderate');
const country_2 = new Country('Germany', 'Berlin', 83.1, 'moderate');
const country_3 = new Country('Armenia', 'Erevan', 3, 'moderate');


console.log(country_1);
console.log(country_2);
console.log(country_3);

country_1.get_capital();

console.log(country_1.capital);
console.log(country_2.climat);
console.log(country_3.population);



