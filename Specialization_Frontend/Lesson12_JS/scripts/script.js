// Реализуйте класс Group (групп), который будет иметь следующие свойства: 
// name (название группы), major (специализация), number (количество студентов, по умолчанию 15)
// Реализуйте методы add_student() (добавляет одного студента) и delete_student() (удаляет одного студента)
// Создайте экземпляр этого класса
// Проверьте как работают методы

class Group {
    constructor(name, major, number = 15){
        this.name = name;
        this.major = major;
        this.number = number;
    }

    add_student(amount){
        this.number += 1;
    }
    
delete_student(amount){
    this.number -= 1;
}

}


const gr_1 = new Group('31/32', 'Frontend');

const gr_2 = new Group('25/26', 'Backend', 10);


console.log(gr_1);

console.log(gr_2.name);

gr_1.add_student();

gr_2.delete_student();


console.log(gr_1);

console.log(gr_2);

// Создайте функцию, которая будет создавать экземпляры класса Group и собирать их в один массив

let all_groups = [];

const create_group = (name, major, num) => all_groups.push(new Group(name, major, num));


console.log(all_groups);



create_group('25/26', 'Backend', 10);

create_group('31/32', 'Frontend');






