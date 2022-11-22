import React from 'react'
import { fruits } from '../../data/fruits'
import Fruits from '../Fruits'

export default function FruitsCards() {

  return (
    <div>

      {
        fruits
        .sort((a, b) => a.price - b.price)
        .map(el => <Fruits {...el} key={el.id} />)
      }

    </div>
  )
}