import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function Nav() {
  return (
    <div className={style.nav_menu}>
        <Link to ='/users'>Users</Link>
        <Link to='/products'>Products</Link>
    </div>
  )
}