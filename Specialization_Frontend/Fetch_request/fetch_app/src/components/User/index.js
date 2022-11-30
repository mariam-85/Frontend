import React from 'react'
import style from './index.module.css'

export default function User({ id, name, role, email }) {
  return (
    <div className={style.users_cards}>
      <p>ID: { id }</p>
      <p>Name: { name }</p>
      <p>Role: { role }</p>
      <p>Email: { email }</p>
    </div>
  )
}