import React,{useEffect} from 'react'
import {Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import FootElement from './components/FootElement'
import {Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



function Layout() {
  const navigate=useNavigate()
  return (
    <>
      <Nav/>
      <Outlet/>
      <FootElement/>
      <Toaster/>
    </>
  )
}

export default Layout
