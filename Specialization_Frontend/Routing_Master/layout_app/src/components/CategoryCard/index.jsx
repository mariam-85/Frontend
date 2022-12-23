import React from 'react'
import style from './index.module.css'


export default function CategoryCard({ category }) {
  return (
    <div className={style.category_card}>
        { category }
    </div>
  )
}
