import React from 'react'
import style from './index.module.css'

export default function ProductCard({ title, price, images }) {
  return (
    <div className={style.product_card}>
      <img src={images[0]} alt={title} />
      <p>{ title }</p>
      <p>Price: { price }$</p>
    </div>
  )
}