import React from 'react'
import { vegetables } from '../../data/vegetables'
import Vegetables from '../Vegetables'
import style from './index.module.css'

export default function VegetableCards() {

  return (
    <div className={style.vegetables_cards}>

      {
        vegetables
        .sort((a, b) => a.price - b.price)
        .map(el => <Vegetables {...el} key={el.id} />)
      }

    </div>
  )
}