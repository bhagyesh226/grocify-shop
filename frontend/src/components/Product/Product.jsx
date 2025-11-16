import React, { useState } from 'react'
import Heading from '../Halper/heading'
import ProductList from '../Halper/Product'
import Card from '../Halper/Card'
import Button from '../Halper/Button'
import { Link } from 'react-router-dom'

const Product = () => {

    const categories = ['ALL', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood']
    const [activeTab, setActiveTab] = useState('ALL')

    let filteredProducts = activeTab === 'ALL' 
    ? ProductList : ProductList.filter(product => product.category === activeTab)

    const renderCards = filteredProducts.slice(0 , 8).map(product => {
        return(
            
            <Card key={product.id} image={product.image} name={product.name} price={product.price} />
          
        )
    })

    return (
        <div className='max-w-[1400px] mx-auto py-20 px-10  mt-10'>
            <Heading heading='Our' heading2=' Values' />

            {/* tabe */}
            <div className='flex flex-wrap  gap-3   justify-center '>
                {categories.map(category => {
                    return (
                        <button key={category} className={` text-black rounded-2xl cursor-pointer border-b-2 border-transparent duration-500 hover:border-orange-500 px-5 text-lg font-bold py-3 ${activeTab === category ? 'bg-gradient-to-b from-orange-400 to-orange-500 text-white' : 'bg-zinc-100'}`}
                        onClick={()=> setActiveTab(category)}
                        >
                            {category.toUpperCase() }
                        </button>
                    )
                })}
            </div>

            {/* product list  */}

            <div className='grid lg:grid-cols-4  md:grid-cols-3 md:gap-10 gap-2 grid-cols-2'>
                {renderCards}
            </div>

            {/* View More  */}

            <div className='mt-10 flex justify-center items-center'>
                <Link className='bg-gradient-to-b from-orange-400 to-orange-500 cursor-pointer text-white px-8 py-3 text-lg rounded-lg hover:scale-105 hover:to-orange-600 transition-all duration-300 ' to="/AllProduct">View All</Link>
            </div>
        </div>
    )
}

export default Product


