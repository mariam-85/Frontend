export const getProducts = callback => {
    fetch('http://localhost:2001/products', {
      credentials: 'include' // включаем отправку куков

    })
    .then(res => res.json())
    .then(json => callback(json))
}