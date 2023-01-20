import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { load_product } from '../../requests/product_descr';
import style from './index.module.css'

export default function ProductDescrPage() {

  const { id } = useParams();

  const dispatch = useDispatch();
  const product = useSelector(state => state.product_descr);

  useEffect(() => {
    dispatch(load_product(id))
  }, []);

  console.log(product);

  const { title, description, price, image } = product;

  
  return (
    <div className={style.product_descr}>
      {
        image && <img src={image} alt={title} /> 
      }
      <div className={style.info_block}>
        <p className={style.title}>{ title }</p>
        <p className={style.descr}>{ description }</p>
        <p className={style.price}>
          <span>Price:</span> { price }$
        </p>
      </div>
    </div>
  )
}