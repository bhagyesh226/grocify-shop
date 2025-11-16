import React from 'react'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Product from '../Product/Product'
import Discount from '../Discount/Discount'
import Process from '../Prosecc/Process'
import Test from '../Test/Test'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Values/>
        <Product/>
        <Discount/>
        <Process/>
        <Test/>
    </div>
  )
}

export default Home