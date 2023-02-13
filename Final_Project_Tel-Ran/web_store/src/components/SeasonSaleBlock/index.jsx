import React from 'react'
import style from './index.module.css'

export default function SeasonSaleBlock
() {
  return (
    <section className={style.section}>

        <div className={['wrapper', style.sale_block].join(' ')}>   
            
            <p className={style.season}>New season</p> 
            <p className={style.sale}>sale</p>
            <div>
            <button className={style.promotions}>Promotions</button>
            <button className={style.more}>Learn more</button>
            </div>
            
        </div>
    </section>
  )
}
