'use client'
import Image from 'next/image'
import '../globals.css'
import React from 'react'
import { assets } from '../../../public/admin_assets/assets.js'
function Navbar() {
    return (
        <div className='navbar flex justify-between items-center p-[8px 4%] px-10'>
            <div className='header text-[tomato] w-[10%,80px]'>Caravan<p className='text-black text-[20px] font-sans font-normal'>Admin Panel</p></div>
            <Image className='w-[60px]' src={assets.profile_image} alt='' />
        </div>
    )
}

export default Navbar
