import React from 'react'
import style from './index.module.css'


export default function Fruits({ title, price, country }) {
  return (
    <div className={style.fruits_cards}>
    <p>Title: { title }</p>
    <p>Price: { price }</p>
    <p>Country: { country }</p>
</div>
  )
}
