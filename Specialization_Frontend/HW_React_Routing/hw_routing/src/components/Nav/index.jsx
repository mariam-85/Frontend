import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className={style.nav_menu}>
        <Link to ='/fruits_page'>Fruits</Link>
        <Link to='/vegetables_page'>Vegetables</Link>
    </nav>
  )
}