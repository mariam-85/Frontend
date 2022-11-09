import React from 'react'
import { services } from '../../Data/services'
import ServiceCard from '../ServiceCard'
import style from './index.module.css'

export default function Services() {
  return (
<section className={style.services_section}>
    <div className={['wrapper', style.services_block].join(' ')}>
        <p className='subheader'>Наши услуги</p>
        <h2>Мы специализируемся</h2>

        <div className={style.services_container}>
            {
                services.map(el => <ServiceCard key={el.id} {...el} />)

            }
        </div>
    </div>
</section>

  )
}
