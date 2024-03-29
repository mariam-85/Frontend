import React from 'react'
import { aboutUs } from '../../Data/aboutUs'
import AboutUsCard from '../AboutUsCard'
import style from './index.module.css'

export default function AboutUs() {
  return (
<section className={['wrapper', style.about_us_section].join(' ')}>

    <div>
        <p className='subheader'>О нас</p>
        <h2>Компания <span className={style.accent}>ИвановПром</span></h2>
        <p className={style.about_us_info}>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>

    </div>
        

        <div className={style.about_us_cards}>
            {
                aboutUs.map(el => <AboutUsCard key={el.id} {...el} />)

            }
        </div>
    
</section>

  )
}