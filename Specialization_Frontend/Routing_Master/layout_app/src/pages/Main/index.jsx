import React from 'react'
import { Link } from 'react-router-dom'
import '../../style.css'

export default function Main() {
  return (
    <div>
        <Link to='/about'>
        <button className='style_button'>About</button>
        </Link>
        
        <Link to='/categories'>
        <button className='style_button'>Categories</button>
        </Link>

    </div>
  )
}
