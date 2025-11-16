import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgFruit from '../../assets/fruits-banner.jpg'
const Fruits = () => {
  return (
    <div>
        <CategoryPage title= 'Fruits & Veggies' bgimg={bgFruit} categories={['Fruits' , 'Vegetables']} />
    </div>
  )
}

export default Fruits