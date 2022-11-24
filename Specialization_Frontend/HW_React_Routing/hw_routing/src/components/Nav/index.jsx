import React from 'react'
import style from './index.module.css'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className={style.nav_menu}>
        <Link to ='/home/*'>Home</Link>
        <Link to ='/fruits'>Fruits</Link>
        <Link to='/vegetables'>Vegetables</Link>
    </div>
  )
}