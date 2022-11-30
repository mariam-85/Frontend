import React from 'react'
import UsersContainer from '../../components/UsersContainer'
import { Link } from 'react-router-dom'
import style from './index.module.css'

export default function UsersPage() {
  return (
    <div>
        <Link to='/'>
        <button className={style.main_button}>Main Page</button>
        </Link>
        <UsersContainer />
    </div>
  )
}