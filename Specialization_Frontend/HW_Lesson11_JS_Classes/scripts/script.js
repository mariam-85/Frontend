//ЗАДАЧА 1
// Реализуйте класс Language (Язык), который будет иметь следующие свойства:
// name (имя), alphabet, (латинский, кирилица и т.д.), country (страна, в которой говорят на этом языке)

class Language {
    constructor(name, alphabet, country){
        this.name = name;
        this.alphabet = alphabet;
        this.country = country;
    }
    get_Info(){
        console.log(`Язык: ${this.name}, Алфавит: ${this.alphabet}, Страна, в которой говорят на этом языке: ${this.country}.`)
    }
}

//Создайте экземпляр этого класса

const lang_1 = new Language('Russian', 'Cyrillic', 'Russia');

const lang_2 = new Language('German', 'Latin', 'Germany');

const lang_3 = new Language('English','Latin', 'GB, USA, Kanada');

//Выведете в консоль все свойства созданного класса


console.log(lang_1);

console.log(lang_2.name);

console.log(lang_3.country);


// Реализуйте метод get_info (выводит в консоль строку 'Язык: <name>, Алфавит: <alphabet>, Страна, в которой говорят на этом языке <country>)

lang_1.get_Info();

lang_2.get_Info();

lang_3.get_Info();


//ЗАДАЧА 2 (*посложнее)
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия),
//rate (ставка за день работы), days (количество отработанных дней).

class Worker {
    constructor(name, surname, rate, days){
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        //this.salary = rate * days;
    }
//Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
    get_Salary(){
        return this.rate * this.days
        //console.log(`Заработная плата работника ${this.name} ${this.surname} за фактически отработанные ${this.days} дней составила ${this.rate * this.days}€.`)
    }

    add_days(amount){
        this.days += amount;
    }
    delete_days(amount){
        this.days -= amount;
    }
}


const worker_1 = new Worker ('Mariam', 'Lofink', 250, 30);

const worker_2 = new Worker ('Alex', 'Eck', 220, 28);

console.log(worker_1);

console.log(worker_2);

console.log(worker_1.get_Salary());

worker_2.get_Salary();

//С помощью класса создайте двух рабочих и найдите сумму их зарплат.

const get_Sum = (worker_1.rate * worker_1.days) + (worker_2.rate * worker_2.days);

console.log(get_Sum);




// Реализуйте методы add_days (увеличивает количество дней на amount) и delete_days (уменьшает количество дней на amount)

console.log(worker_1);

worker_1.add_days(7);

console.log(worker_1);

console.log(worker_2);

worker_2.add_days(5);

console.log(worker_2);
