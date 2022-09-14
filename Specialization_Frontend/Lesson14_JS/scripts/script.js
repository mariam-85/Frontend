const rootElem = document.querySelector('.root');

const card = document.createElement('div');

const idElem = document.createElement('p');
const firstnameElem = document.createElement('p');
const lastnameElem = document.createElement('p');
const ageElem = document.createElement('p');
const salaryElem = document.createElement('p');
const emailElem = document.createElement('a');
const emailTextElem = document.createElement('span');
const imgElem = document.createElement('img');


idElem.innerText = 'ID: 1';
firstnameElem.innerText = 'First name: Olga';
lastnameElem.innerText = 'Last name: Petrova';
ageElem.innerText = 'Age: 18';
salaryElem.innerText = 'Salary: 1500';
emailTextElem.innerText = 'Email: ';
emailElem.innerText = 'example@gmail.com';



card.classList.add('card'); // dobavlyaem class w html

imgElem.setAttribute('src', 'https://reqres.in/img/faces/12-image.jpg');

imgElem.setAttribute('alt', 'photo');

emailElem.setAttribute('href', 'mailto:example@gmail.com');

//imgElem.src = 'https://reqres.in/img/faces/12-image.jpg'; // mozhno i tak
//imgElem.alt = 'photo';


card.append(idElem, firstnameElem, lastnameElem, ageElem, salaryElem, emailTextElem, emailElem, imgElem);
rootElem.append(card);
