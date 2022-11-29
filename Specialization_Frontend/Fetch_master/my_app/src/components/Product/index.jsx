import React from 'react'
import style from './index.module.css'

export default function Product({ title, description }) {
  return (
    <div className={style.products_cards}>
      <p>Title: { title }</p>
      <p>Description: { description }</p>
    </div>
  )
}