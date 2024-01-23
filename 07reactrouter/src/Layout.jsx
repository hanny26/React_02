import React from 'react'
import { Outlet  } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'
import './index.css'
import Contact from './component/Contact/contact'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer/>
  
    </>
  )
}

export default Layout