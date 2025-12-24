import React from 'react'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Product from '../Product/Product'
import Discount from '../Discount/Discount'
import Process from '../Process/Process'
import Test from '../Test/Test'

const Home = () => {
  return (
    <div >
      
      

      {/* Page Content */}
      <div>
        <Hero />
        <Category />
        <Values />
        <Product />
        <Discount />
        <Process />
        <Test />
      </div>

    </div>
  )
}

export default Home
