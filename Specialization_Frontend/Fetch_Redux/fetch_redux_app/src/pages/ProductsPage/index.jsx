import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { load_products } from '../../requests/products_request';
import ProductCard from '../../components/ProductCard';
import style from './index.module.css'

export default function ProductsPage() {

  const { category } = useParams();
  const category_up = category[0].toUpperCase() + category.slice(1);

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(load_products(category))
  }, []);

  // console.log(products);

  return (
    <div>
      <h2 className={style.category}>{ category_up }</h2>
      <div className={style.products}>
        {
          products.map(el => <ProductCard key={el.id} {...el} />)
        }
      </div>
    </div>
  )
}
