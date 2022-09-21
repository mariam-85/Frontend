//Создайте форму сбора данных работников с тремя полями: Имя, Фамилия, Возраст. Поля ввода должны включать "текст-подсказку". Форма должна собирать полученные данные, а затем формировать карточки работников с полученной информацией.
//Добавьте к форме поля ввода для ставки (rate), количества дней (days) и добавьте в карточку работника его зарплату. Зарплата рассчитывается через умножение ставки на количество дней.

//Добавьте к форме поле ввода для ссылки на фото. Карточки должны включать отображение фотографии.


const form = document.querySelector('.form');
const container = document.querySelector('.container');

form.addEventListener('submit', (event) => {
    event.preventDefault();

  const card = document.createElement('div');
  const nameElem = document.createElement('p');
  const lastName = document.createElement('p');
  const ageElem = document.createElement('p');
  const salaryElem = document.createElement('p');
  const photoElem = document.createElement('img');
  


  const{ name, last_name, age, rate, days, photo } = event.target;//this

  nameElem.innerText = `Name: ${name.value}`;
  lastName.innerText = `Last name: ${last_name.value}`;
  ageElem.innerText = `Age: ${age.value}`;
  salaryElem.innerText = `Salary: ${rate.value * days.value}`;

  photoElem.setAttribute('src', photo.value);
  photoElem.setAttribute('alt', 'photo');

 


  card.classList.add('card');


  card.append(nameElem, lastName, ageElem, salaryElem, photoElem);
  container.append(card);

  name.value = '';
  last_name.value = '';
  age.value = '';
  rate.value = '';
  days.value = '';
  photo.value = '';




})