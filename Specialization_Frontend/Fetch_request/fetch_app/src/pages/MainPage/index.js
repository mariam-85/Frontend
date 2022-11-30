import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function MainPage() {
  return (
    <div>
        <Link to='/products'>
        <button className={style.products_button}>Products</button>
        </Link>
        
        <Link to='/users'>
        <button className={style.users_button}>Users</button>
        </Link>
    </div>
  )
}