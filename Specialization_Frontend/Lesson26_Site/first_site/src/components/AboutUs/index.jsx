import React from 'react'
import { aboutUs } from '../../Data/aboutUs'
import AboutUsCard from '../AboutUsCard'
import style from './index.module.css'

export default function AboutUs() {
  return (
<section className={style.about_section}>
    <div className={['wrapper', style.about_block].join(' ')}>
        <p className='subheader'>О нас</p>
        <p className='text'>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
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