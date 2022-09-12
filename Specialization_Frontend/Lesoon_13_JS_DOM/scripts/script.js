// querySelector метод, возвращающий элемент по селектору
// const main_p = document.querySelector('.main');

// querySelectorAll метод, возвращающий итерируемый объект (NodeList) по селектору
// const p_list = document.querySelectorAll('p');
// console.log(p_list);

// getElementsByClassName метод, возвращающий итерируемый объект 
// (HTMLCollection) по селектору
// const main_p = document.getElementsByClassName('main')[0];
// console.log(main_p);

//const prod_p = document.getElementsByClassName('products')[0].getElementsByTagName('p')[0];



//const prod_p = document.querySelector('.products p');

// prod_p.innerText = 'Tovary';

// addEventListener позволяет повесить событие (в данном случае click) на параграф prod_p
// и при этом событии выполнится callback функция

// prod_p.addEventListener('click', () =>{
//     prod_p.innerText = 'Tovary';
// })

//1) найти параграф с тектом "Важный текст" и заменить его на "Не такой уж и важный текст"

// const p_elem = document.querySelector('.main p');

// p_elem.innerText = 'Ne takoj uzh vazhnyj text!';

// const fb_elem = document.querySelector('.fb a');

// fb_elem.innerText = 'Facebook';

// const point_1 = document.querySelector('.menu .point_1');

// point_1.addEventListener('click', () =>{
//          point_1.innerText = 'Point 1';
//      })

//      const point_2 = document.querySelector('.menu .point_2');

// point_2.addEventListener('click', () =>{
//          point_2.innerText = 'Point 2';
//      })

//      const point_3 = document.querySelector('.menu .point_3');

// point_3.addEventListener('click', () =>{
//          point_3.innerText = 'Point 3';
//      })


    //  const main_elem = document.querySelector('.main');

    //  const random_color = () =>{
    //     const r = Math.round(Math.random() * 255);
    //     const g = Math.round(Math.random() * 255);
    //     const b = Math.round(Math.random() * 255);
    //     return `rgb(${r},${g}, ${b})`
    // }

    //  main_elem.addEventListener('click', () =>{
    //      main_elem.style.color = random_color();
    //      main_elem.style.backgroundColor = random_color();
    //      main_elem.style.padding = '20px';
         
    //  })
     
//реализовать функцию random_color, которая возвращает случайный цвет в формате rgb

//Math.round(Math.random() * 255)

//'rgb(124, 23, 45)'

//Math.round(Math.random(rgb) * 255)

const main_elem = document.querySelector('.main');

main_elem.addEventListener('click', () =>{
const value = main_elem.innerText;
main_elem.innerText = +value + 1;
})



    