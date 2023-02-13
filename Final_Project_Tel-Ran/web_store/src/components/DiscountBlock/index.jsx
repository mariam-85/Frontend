import React from 'react'
import style from './index.module.css'

export default function DiscountBlock
() {
  return (
    <section className={style.section}>  
            <div className={style.discount}>
            <p>Discount 5%</p> 
            <p className={style.order}>on first order</p>
            <form className={style.form}>
					<input type='text' name='phone' placeholder='+49' />
					<button>Get a discount</button>
				</form>
        </div>
    </section>
  )
}
