import React from 'react'
import style from './index.module.css'

export default function Comment({ id, comment }) {


  return (
    <div className={style.comment_item}>
        <p>{ comment }</p>

    </div>
  )
}
