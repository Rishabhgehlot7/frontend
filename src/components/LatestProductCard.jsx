import React from 'react'

const LatestProductCard = () => {
    return (
        <div>
            <div className='flex w-full justify-start  h-16 gap-3'>
                <img src="https://pvcadharcard.in/wp-content/uploads/2023/05/Voter-id-PVC-247x247.jpg" alt="" className=' h-full' />
                <div className='flex justify-center  flex-col'>
                    <div className=''>Order your PVC Voter ID card online</div>
                    <div >
                        <span className='px-1 line-through'>₹100.00</span>
                        <span className='px-1'>₹50.00</span>
                    </div>

                </div>
            </div>
            <hr />
        </div>
    )
}

export default LatestProductCard