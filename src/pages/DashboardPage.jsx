import React from 'react'
import Navbar from '../components/_dashboard/Navbar'
import HeaderSearch from '../components/_dashboard/HeaderSearch'
import MainInfo from '../components/_dashboard/MainInfo'

export default function DashboardPage() {
  return (
    <div>
       <div className="p-6 min-vh-100">
            <Navbar />
      
             <HeaderSearch/>
             
             <MainInfo/>
          </div>
    </div>
  )
}
