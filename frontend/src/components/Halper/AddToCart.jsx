import React from 'react'
import products from '../Halper/Product'

const AddToCart = () => {

    const renderProduct = products.slice(0, 7).map(product => {
        return (
            <div 
                key={product.id} 
                className="flex gap-4 p-3 bg-white shadow-sm  rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer"
            >
                {/* Image */}
                <div className="w-20 h-20 flex items-center justify-center bg-orange-50 rounded-lg">
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-16 h-16 object-contain"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-semibold text-gray-800">
                        {product.name}
                    </h2>
                    <h4 className="text-orange-500 font-bold text-xl">
                        ${product.price}
                    </h4>
                </div>
            </div>
        )
    })

    return (
        <div className="bg-zinc-200 p-4 rounded-xl shadow-md max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
                My Cart 
            </h1>

            <div className="space-y-4 max-h-80 overflow-y-auto scrollbar-hide pr-2">
                {renderProduct}
            </div>
        </div>
    )
}

export default AddToCart
