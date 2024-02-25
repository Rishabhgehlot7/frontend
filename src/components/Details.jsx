import React from 'react'
import { Link } from 'react-router-dom'

const Details = () => {
    return (
        <div className="container mx-auto px-4">
            <div className=' w-full h-auto p-3'>
                <img src="https://pvcadharcard.in/wp-content/uploads/2023/05/Voter-id-PVC-247x247.jpg" alt="" width="100%" />
            </div>
            <div className=' w-full h-auto flex justify-center py-4'>
                <Link className='px-1'>Home</Link>/
                <Link className='px-1'>Shop</Link>/
                <Link className='px-1'>PVC CARDS</Link>
            </div>
            <div className=' text-3xl text-center'>Congress Membership Card</div>
            <div className=' w-full h-auto flex justify-center py-4'>
                <span className=' text-xl px-1 line-through'>₹100.00</span>
                <span className=' text-xl px-1'>₹50.00</span>
            </div>
            <p className=' py-2'>Get your Congress membership card printed on high-quality PVC material. Our service is quick, easy, and affordable.Get the perfect card for your needs. Order your Congress membership card today!</p>
            <p className=' py-2'>Here are some of the benefits of using our service:</p>
            <ul className=' list-none'>
                <li className=' py-2 pl-5'>High-quality PVC material that is durable and long-lasting</li>
                <li className=' py-2 pl-5'>Quick and easy turnaround time</li>
                <li className=' py-2 pl-5'>Affordable prices</li>
                <li className=' py-2 pl-5'>24/7 customer support</li>
            </ul>
            <p className=' py-2'>Order your Congress membership card today and show your pride in the party!</p>
            <form action="">
                <div className=' w-full h-auto flex justify-center flex-col py-3'>
                    <label htmlFor="" className=' text-center font-bold'>If file is password protected please enter password here</label>
                    <input type="text" className='h-8 border-black rounded-sm p-3 border-[1px]' placeholder='Comments' />
                </div>
                <div className=' flex flex-col justify-center items-center py-3'>
                    <label htmlFor="" className=' text-center font-bold py-2'>Upload an image:</label>
                    <input type="file" name="" id="" className='' />
                </div>
                <div className=' flex justify-center items-center py-3'>
                    <button className=' bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>ADD TO CARD</button>
                </div>
            </form>
            <hr />
            <div>
                <h3 className=' text-2xl py-2'>DESCRIPTION</h3>
                <h3 className=' text-2xl py-2'>How to Get a Congress Membership Card and Its Benefits</h3>
                <img src="https://pvcadharcard.in/wp-content/uploads/2023/05/Voter-id-PVC-247x247.jpg" alt="" />
                <h3 className=' text-2xl py-2'>Get Your Congress Membership Card Today!</h3>
                <p>Show your pride in the Congress party with printed membership card. Our cards are made from high-quality PVC material and are durable and long-lasting.You can get the perfect card for your needs. Order your Congress membership card today!</p>
                <h3 className=' text-2xl py-2'>Why Get a Congress Membership Card?</h3>
                <p className=' py-2'>There are many reasons to get a Congress membership card. Here are just a few:</p>
                <ul className=' list-none'>
                    <li className=' py-2 pl-5'>Show your pride in the party.</li>
                    <li className=' py-2 pl-5'>Stay up-to-date on the latest news and events.</li>
                    <li className=' py-2 pl-5'>Get involved in the political process.</li>
                    <li className=' py-2 pl-5'>Meet other members of the party.</li>
                    <li className=' py-2 pl-5'> Get discounts on merchandise and events.</li>
                </ul>
            </div>
        </div>
    )
}

export default Details