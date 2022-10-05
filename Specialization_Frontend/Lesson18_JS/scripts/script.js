// Вывести текст, введенный в инпут, в консоль

const showTextBtn = document.querySelector('.show_text_btn');
const showTextInput = document.querySelector('.show_text_input');

showTextBtn.addEventListener('click', () => console.log(showTextInput.value));

//Поменять текст в инпуте с ??? на !!!

const changeTextBtn = document.querySelector('.change_text_btn');
const changeTextInput = document.querySelector('.change_text_input');

changeTextBtn.addEventListener('click', () => {changeTextInput.value = '!!!';
});


//Поменять цвет фона на черный


const black_mode_btn = document.querySelector('.black_mode_btn');

black_mode_btn.addEventListener('click', () => document.body.style.backgroundColor = 'black');

//Поменять цвет на черный/белый

const change_mode_btn = document.querySelector('.change_mode_btn');
//change_mode_btn.addEventListener('click', () => document.body.classList.toggle('black_mode'));

change_mode_btn.addEventListener('click', () => {
    const backgroundColor = document.body.style.backgroundColor === 'black' ? 'white' : 'black';
    document.body.style.backgroundColor = backgroundColor;
});


// classList.add('class') // добавляет класс
// classList.remove('class') // удаляет класс
// classList.toggle('class') // удаляет класс, если он есть. добавляет класс, если его нет

//Менять цвет кнопки на случайный

const randome_color_btn = document.querySelector('.randome_color_btn');

const random_color = () => Math.round(Math.random() * 255);

//Math.random() => дробное от 0 до 1
//Math.random() * 255 => дробное от 0 до 255
//Math.round(Math.random() * 255) => целое число от 0 до 255

randome_color_btn.addEventListener('click', (event) => event.target.style.backgroundColor = `rgb(${random_color()}, ${random_color()}, ${random_color()})`);

//Менять цвет фонa на случайный

const randome_mode_btn = document.querySelector('.randome_mode_btn');

randome_mode_btn.addEventListener('click', () => document.body.style.backgroundColor = `rgb(${random_color()}, ${random_color()}, ${random_color()})`);   


// randome_mode_btn.addEventListener('click', () =>{
//     document.body.style.backgroundColor = `rgb(${random_color()}, ${random_color()}, ${random_color()})`
//      })


//Менять содержимое инпута на значение из массива

const change_btn = document.querySelector('.change_btn');
const change_input = document.querySelector('.change_input');
const symbols = ['...', '!!!', '+++', '***'];
let symbols_index = 0;

change_btn.addEventListener('click', () => change_input.value = symbols[symbols_index++ % symbols.length]);

//symbols_index++ % symbols.length
// 0 % 4 = 0
// 1 % 4 = 1
// 2 % 4 = 2
// 3 % 4 = 3
// 4 % 4 = 0
// 5 % 4 = 1
// 6 % 4 = 2
// 7 % 4 = 3
// 8 % 4 = 0


//Создать слайдер с фотографиями из массива

const photos = [
    'https://icdn.lenta.ru/images/2022/06/13/19/20220613193918938/square_320_606658bb7374481a05a664f151a8d888.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg/1200px-African_Elephant_%28Loxodonta_africana%29_male_%2817289351322%29.jpg',
    'https://i.ytimg.com/vi/ViAath1B5WY/maxresdefault.jpg',
    'https://cdnn21.img.ria.ru/images/153009/29/1530092975_240:0:1680:1440_1920x0_80_0_0_9df118e773d0e9f5c788eabb7b6f2aad.jpg'
  ]

let photoIndex = 0;

const img_slider = document.querySelector('.img_slider');


img_slider.addEventListener('click', event => event.target.src = photos[photoIndex++ % photos.length]);




// 2. Создать слайдер картинок с кнопками

const img_slider1 = document.querySelector('.img_slider1');
const [ left_btn, right_btn ] = document.querySelectorAll('.triggers button');

let photoIndex_1 = 0;

right_btn.addEventListener('click', () => img_slider1.src = photos[++photoIndex_1 % photos.length]);

left_btn.addEventListener('click', () => {
    if(photoIndex_1 === 0) {
        photoIndex_1 = photos.length
    }
    img_slider1.src = photos[--photoIndex_1 % photos.length]
});


// a++ - сначала возвращает значение, а потом увеличивает его на единицу
// ++a - сначала увеличивает на единицу, а потом возвращает

// 1. Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей

const change_size = document.querySelector('.change_size');

let btn_params = 30;

const change_size_render = (params) => {
    change_size.style.width = params + 'px';
    change_size.style.height = params + 'px';
}

change_size_render[btn_params];

change_size.addEventListener('click', () => {
    btn_params += 10;
    change_size_render(btn_params);
});

// const makebigger = document.querySelector(".makebigger");
// let width = 130;
// let height = 130;
// makebigger.style.width = width + "px";
// makebigger.style.height = height + "px";

// makebigger.addEventListener("click", (event) => {
//   width += 20;
//   height += 20;
//   event.target.style.width = width + "px";
//   event.target.style.height = height + "px";
// });

//Создать генератор бросаемых костей

const game_btn = document.querySelector('.game_btn');

const game_result = document.querySelector('.game_result');


const get_num = () => Math.round(Math.random() * 5 + 1); // 1 - 6

//Math.random() => дробное от 0 до 1
//Math.random() * 5 => дробное от 0 до 5
//Math.random() * 5 + 1 => дробное от 1 до 6
//Math.round(Math.random() * 5 + 1) => целое от 1 до 6

game_btn.addEventListener('click', () => game_result.innerText = `${get_num()} x ${get_num()}`);

// Создать описанный в форме элемент

const add_form = document.querySelector('.add_form');

const form_result = document.querySelector('.form_result');

add_form.addEventListener('submit', (event) => {

    event.preventDefault();

    const { type, content, color } = event.target

    form_result.innerText = '';

    const elem = document.createElement(type.value);

    elem.innerText = content.value;

    elem.style.color = color.value;

    form_result.append(elem);

    type.value = '';
    content.value = '';
    color.value = '';
})



/* const user = {
  firstname: 'Anton',
  lastname: 'Ivanov',
  age: 38
}

const showMessage = obj => {
  console.log(`Hello ${obj.firstname}. You are ${obj.age} years old!`)
}

const showMessage_1 = ({ firstname, age }) => {
  console.log(`Hello ${firstname}. You are ${age} years old!`)
}

showMessage(user);
showMessage_1(user); */