import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'
import cart from './media/cart_pic.png'


export default function Nav() {
  return (

    <nav className={style.header_nav}>
        <ul>

            <Link to="categories" className={style.link}>
            <li>Categories</li>
            </Link>
            <li>Coupon</li> 
            <li>Promotions</li> 
            <li>Contact</li>  
            <Link to="cart/">          
            <img src={cart} alt="logo" className={style.cart}/>
            </Link> 
            </ul>
    </nav>

  )
}


