// const root = document.querySelector('#root');
// //console.log(root);

// const div_elem = document.createElement('div');
// const img_elem = document.createElement('img');
// const text_elem = document.createElement('p');
// //img_elem.setAttribute('src', 'link');
// img_elem.src = 'https://64.media.tumblr.com/98ea56e056c42e101fe49c19f4173e1a/d051e7fa1f47ed71-54/s500x750/be1538c0d56f72885cf77a54436637fff9caaa2b.jpg';
// text_elem.innerText = 'Cozy autumn';

// div_elem.append(img_elem, text_elem);
// div_elem.classList.add('card');

// //div_elem.innerText = 'Hallo';
// //console.log(div_elem);

// root.append(div_elem);

// const root = document.querySelector('#root');

// const div_elem = document.createElement('div');
// const text_elem = document.createElement('p');
// const text_elem2 = document.createElement('p');
// const text_elem3 = document.createElement('p');
// const text_elem4 = document.createElement('p');

// text_elem.innerText = 'Hello!';
// text_elem2.innerText = 'How are you?';
// text_elem3.innerText = 'Are you fine?';
// text_elem4.innerText = 'Awesome!';


// div_elem.append(text_elem, text_elem2, text_elem3, text_elem4);


// root.append(div_elem);

// const div_elem = document.createElement('div');
// const texts = ['Text1', 'Text2', 'Text3', 'Text4'];

// texts.forEach(text => {
//     const p_elem = document.createElement('p');
//     p_elem.innerHTML = text;
//     div_elem.append(p_elem);
// })

// root.append(div_elem);

const div_elem = document.createElement('div');
const texts = ['Text1', 'Text2', 'Text3', 'Text4'];

const p_list = texts.map(text => {
    const p_elem = document.createElement('p');
    p_elem.innerHTML = text;
    return p_elem
})

div_elem.append(...p_list);

root.append(div_elem);


