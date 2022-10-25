import React from 'react'

export default function User({ id, firstname, lastname, address, salary }) {
  return (
    <div>
        <p>First name: { firstname }</p>
        <p>Last name: { lastname }</p>
        <p>Address: { address }</p>
        <p>Salary: { salary }</p>
    </div>
  )
}
