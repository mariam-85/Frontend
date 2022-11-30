import React from 'react'
import { Link } from 'react-router-dom'
import { style_button } from '../../style.css'

export default function MainPage() {
  return (
    <div>
        <Link to='/products'>
        <button className={'style_button'}>Products</button>
        </Link>
        
        <Link to='/users'>
        <button className={'style_button'}>Users</button>
        </Link>
    </div>
  )
}