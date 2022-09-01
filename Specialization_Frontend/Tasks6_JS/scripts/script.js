// let lst = ['Alexander', 'Lofink', 8, 0 ];
// console.log(lst);

let user = {
    name: 'Alexander',
    lastname: 'Lofink',
    age: 8,
    salary: 0
};

// console.log(user['lastname']);
// console.log(user.lastname);

user.name = 'Michael'
user.id = 1
delete user.salary ;
console.log(user);


let product = {
    id: 1,
    title: 'Coat',
    price: 50
};

product.price *= 1.2;
product.description = 'brown';

console.log(product);

const products = [
    {
        id: 1,
        title: 'Fahrrad',
        price: 55000
    },
    {
        id: 2,
        title: 'In-Liner',
        price: 15000
    },
    {
        id: 3, 
        title: 'Skateboard',
        price: 10000
    }
];

console.log(products);

products.forEach(el => console.log(el));

products.forEach(el => console.log(el.title));

const new_price = products.filter(el => el.price > 12000);

console.log(new_price);

const new_price_2 = products.filter(el => el.price > 12000)
                            .map(el => el.title);

console.log(new_price_2);

const total_price = products.reduce((total, el) => total + el.price, 0);

console.log(total_price);

const customers = [
    {
        id: 1,
        name: 'Maksim',
        orders: [10000, 23000, 19000]
    },
    {
        id: 2,
        name: 'Oleg',
        orders: [12000, 43000, 9000]
    },
    {
        id: 1,
        name: 'Olga',
        orders: [22000, 4400, 6000]
    }, 
    {
        id: 1,
        name: 'Semen',
        orders: [32000, 65000, 11000]
    },
];

console.log(customers);

const new_list =  customers.map(el => {
    return{
        id: el.id,
        name: el.name,
        order_total: el.orders.reduce((total, el) => total + el)
    }
})

console.log(new_list);



