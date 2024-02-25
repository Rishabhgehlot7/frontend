import React from 'react'

const ProductCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <div>
                <img src="https://pvcadharcard.in/wp-content/uploads/2023/05/Voter-id-PVC-247x247.jpg" alt="" />
            </div>
            <div>
                <div className='py-2'>Order your PVC Voter ID card online</div>
                <span className='px-1 line-through'>₹100.00</span>
                <span className='px-1'>₹50.00</span>
            </div>
        </div>
    )
}

export default ProductCard