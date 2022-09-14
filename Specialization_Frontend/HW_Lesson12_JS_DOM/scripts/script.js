//В файле html в тэге body есть один элемент div с классом root.
//Используя JS (DOM), создать карточку товара (div), которая должна включать в себя следующие данные: 
//Артикул, наименование товара, цена. Данные взять произвольные.
//Применить стили к карточке: width, background-color, border, border-radius, padding, margin.//


// const root = document.querySelector('.root');

// root.style.padding = '20px';
// root.style.margin = '10px';
// root.style.backgroundColor = 'Gray';
// root.style.border = 'black';
// root.style.borderRadius = '5px';




// const elem1 = document.querySelector('.root .code');

// elem1.innerText = 'Vendor code: 123';

// elem1.style.padding = '10px';


// const elem2 = document.querySelector('.root .name');

// elem2.innerText = 'Product name: Dress';

// elem2.style.padding = '10px';


// const elem3 = document.querySelector('.root .price');

// elem3.innerText = 'Price: 140€';

// elem3.style.padding = '15px';

// const random_color = () =>{
//          const r = Math.round(Math.random() * 255);
//          const g = Math.round(Math.random() * 255);
//          const b = Math.round(Math.random() * 255);
//          return `rgb(${r},${g}, ${b})`
//      }

// root.addEventListener('click', () =>{
//               root.style.color = random_color();
//               root.style.backgroundColor = random_color();
//               root.style.padding = '20px';
             
//           })


const rootElem = document.querySelector('.root');

const card = document.createElement('div');
const art = document.createElement('p');
const title = document.createElement('p');
const price = document.createElement('p');

art.innerText = 'Articul: 1234';
title.innerText = 'Title: iPhone 13 Pro';
price.innerText = 'Price: 1300';

card.innerHTML = '<p>hello</p>';

card.classList.add('card');

card.append(art, title, price);

rootElem.append(card);














