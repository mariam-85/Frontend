import React from 'react'
import UsersContainer from '../../components/UsersContainer'
import { Link } from 'react-router-dom'

export default function UsersPage() {
  return (
    <div>
        <Link to='/'>
        <button>Main Page</button>
        </Link>
        <UsersContainer />
    </div>
  )
}