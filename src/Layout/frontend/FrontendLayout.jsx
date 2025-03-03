import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const FrontendLayout = () => {
  return (
   <>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
   </>
  )
}

export default FrontendLayout