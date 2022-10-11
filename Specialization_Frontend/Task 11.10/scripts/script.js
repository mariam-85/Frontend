// fetch('https://reqres.in/api/users/1')
// .then(
//     resp => resp.json(resp),
//     err => console.log(err)
// )
// .then(
//     resp => console.log(resp),
//     err => console.log(err)
// );


const rootElem = document.querySelector('#root');

const user = {
    data: {
        avatar: "https://reqres.in/img/faces/2-image.jpg",
        email: "janet.weaver@reqres.in",
        first_name: "Janet"
    }

}

function addUser(user){

    const container = document.createElement('div');

    const img = document.createElement('img');
    img.src = user.data.avatar;

    const a = document.createElement('a');
    a.innerText = user.data.email;
    a.href = `mailto:${user.data.email}`;

    const p = document.createElement('p');
    p.innerText = user.data.first_name;

    container.append(img, a, p);
    rootElem.append(container);

}

fetch('https://reqres.in/api/users/2')
.then(
    resp => resp.json(),
    err => console.log(err)
)
.then(
    resp => addUser(resp),
    err => console.log(err)
);

function getUser(user_id){
    fetch(`https://reqres.in/api/users/${user_id}`)
    .then(
        resp => resp.json(),
        err => console.log(err)
    )
    .then(
        resp => addUser(resp),
        err => console.log(err)
    );
}