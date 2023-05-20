import React, { useEffect, useState } from 'react'
import { getProducts } from '../requests/products_req';
import ProductCard from './ProductCard';

export default function ProductsPage() {

    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        getProducts(setProducts)
    }, []);

    console.log(products);

  return (
    <div>
      {
        products.msg
        ? <p>You are not logged in. Please, visit AuthPage</p>
        : 
        products.map(el => <ProductCard key={el.id} 
        {...el} />)
      }
    </div>
  )
}

