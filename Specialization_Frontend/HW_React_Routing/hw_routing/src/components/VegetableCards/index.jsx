import React from 'react'
import { vegetables } from '../../data/vegetables'
import Vegetables from '../Vegetables'

export default function VegetableCards() {

  return (
    <div>

      {
        vegetables
        .sort((a, b) => a.price - b.price)
        .map(el => <Vegetables {...el} key={el.id} />)
      }

    </div>
  )
}