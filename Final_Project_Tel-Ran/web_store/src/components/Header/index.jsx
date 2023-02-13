import React from 'react'
import logo from './media/logo_pic.png'
import { Link } from 'react-router-dom'
import style from './index.module.css'
import Nav from '../Nav'
import Button from '../Button'


export default function Header() {
  return (
    <header className={['wrapper', style.main_header].join(' ')}>
            <div className={style.header}>
            <div className={style.logo_btn}>
            <a href="/">
            <img src={logo} alt="logo"/>
            </a>
            {/* <Link to="categories/:category"> */}
                <Button>Catalogue</Button> 
            </div>
            {/* </Link> */}
            <Nav className={style.nav_block}/>
            </div>
    </header>
  )
}

