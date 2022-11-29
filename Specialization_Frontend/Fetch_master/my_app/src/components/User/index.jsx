import React from 'react'
import style from './index.module.css'

export default function User({ firstName, lastName, age }) {
  return (
    <div className={style.users_cards}>
      <p>First name: { firstName }</p>
      <p>Last name: { lastName }</p>
      <p>Age: { age }</p>
    </div>
  )
}
