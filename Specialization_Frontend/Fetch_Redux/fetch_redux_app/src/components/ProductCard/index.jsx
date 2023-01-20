import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function ProductCard({ id, title, price, image }) {
    const product_url = `/product/${id}`;
  return (
      <div className={style.product_card}>
          <div>
            <img src={image} alt={title} />
            <button>Add to cart</button>
         </div>
        <Link to={product_url}><p>{ title }</p></Link>
       <p>Price: { price }$</p>
      </div>
    
  )
}
