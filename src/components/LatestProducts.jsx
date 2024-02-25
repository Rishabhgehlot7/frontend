import React from 'react'
import LatestProductCard from './LatestProductCard'

const LatestProducts = () => {
  return (
    <div className=' w-screen h-auto p-4'>
      <hr />
      <h1 className=' text-3xl p-5'>LATEST</h1>
      <div className='flex flex-col'>
        <LatestProductCard/>
        <LatestProductCard/>
        <LatestProductCard/>
        <LatestProductCard/>
      </div>
    </div>
  )
}

export default LatestProducts