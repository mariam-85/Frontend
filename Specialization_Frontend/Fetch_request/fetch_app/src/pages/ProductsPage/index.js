import React from 'react'
import ProductsContainer from '../../components/ProductsContainer'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function ProductsPage() {
  return (
    <div>
        <Link to='/'>
        <button className={style.main_button}>Main Page</button>
        </Link>
        <ProductsContainer />
    </div>
  )
}