import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'

const MobileNav = () => {
    const [showCard, setShowCard] = useState(false)
    const [show, setShow] = useState(false)
    const showNav = () => {
        setShow(!show)
    }
    const showCardMethod = () => {
        setShowCard(!showCard)
    }
    useEffect(() => {

    }, [show, showCard])

    console.log(show);
    return (
        <div className=' w-screen h-auto flex flex-col md:hidden'>
            <div className='flex bg-red-800 w-full h-full p-1 justify-center text-white'>
                <div className='p-1 text-xs'>WHATSAPP US AT 9284542909</div>
            </div>
            <div className='flex bg-gray-100 w-full h-full p-3 justify-between'>
                <button onClick={showNav}>Menu</button>
                <Link className='px-3 py-1' to={'/'}>pvcadharcard</Link>
                <button onClick={showCardMethod} className='bg-red-600 py-1 px-3 rounded-lg text-white border-none'>Card</button>
            </div>
            <ul className={`list-none h-full flex flex-col bg-gray-100 shadow-2xl w-[80%] fixed ${show ? "" : " left-[-1000px] transition duration-150"}`}>
                <button onClick={showNav} className=' absolute right-0 p-3 font-bold'>X</button>
                <div className=' h-8'></div>
                <div className='flex justify-center items-center h-[50px] m-4'>
                    <input type="text" name="searchBar" id="searchBar" className=' w-full border-gray-800 border-[1px] p-1' placeholder='Search...' />
                    <button className=' bg-orange-600 p-1 text-white text-xl'>search</button>
                </div>
                <li className=' font-medium p-2 text-xl'>PVC AADHAR CARD</li>
                <li className=' font-medium p-2 text-xl'>PVC VOTER ID CARD</li>
                <li className=' font-medium p-2 text-xl'>PVC DRIVING LICENCE</li>
                <li className=' font-medium p-2 text-xl'>PVC HEALTH CARD</li>
                <li className=' font-medium p-2 text-xl'>PVC PAN CARD</li>
                <li className=' font-medium p-2 text-xl'>PVC AYUSHMAN BHARAT CARD</li>
                <li className=' font-medium p-2 text-xl'>PVC ESHRAM CARD</li>
                <li className=' font-medium p-2 text-xl'>SHOP</li>
                <li className='font-medium p-2 text-xl'>LOGIN/REGISTER</li>
            </ul>
            <ul className={`list-none h-full flex flex-col items-center bg-gray-100 shadow-2xl w-[50%] fixed ${showCard ? "right-0" : " right-[-50%] transition duration-150"}`}>
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
        </div >
    )
}

export default MobileNav