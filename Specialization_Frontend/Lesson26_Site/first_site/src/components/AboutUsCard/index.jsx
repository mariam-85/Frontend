import React from 'react'
import style from './index.module.css'

export default function AboutUsCard({ value, title, link_title, link_url } ) {

    
  return (

    <div className={style.about_us_card}>
        <p>{ value }</p> 
        <p>{ title }</p> 
        <a href={ link_url }>{ link_title }</a> 


    </div>
  )
}
