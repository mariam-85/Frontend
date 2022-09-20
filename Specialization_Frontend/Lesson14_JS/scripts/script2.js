const data = [
    {
      id: 1,
      title: 'Велосипед',
      price: 100,
    },
  
    {
      id: 2,
      title: 'Самокат',
      price: 500,
    },
  
    {
      id: 3,
      title: 'Скейт',
      price: 200,
    }
  ];

  // const {id, title, price} = product; // деструктуризация

  // const id = product.id
  // const title = product.title
  // const price = product.price

  const rootElem = document.querySelector('.root');

  data.forEach(({id, title, price}) => {
    const cardElem = document.createElement('div');
    const idElem = document.createElement('p');
    const titleElem = document.createElement('p');
    const priceElem = document.createElement('p');
  
    idElem.innerText = `ID: ${id}`;
    titleElem.innerText = `Title: ${title}`;
    priceElem.innerText = `Price: ${price}`;
  
    cardElem.classList.add('card');
  
    cardElem.append(idElem, titleElem, priceElem);
    rootElem.append(cardElem);
    
  })

//   const cardElem = document.createElement('div');
//   const idElem = document.createElement('p');
//   const titleElem = document.createElement('p');
//   const priceElem = document.createElement('p');

//   idElem.innerText = 'ID: ';
//   titleElem.innerText = 'Title: ';
//   priceElem.innerText = 'Price: ';

//   cardElem.classList.add('card');



//   cardElem.append(idElem, titleElem, priceElem);
//   rootElem.append(cardElem);





