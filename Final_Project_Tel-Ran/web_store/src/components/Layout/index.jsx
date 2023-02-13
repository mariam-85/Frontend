import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import style from './index.module.css'

export default function Layout() {
  return (
    <div>
        <Header />
        <main className={style.outlet}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}