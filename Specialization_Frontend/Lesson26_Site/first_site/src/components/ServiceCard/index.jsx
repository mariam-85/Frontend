import React from 'react'
import style from './index.module.css'

export default function ServiceCard({ title, img } ) {

    const card_style = {
        backgroundImage: `url(${img})`

    }
  return (

    <div style={card_style} className={style.service_card}>
        { title }
    </div>
  )
}
