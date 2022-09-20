// ЗАДАЧА 1
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div)
// При нажатии на кнопку в контейнере создается параграф с текстом зеленого цвета (текст взять произвольный)

// const button = document.querySelector('.button');
// const container = document.querySelector('#container');

// button.addEventListener('click', () => {
//     const text = document.createElement('p');
//     text.innerText = 'Welcome to IT-World!';
//     text.style.color = 'green';
//     text.classList.add('text');
//     container.append(text);
// });

// ЗАДАЧА 2
// В index.html в тэге body есть два объекта: кнопка (button) и контейнер (div).
// При нажатии на кнопку в контейнере создаются желтые квадраты 300х300px. К контейнеру применить свойство grid.


const button = document.querySelector('.button');
const container = document.querySelector('#container');

button.addEventListener('click', () => {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    container.append(squares);
});
