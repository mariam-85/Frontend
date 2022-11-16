import React from 'react'
import logo from './media/Group 1.png'
import style from './index.module.css'
import { MenuOutlined } from '@ant-design/icons'

export default function Nav( { menuActive, setMenuActive }) {

  console.log(menuActive);
  return (
    <nav className={['wrapper', style.nav_block].join(' ')}>
        <a href='/#'>
            <img src={logo} alt="logo" />
        </a>
        <ul className={[ style.nav_menu, menuActive ? style.active : '' ].join(' ')}>
            <li>Главная</li>
            <li>Услуги</li>
            <li>Kейсы</li>
            <li>O компании</li>
            <li>Kонтакты</li>
        </ul>

        <MenuOutlined className={style.menu_icon} onClick={() => setMenuActive(menuActive ? false : true)}/>


    </nav>
  )
}
