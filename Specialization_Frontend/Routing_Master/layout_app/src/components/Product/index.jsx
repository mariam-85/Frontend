import React from 'react'
import style from './index.module.css'

export default function Product({ image, title, price, description }) {
  return (
    <div className={style.product}>
        <img src={image} alt={title}></img>
        <div className={style.descr_block}>
        <h3> { title }</h3>
        <p>Price: { price }</p>
        <p>Description: { description }</p>
        </div>
    </div>
  )
}