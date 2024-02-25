import React from 'react'

const Footer = () => {
    return (
        <div className=' w-screen h-auto'>
            <div className=' w-full bg-gray-500 px-3 py-4'>
                <h3 className=' text-white text-2xl p-2'>IMPORTANT LINKS</h3>
                <div className=' w-9 h-1 bg-gray-300 mx-2'></div>
                <ul className=' list-none'>
                    <li className='p-2 text-white'>Refund Policy</li>
                    <li className='p-2 text-white'>Contact</li>
                    <li className='p-2 text-white'>Privacy</li>
                    <li className='p-2 text-white'>Terms and Conditions</li>
                </ul>
            </div>
            <div className=' w-full bg-gray-600 px-3 py-4'>
                <h3 className=' text-white text-2xl p-2'>LATEST NEWS</h3>
                <div className=' w-9 h-1 bg-gray-300 mx-2'></div>
                <ul className=' list-none'>
                    <li className='p-2 text-white'>Your Post Title</li>
                    <li className='p-2 text-white'>PVC Card Printing: A Guide to High-Quality Custom Cards</li>
                </ul>
            </div>
            <div className=' w-full bg-gray-600 px-3 py-4'>
                <h3 className=' text-white text-2xl p-2'>SIGNUP FOR NEWSLETTER</h3>
                <div className=' w-9 h-1 bg-gray-300 mx-2'></div>
                <ul className=' list-none'>
                    <li className='p-2 text-white'>Sign up for to receive the latest updates, promotions, and exclusive offers. Stay connected and never miss out!</li>
                </ul>
                <div class="container mx-auto px-4">
                    <form action="">
                        <div class="mb-4">
                            <label for="name" class="block text-white">Your Name</label>
                            <input type="text" id="name" name="name" class="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-white">Your Email</label>
                            <input type="email" id="email" name="email" class="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div class="mb-4">
                            <label for="subject" class="block text-white">Subject</label>
                            <input type="text" id="subject" name="subject" class="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-white">Your Message (optional)</label>
                            <textarea id="message" name="message" rows="3" class="form-textarea mt-1 block w-full border-gray-300 rounded-md shadow-sm"></textarea>
                        </div>
                        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">SUBMIT</button>
                    </form>
                </div>

            </div>
            <div className=' w-full bg-gray-600 px-3 py-4'>
                <h3 className=' text-white text-2xl p-2'>POPULAR SEARCHES</h3>
                <div className=' w-9 h-1 bg-gray-300 mx-2'></div>
                <ul className=' list-none'>
                    <li className='p-2 text-white'>Aadhar Card PVC, Aadhar PVC Card, PVC Adharcard, PVC Aadharcard, Aadharcard PVC, Adharcard PVC, Aadhar Card in PVC, Aadhaar PVC Card, PVC Card Printing, PVC Card Print, Aadhar Card PVC Order</li>
                </ul>
            </div>
            <div className=' w-full bg-gray-600 px-3 py-4'>
                <ul className=' list-none flex justify-center'>
                    <li className='p-1 text-white bg-gray-400 rounded-lg mx-2 my-3'>Paytm</li>
                    <li className='p-1 text-white bg-gray-400 rounded-lg mx-2 my-3'>GPay</li>
                    <li className='p-1 text-white bg-gray-400 rounded-lg mx-2 my-3'>PayPal</li>
                    <li className='p-1 text-white bg-gray-400 rounded-lg mx-2 my-3'>Credit Card</li>
                </ul>
                <ul className=' list-none flex justify-center'>
                    <li className='p-1 text-white'>Paytm</li>
                    <li className='p-1 text-white'>GPay</li>
                    <li className='p-1 text-white'>PayPal</li>
                    <li className='p-1 text-white'>Credit Card</li>
                </ul>
                <hr />
                <ul className=' list-none flex justify-center'>
                    <li className='p-3 text-white'> Copyright 2024 © PVC Adhar Card</li>
                </ul>

            </div>
        </div>
    )
}

export default Footer