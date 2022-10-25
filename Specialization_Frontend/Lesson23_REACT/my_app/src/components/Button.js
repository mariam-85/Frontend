import React from 'react'

export default function Button() {

    const btn_style = {
        border: '1px solid green',
        backgroundColor: 'green',
        color: 'white',
        padding: '10px'
    }
  return (
    <div>
        <button style={btn_style}>Button</button>
    </div>
  )
}
