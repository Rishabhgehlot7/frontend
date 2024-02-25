import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'

export const Header = () => {
    const [showCard, setShowCard] = useState(false)

    const showCardMethod = () => {
        setShowCard(!showCard)
    }
    useEffect(() => {

    }, [showCard])
    return (
        <div className=' w-screen h-auto flex flex-col md:block hidden'>
            <div className='flex bg-red-800 w-full h-full p-1 justify-between text-white'>
                <div className='p-1 text-xs'>WHATSAPP US AT 9284542909</div>
                <ul className='list-none flex'>
                    <li className=' p-1 text-xs'> About Us</li>
                    <li className=' p-1 text-xs'>Contact Us</li>
                    <li className=' p-1 text-xs'>FAQ</li>
                </ul>

            </div>
            <div className='flex bg-gray-100 w-full h-full p-3 justify-between'>
                <Link className='px-3 py-1' to={'/'}>pvcadharcard</Link>
                <div className=' w-[50%] flex'>
                    <input type="text" name="searchBar" id="searchBar" className=' w-full border-gray-800 border-[1px] p-1' placeholder='Search...' />
                    <button className=' bg-orange-600 p-1 text-white'>search</button>
                </div>
                <button className='p-1'>LOGIN/REGISTER</button>
                <button className='bg-red-600 py-1 px-3 rounded-lg text-white border-none' onClick={showCardMethod}>Card</button>
            </div>
            <ul className='list-none flex flex-wrap  bg-gray-500 w-full h-full'>
                <li className=' font-medium p-2 text-xs'>PVC AADHAR CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC VOTER ID CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC DRIVING LICENCE</li>
                <li className=' font-medium p-2 text-xs'>PVC HEALTH CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC PAN CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC AYUSHMAN BHARAT CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC ESHRAM CARD</li>
                <li className=' font-medium p-2 text-xs'>SHOP</li>
            </ul>
            <ul className={`list-none h-full flex flex-col items-center bg-gray-100 shadow-2xl w-[50%] fixed top-0 ${showCard ? "right-0 transition duration-150" : " right-[50%] hidden"}`}>
                <button onClick={showCardMethod} className=' absolute right-0 p-3 font-bold'>X</button>
                <div className=' h-8'></div>
                <h2 className=' text-2xl text-center py-3'>CARD</h2>
                <div className=' w-10 h-1 bg-gray-600'></div>
                <CardItem />
                <hr />
                <div className='py-5'>Subtotal: ₹250.00</div>
                <button className=' w-[80%] p-2 bg-red-700 text-white my-2'>VIEW CARD</button>
                <button className=' w-[80%] p-2 bg-orange-500 text-white my-2'>CHECKOUT</button>
                <hr />
            </ul>
        </div>
    )
}








