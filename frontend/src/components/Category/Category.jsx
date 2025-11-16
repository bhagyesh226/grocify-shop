import React from 'react'
import Heading from '../Halper/Heading'
import fruitscat from '../../assets/fruits-and-Veggies.png'
import dairycat from '../../assets/dairy-and-eggs.png'
import seafoodcat from '../../assets/meat-and-seafood.png'
import { Link } from 'react-router-dom'

const Category = () => {


  const renderCards = category.map(card => {
    return (
      <div className='bg-zinc-100 rounded-2xl flex-1  basis-[300px]' key={card.id}>
        <div className='w-full pt-4 min-h-[25vh] '>
          <img src={card.img}  className=' bottom-0'/>
        </div>
        
        {/* card contant */}
        <div className=' p-8 md:pt-17 pt-0'>
          <h2 className='text-zinc-800 text-3xl font-bold' >{card.title}</h2>
          <p className='text-zinc-400 mb-9'>{card.description}</p>
          <Link className='bg-gradient-to-b from-orange-400 to-orange-500 cursor-pointer text-white px-8 py-3 text-lg rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 ' to={card.path}>See All</Link>
        </div>
      </div>
    )
  })

  return (
    <section>
      <div className='max-w-[1400px] mx-auto px-10 '>
        <Heading heading='shop' heading2=' by category' />

        {/* category cards */}
        <div className='flex flex-wrap gap-10 md:mt-15 mt-5'>
          {renderCards}
        </div>
      </div>
    </section>
  )
}

export default Category

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    description: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    img: fruitscat,
    path : '/Fruit'
  },
  {
    id: 2,
    title: 'Dairy & Eggs',
    description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.',
    img: dairycat,
    path : '/Dairy'
  },
  {
    id: 3,
    title: 'Meat & SeaFood',
    description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.',
    img: seafoodcat,
    path : '/SeeFood'
  }

]