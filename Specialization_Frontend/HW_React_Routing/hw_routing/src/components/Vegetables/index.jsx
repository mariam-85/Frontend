import React from 'react'
import style from'./index.module.css'

export default function Vegetables({ title, price, country }) {
  return (
    <div className={style.vegetables_card}>
    <p>Title: { title }</p>
    <p>Price: { price }</p>
    <p>Country: { country }</p>
</div>
  )
}