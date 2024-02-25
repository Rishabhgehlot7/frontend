import React from 'react'
import LatestProductCard from './LatestProductCard'
const BestSelling = () => {
    return (
        <div className=' w-screen h-auto p-4'>
            <hr />
            <h1 className=' text-3xl p-5'>Best Selling</h1>
            <div className='flex flex-col'>
                <LatestProductCard />
                <LatestProductCard />
                <LatestProductCard />
                <LatestProductCard />
            </div>
        </div>
    )
}

export default BestSelling