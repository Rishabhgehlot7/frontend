import React, { useEffect, useState } from 'react'

const MobileNav = () => {
    const [show, setShow] = useState(false)
    const showNav = () => {
        setShow(!show)
    }
    useEffect(() => {

    }, [show])

    console.log(show);
    return (
        <div className=' w-screen h-auto flex flex-col md:hidden'>
            <div className='flex bg-red-800 w-full h-full p-1 justify-center text-white'>
                <div className='p-1 text-xs'>WHATSAPP US AT 9284542909</div>
            </div>
            <div className='flex bg-gray-100 w-full h-full p-3 justify-between'>
                <button onClick={showNav}>Menu</button>
                <div className='px-3 py-1 font-bold'>pvcadharcard</div>
                <button className='bg-red-600 py-1 px-3 rounded-lg text-white border-none'>Card</button>
            </div>
            <ul className={`list-none flex flex-col bg-gray-100 shadow-2xl w-[50%] fixed ${show ? "" : " left-[-50%] transition duration-150"}`}>
                <button onClick={showNav} className=' absolute right-0 p-3 font-bold'>X</button>
                <div className=' h-8'></div>
                <div className='flex justify-center items-center h-[50px] m-4'>
                    <input type="text" name="searchBar" id="searchBar" className=' w-full border-gray-800 border-[1px] p-1' placeholder='Search...' />
                    <button className=' bg-orange-600 p-1 text-white'>search</button>
                </div>
                <li className=' font-medium p-2 text-xs'>PVC AADHAR CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC VOTER ID CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC DRIVING LICENCE</li>
                <li className=' font-medium p-2 text-xs'>PVC HEALTH CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC PAN CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC AYUSHMAN BHARAT CARD</li>
                <li className=' font-medium p-2 text-xs'>PVC ESHRAM CARD</li>
                <li className=' font-medium p-2 text-xs'>SHOP</li>
                <li className='font-medium p-2 text-xs'>LOGIN/REGISTER</li>
            </ul>
        </div >
    )
}

export default MobileNav