const products = [
    {
        id: 1,
        title: 'велосипед',
        price: 45000
    },
    {
        id: 2,
        title: 'ролики',
        price: 15000
    },
    {
        id: 3,
        title: 'самокат',
        price: 12000
    },
    {
        id: 4,
        title: 'лыжи',
        price: 23000
    },
    {
        id: 5,
        title: 'сноуборд',
        price: 20000
    }
];

const rootElem = document.querySelector('#root');

function Products(id, title, price){
const card = document.querySelectorAll('div');
const id_p = document.querySelectorAll('p');
const title_p = document.querySelectorAll('p');
const price_p = document.querySelectorAll('p');

id_p.innerText = id;
title_p.innerText = title;
price_p.innerText = price;

card.append(id_p, title_p, price_p);
card.classList.add('product-item');

return card
}

const container = document.createElement('div');


products.forEach(product => {
    const productElement = createProductElement(product.id, product.title, product.price);
   container.append(productElement); 
})

rootElem.append(container);









