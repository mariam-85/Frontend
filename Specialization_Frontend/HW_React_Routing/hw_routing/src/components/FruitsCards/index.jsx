import React from 'react'
import style from './index.module.css'

export default function FruitsCards({ id, title, price, country }) {


  return (
    <div className={style.fruits_cards}>
        <p>ID: { id }</p>
        <p>Title: { title }</p>
        <p>Price: { price }</p>
        <p>Country: { country }</p>
    </div>
  )
}