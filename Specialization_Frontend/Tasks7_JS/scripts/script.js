class Panda{
constructor(name, age, energy){
    this.name = name;
    this.age = age;
    this.energy = 100;
}
// доработайте метод eat таким образом,
//чтобы при каждом вызове добавлялось 20 процентов энергии. 
//Если энергии уже 100 процентов выведите какое-нибудь сообщение и
//не прибавляйте энергию
    eat(){
        if(this.energy === 100){
            console.log('Please! Stop eat!');
        }else{
            this.energy += 20;
         console.log('nyam-nyam!', `energy: ${this.energy}`);
    }
}

    fall(){
       if(this.energy === 0){
           console.log('Please! Stop!');
       }else{
           this.energy -= 20;
        console.log('oops!', `energy: ${this.energy}`);
    }
}
}

const karl = new Panda('karl', 18);
const tom = new Panda('tom', 15);
const bobik = new Panda('bobik', 20);



karl.eat();
tom.eat();

karl.fall();
tom.fall();


console.log(karl);
console.log(tom);
console.log(bobik);

