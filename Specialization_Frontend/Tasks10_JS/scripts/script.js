const data = [
    {
        id: 1,
        name: 'Anatoly',
        email: 'anatoly@mail.ru',
        avatar: '../media/face.jpeg'
    },

    {
        id: 2,
        name: 'Maxim',
        email: 'maxim@mail.ru',
        avatar: '../media/face.jpeg'
    },

    {
        id: 3,
        name: 'Anton',
        email: 'anton@mail.ru',
        avatar: '../media/face.jpeg'
    },

    {
        id: 4,
        name: 'Oleg',
        email: 'oleg@mail.ru',
        avatar: '../media/face.jpeg'
    },
]

const root = document.querySelector('#root');

function getCard(name, email, avatar){
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const emailElem = document.createElement('a'); // добавить почту (тег a) в котором внутри будет указана почта 
    // и в качестве атрибута href
    const imgElem = document.createElement('img'); // добавить картинку с аватаркой и вставить ее перед именем и email
    
    card.classList.add('card'); //  1) добавить класс card для элемента card
    
    nameElem.innerText = name;
    emailElem.innerText = email;
    emailElem.href = 'mailto: ' + email;
    imgElem.src = avatar;
    card.append(imgElem, nameElem, emailElem);
    return card
}

data.forEach(user => {
    const card = getCard(user.name, user.email, user.avatar);

   
    root.append(card);
})






  