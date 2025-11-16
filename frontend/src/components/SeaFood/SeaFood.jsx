import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgSeeFood from '../../assets/seafood-banner.jpg'

const SeeFood = () => {
  return (
    <div>
        <CategoryPage title='Meat & SeaFood' bgimg={bgSeeFood} categories={['Meat' , 'SeaFood']}/>
    </div>
  )
}

export default SeeFood