import React from 'react'
import { Link } from 'react-router-dom'
import style from './index.module.css'
import logo from './media/image 1.png'
import logo_2 from './media/Vector.png'

export default function Nav() {
  return (

    <nav className={['wrapper', style.nav_block].join(' ')}>

       
            <a href='/'>
                <img src={logo} alt="logo" className={style.logo}/>
            </a>
       
            <Link to="categories/:category">
                <button className={style.button}>Catalogue</button>
            </Link>


        <ul className={['wrapper', style.nav_menu].join(' ')}>
            <Link to="categories">
            <li>Categories</li>
            </Link>
            <li>Coupon</li>
            <li>Promotions</li>
            <li>Contact</li> 
            <Link to="cart/">          
            <li><img src={logo_2} alt="logo" className={style.logo_2}/></li>
            </Link> 
        </ul>

    </nav>

  )
}

