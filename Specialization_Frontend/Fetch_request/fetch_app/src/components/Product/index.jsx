import React from 'react'
import style from './index.module.css'

export default function Product({ title, price, description }) {
  return (
    <div  className={style.products_card}>
      <p>Title: { title }</p>
      <p>Price: { price }</p>
      <p>Description: { description }</p>
    </div>
  )
}
