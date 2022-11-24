import React from 'react'
import { fruits } from '../../data/fruits'
import Fruits from '../Fruits'
import style from './index.module.css'

export default function FruitsCards() {

  return (
    <div className={style.fruits_cards}>

      {
        fruits
        .sort((a, b) => a.price - b.price)
        .map(el => <Fruits {...el} key={el.id} />)
      }

    </div>
  )
}