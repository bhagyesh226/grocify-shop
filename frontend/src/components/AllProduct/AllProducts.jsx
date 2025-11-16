import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruit from '../../assets/all-banner.jpg'

const AllProducts = () => {
  return (
    <div>
        <CategoryPage title= 'Fruits & Veggies' bgimg={bgFruit} categories={['ALL']}/>
    </div>
  )
  
}

export default AllProducts