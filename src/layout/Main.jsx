import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer'

export default function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
