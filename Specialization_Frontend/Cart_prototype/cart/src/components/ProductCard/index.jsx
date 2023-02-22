import React from 'react'
import style from './index.module.css'
import { addToCart} from '../../store/reducers/cartReducer'
import { useDispatch } from 'react-redux'

export default function ProductCard({ id, title, price }) {

  const dispatch = useDispatch();

  const add_to_cart = () => dispatch(addToCart({ id, title, price }))

  return (
    <div className={style.product_card}>
      <p>{ title }</p>
      <p>{ price }</p>
      <button onClick={add_to_cart}>Add to cart</button>
    </div>
  )
}
