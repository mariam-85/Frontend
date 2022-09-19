// const box = document.querySelector('.box');
// const container = document.querySelector('.container');

// box.addEventListener('click', () => {
//     container.innerText = 'red box';
//     container.style.color = 'red';
//     document.body.style.backgroundColor = 'blue';
//  });

const btn = document.querySelector('.btn');
const container = document.querySelector('#container');

btn.addEventListener('click', () => {
    const text = document.createElement('p');
    text.innerText = 'Hello!';
    text.classList.add('text');
    container.append(text);
});
