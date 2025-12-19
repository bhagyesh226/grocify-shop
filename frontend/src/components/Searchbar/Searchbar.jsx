import React from 'react'
import Card from '../Halper/Card'
import products from '../Halper/Product'
import { useSearchParams } from "react-router-dom";

const Searchbar = () => {

    const [params] = useSearchParams();
    const query = params.get("query")?.toLowerCase() || "";

    const filteredProducts = products.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );

    return (
        <div className='max-w-[1400px] pt-20 mx-auto px-10 py-10 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3'>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <Card
                        key={product.id}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))
            ) : (
                <p className="text-xl font-semibold col-span-full text-center">
                    No Products Found
                </p>
            )}
        </div>
    )
}

export default Searchbar
