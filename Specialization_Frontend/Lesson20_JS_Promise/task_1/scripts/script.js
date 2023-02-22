
const cards_container = document.querySelector('.cards_container');


fetch('https://reqres.in/api/users') // отправляем запрос
  .then(resp => resp.json()) // получаем ответ, преобразовываем в json
  .then(json => render(json.data)) // получаем json, что-то делаем с json

  const render = (data_array) => {
      data_array.forEach(({ first_name, email, avatar }) => {
          const card = document.createElement('div');
          const avatarElem = document.createElement('img');
          const firstnameElem = document.createElement('p');
          const emailElem = document.createElement('a');


          firstnameElem.innerText = first_name;

          avatarElem.src = avatar;
          //avatarElem.setAttribute('src', element.avatar);
          avatarElem.alt = 'avatar';

          emailElem.innerText = email;
          emailElem.href = `mailto:${email}`;
          emailElem.classList.add('email_elem');

          card.classList.add('card');


          card.append(avatarElem, firstnameElem, emailElem);
          cards_container.append(card);


      })
  }

