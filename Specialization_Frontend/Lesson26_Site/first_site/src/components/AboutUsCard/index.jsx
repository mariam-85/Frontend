import React from 'react'
import style from './index.module.css'

export default function AboutUsCard({ value, title, link_title, link_url } ) {

    const content = {}
    
    const about_style = {
        backgroundImage: 'grey'

    }
  return (

    <div style={about_style} className={style.about_card}>
        <p>{ value }</p> 
        <p>{ title }</p> 
        <p>{ link_title }</p>
        <p>{ link_url }</p> 


    </div>
  )
}
