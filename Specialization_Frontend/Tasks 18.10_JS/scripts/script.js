//Task 1


    fetch('https://fakestoreapi.com/products')
    .then(resp => resp.json())
    .then(json => render(json));

//getAllProducts();

//Task 2

const cards_container = document.querySelector('.cards_container');

const render = (products) => {
    products.map(({ image, title,price }) => {
        const card = document.createElement('div');
        const imageElem = document.createElement('img');
        const titleElem = document.createElement('p');
        const priceElem = document.createElement('p');

        imageElem.src = image;
        imageElem.alt = 'image';


        titleElem.innerText = title;

        priceElem.innerText = price + '$';

        card.classList.add('card');


        card.append(imageElem, titleElem, priceElem);
        cards_container.append(card);

    })
}

// function getProductCard(products){
//     const { image, title,price } = products;

//         const card = document.createElement('div');
//         const imageElem = document.createElement('img');
//         const titleElem = document.createElement('p');
//         const priceElem = document.createElement('p');

//         card.classList.add('card');

//         card.append(imageElem, titleElem, priceElem);

//         imageElem.src = image;
       
//         titleElem.innerText = title;

//         priceElem.innerText = price;


//         return card

//     }
    
            
    //     })
    // }
//         cards_container.append(getProductCard(product);


//Task 3

fetch('https://fakestoreapi.com/products/categories')
    .then(resp => resp.json())
    .then(json => console.log(json));