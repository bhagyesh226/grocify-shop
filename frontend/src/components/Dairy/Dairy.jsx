import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import bgDiry from '../../assets/dairy-banner.jpg'

const Dairy = () => {
  return (
    <>
    <div>
        <CategoryPage title='Dairy & Eggs' bgimg={bgDiry} categories={['Dairy']} />
    </div>
    </>
  )
}

export default Dairy