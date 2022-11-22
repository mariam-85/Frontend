import React from 'react'
import style from './index.module.css'

export default function User({ id, name, team }) {
  return (
    <div className={style.user_card}>
        <p>{ name }</p>
        <p> { team }</p>
    </div>
  )
}
