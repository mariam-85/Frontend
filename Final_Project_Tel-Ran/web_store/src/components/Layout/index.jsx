import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import style from './index.module.css'

export default function Layout() {
  return (
    <div>
        <Nav />
        <main className={['wrapper', style.outlet].join(' ')}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}