import React from 'react'
import image from './media/image 2.png'
import rectangle from './media/Rectangle 1.png'
import style from './index.module.css'

export default function SeasonSaleBlock
() {
  return (
    <div>

        <div className={['wrapper', style.sale_block].join(' ')}>   
            {/* <img src={rectangle} alt="rectangle" /> */}

            <div className={style.info_block}>
            <img src={image} alt="flowers" className={style.pic}/>
            <p>New season sale</p>
            </div>
            
        </div>

        <div>
            <p>Categories</p>
        </div>

        <div>
            <p>Discount 5% on first order</p>
        </div>

        <div>
            <p>Promotions</p>
        </div>

    </div>
  )
}
