import React from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Page_1 from '../Page_1'
import Page_2 from '../Page_2'

export default function HomePage() {
  return (
    <div>

      <Link to='/home/page_1'>Page 1</Link>
      <Link to='/home/page_2'>Page 2</Link>

      <Routes>
      <Route path='/home/page_1' element={<Page_1 />} />
      <Route path='/home/page_2' element={<Page_2 />} />
      </Routes>

    </div>
  )
}
