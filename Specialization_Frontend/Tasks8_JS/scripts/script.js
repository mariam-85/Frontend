// создать класс User со свойствами name и age
// и методом sayHi который выводит в консоль фразу "привет"

class User {

    static roles = ['root', 'admin', 'manager', 'user'];

    constructor(name, age, role){
      this.name = name;
      this.age = age;
      this.roles = ['root', 'admin', 'manager', 'user'];
      if(User.roles.includes(role)){
          this.role = role;
      }else{
          this.role = undefined;
      }
      
    }
  
    sayHi(){
        console.log(`Hallo, ${this.name}, you are ${this.age} years old.`);
    }
  
    change_name(new_name){
        this.name = new_name;
    }

    b_day(){
        this.age ++;
        console.log('Congrates!!');

        // добавить метод b_day который увеличиввает возраст на единицу
       // и выводит поздравления в консоль   
    }

    change_role(new_role){
        if(User.roles.includes(new_role)){
            this.role = new_role;
        }else{
            this.role = undefined;
        }
    }

  }
  
  const user_1 = new User('Mariam', 37, 'admin');

  console.log(user_1);

  user_1.sayHi();


const user_2 = new User('Alex', 8, 'student');

  console.log(user_2);

  user_2.sayHi();


  // [12, 4, 3, 5].includes(13)

// проверить указываемую роль и если она входит в список допустимых указать ее
        // пользователю
        // в ином случае в свойство role указать undefined


        // добавить метод изменения роли, который получает в качестве аргумента новую роль
// и изменяет свойство role в случае, если роль указана верно
// если роль неверна, то в свойство role указать undefined