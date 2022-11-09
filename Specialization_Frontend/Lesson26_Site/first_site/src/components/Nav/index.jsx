import React from 'react'
import logo from './media/Group 1.png'
import style from './index.module.css'

export default function Nav() {
  return (
    <nav className={['wrapper', style.nav_block].join(' ')}>
        <a href='#'>
            <img src={logo} alt="logo" />
        </a>
        <ul className={style.nav_menu}>
            <li>Главная</li>
            <li>Услуги</li>
            <li>Kейсы</li>
            <li>O компании</li>
            <li>Kонтакты</li>
        </ul>

    </nav>
  )
}
