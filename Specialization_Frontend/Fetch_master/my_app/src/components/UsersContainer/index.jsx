import React, { useContext } from 'react'
import { Context } from '../../context'
import User from '../User';
import style from './index.module.css'

export default function UsersContainer() {

  const { users } = useContext(Context);

  return (
    <div className={style.users_cards}>
      {
        users.map(el => <User key={el.id} {...el} />)
      }
    </div>
  )
}
