import React from 'react'
import style from './index.module.css'

export default function Footer() {
  return (
    <footer className={['wrapper', style.footer].join(' ')}>
        <p>2019 (с) Все права защищены. БухОне.ру</p>

        <p>Разработано: BuhOne</p>
    </footer>
  )
}
