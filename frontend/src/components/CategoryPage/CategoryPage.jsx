import React from 'react'
import Banner from '../Banner/Banner'
import Card from '../Halper/Card'
import Product from '../Halper/Product'
import products from '../Halper/Product'

const CategoryPage = ({ title, bgimg, categories=[] }) => {
    
    let filtereditem = categories.includes('ALL')
    ? products
    :products.filter(item=> categories.includes(item.category))

    const renderProduct = filtereditem.map(product => {
        return (
            <Card key={product.id} image={product.image} name={product.name} price={product.price
            } />
        )
    })
    return (
        <div>
            <Banner title={title} bgimg={bgimg} />
            <div className=' max-w-[1400px] mx-auto px-10 py-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-3'>
                {renderProduct}
            </div>
        </div>
    )
}

export default CategoryPage