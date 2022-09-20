
const words = ['Privet', 'Poka', 'Tschüss'];

const root = document.querySelector('#root');


  words.forEach(word => {
    const p_elem = document.createElement('p');
    p_elem.classList.add('card');
    p_elem.innerText = word;
    root.append(p_elem);
    
    p_elem.addEventListener('click', () => {
        console.log(word);
    });

    p_elem.addEventListener('click', event => {
        event.target.classList.add('active');
    });

    p_elem.addEventListener('click', event => {
        event.target.classList.toggle('active') ;
    });

  });


   
  

  
   