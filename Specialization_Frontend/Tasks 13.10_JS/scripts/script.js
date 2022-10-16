// Task 1
fetch('https://jsonplaceholder.typicode.com/users/5')
    .then(resp => resp.json())
    .then(data => console.log(data));

// Task 2

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => console.log(data));

//Task 3

    function showUser(id, callback){
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(resp => resp.json())
        .then(data => callback(data));
    }

    // showUser(4)
    // showUser(1)
    // showUser(3);

    showUser(3, console.log);

//Task 4


const root = document.querySelector('#root');


function addUser(user){

    const container = document.createElement('div');
    const name = document.createElement('p');
    const username = document.createElement('p');
    const email = document.createElement('a');
    container.append(name, username, email);
    container.classList.add ('container');
    name.innerText = user.name;
    username.innerText = user.username;
    email.innerText = user.email;
    email.href = `mailto:${user.email}`;
    root.append(container);

}

function showUser(id, callback){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(resp => resp.json())
    .then(data => callback(data));
}


//showUser(3, addUser);

// Task 5

const add_form = document.querySelector('#add_form');

add_form.addEventListener('submit', event => {
    event.preventDefault();
    const id = event.target.id.value;
    showUser(id, addUser);
})