import React from 'react'
import { BellRing, CircleUserRound, Search } from 'lucide-react'
function Navbar() {
    return (
        <>
            <div className='sm:flex sm:justify-between sm:border-slate-200 sm:border-b-2 sm:text-xl
            hidden'>
                <a className='sm:p-4 cursor-pointer'>Logo</a>
                <a className='sm:p-4 sm:border-b-4 sm:border-green-600 cursor-pointer'>Home</a>
                <a className='sm:p-4 cursor-pointer'>Services</a>
                <a className='sm:p-4 cursor-pointer'>Blog</a>
                <a className='sm:p-4 cursor-pointer'>Offers</a>
                <a className='sm:p-4 cursor-pointer'>About Us</a>
                <div className='sm:flex'>
                <a className='sm:p-4 cursor-pointer'> <Search color='black' size={30} /> </a>
                <a className='sm:p-4 cursor-pointer'> <BellRing color='black' size={30} /> </a>
                <a className='sm:p-4 cursor-pointer'> <CircleUserRound color='black' size={30} /> </a>
                </div>
            </div>

        </>
    )
}

export default Navbar