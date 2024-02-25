import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
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
                <button className='bg-red-600 py-1 px-3 rounded-lg text-white border-none'>Card</button>
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
        </div>
    )
}








