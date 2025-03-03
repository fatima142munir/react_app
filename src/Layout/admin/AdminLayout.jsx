import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './components/SideBar'

const AdminLayout = () => {
  return (
    <>
      <div className='flex h-[100%] w-screen'>
        <SideBar />
        <div className="lg:w-6/8 w-2/3 bg-amber-700 mb-10 lg:mb-0 p-10 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default AdminLayout