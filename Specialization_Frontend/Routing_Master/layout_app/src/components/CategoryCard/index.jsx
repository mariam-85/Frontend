import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'


export default function CategoryCard({ category }) {

  return (
    <div className={style.category_card}>
        <Link to={category}>
        { category }
        </Link>
    </div>
  )
}
