import React from 'react'
import ProductCard from './ProductCard'
const RelatedProducts = () => {
    return (
        <div className="container mx-auto px-4">
            <hr />
            <div className=' text-center py-4 text-2xl'>RELATED PRODUCTS</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>

    )
}

export default RelatedProducts