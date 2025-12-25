import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
// import { GiLion } from "react-icons/gi";
// import { GiTigerHead } from "react-icons/gi";
// import { GiFruitBowl } from "react-icons/gi";

const Layout = () => {
  return (
    <div className="relative">

      {/* Background Icon */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        {/* <GiFruitBowl className="text-[500px] text-orange-500 opacity-10" /> */}
        <h1 className='text-8xl -rotate-45 md:text-9xl font-bold text-zinc-600 opacity-10'>Gr<span className='text-orange-500'>O</span>cify</h1>
      </div>
      <div  className="relative z-10">
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    </div>
  )
}

export default Layout