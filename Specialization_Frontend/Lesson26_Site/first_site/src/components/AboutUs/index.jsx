import React from 'react'
import { aboutUs } from '../../Data/aboutUs'
import AboutUsCard from '../AboutUsCard'
import style from './index.module.css'

export default function AboutUs() {
  return (
<section className={style.about_section}>
    <div className={['wrapper', style.about_block].join(' ')}>
        <p className='subheader'>О нас</p>
        <h2>Компания ИвановПром</h2>

        <div className={style.about_container}>
            {
                aboutUs.map(el => <AboutUsCard key={el.id} {...el} />)

            }
        </div>
    </div>
</section>

  )
}