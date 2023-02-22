import React from 'react'
import style from './index.module.css'

export default function Word({ id, title }) {
  return (
    <div className={style.words_card}>
        <p>ID: { id }</p>
        <p>Title: { title }</p>

    </div>
  )
}
