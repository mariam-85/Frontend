import React from 'react'

export default function User({ firstName, lastName, age }) {
  return (
    <div>
      <p>First name: { firstName }</p>
      <p>Last name: { lastName }</p>
      <p>Age: { age }</p>
    </div>
  )
}
