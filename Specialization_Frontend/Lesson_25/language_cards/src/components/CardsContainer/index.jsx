import React from 'react'
import Card from '../Card'
import style from './index.module.css'

export default function CardsContainer({words_array} ) {
  return (
    <div className={style.cards_container}>
        {
            words_array.map(el => <Card key={el.id} {...el} />)
        }
    </div>
  )
}
