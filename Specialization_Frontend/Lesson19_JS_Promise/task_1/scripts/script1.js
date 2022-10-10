// fetch('https://jsonplaceholder.typicode.com/users')
// .then(resp => resp.json())
// .then(json_data => console.log(json_data))

// fetch('https://jsonplaceholder.typicode.com/users/8')
// .then(resp => resp.json())
// .then(json => console.log(json))

// fetch('https://reqres.in/api/users?page=1')
// .then(res => res.json())
// .then(json => console.log(json))
// //.then(json => console.log(json.data[1].email))

const cards_container = document.querySelector('.cards_container');

fetch('https://jsonplaceholder.typicode.com/users/1')
.then(res => res.json())
.then(json => render(json))

const render = (json) => {
    const card = document.createElement('div');
    const nameElem = document.createElement('p');
    const userNameElem = document.createElement('p');
    const phoneElem = document.createElement('p');

    nameElem.innerText = `Name: ${json.name}`;
    userNameElem.innerText = `Username: ${json.username}`;
    phoneElem.innerText = `Phone: ${json.phone}`;

    card.append(nameElem, userNameElem, phoneElem);
    cards_container.append(card);

}





