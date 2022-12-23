import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../requests/products';
import Product from '../../components/Product';
import style from './index.module.css'

export default function Products() {

    // console.log(useParams());

    const [ products, setProducts ] = useState([]);

    const { category } = useParams();

    useEffect(() => {
        getProducts(category, setProducts)
      }, []);

console.log(products);

  return (
    <div className={style.products}>
        {
        products.map(el => <Product key={el.id} {...el} />)
      }
    </div>
  )
}
