'use client'
import Image from 'next/image'
import '../globals.css'
import React from 'react'
import { assets } from '../../../public/admin_assets/assets'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className='sidebar text-[max(1vw,10px)] w-[18%] min-h-[100vh] border-[1.5px] border-[solid] border-[#a9a9a9] border-t-0'>
            <div className='sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px]'>
                <Link href='/Add'>
                    <div className={`sidebar-option flex items-center gap-[10px] ${isActive('/Add') ? 'active' : ''}`}>
                        <Image src={assets.add_icon} alt='Add' width={20} height={20} />
                        <p>Add Item</p>
                    </div>
                </Link>
                <Link href='/List'>
                    <div className={`sidebar-option flex items-center gap-[10px] ${isActive('/List') ? 'active' : ''}`}>
                        <Image src={assets.order_icon} alt='List' width={20} height={20} />
                        <p>List Items</p>
                    </div>
                </Link>
                <Link href='/Orders'>
                    <div className={`sidebar-option flex items-center gap-[10px] ${isActive('/Orders') ? 'active' : ''}`}>
                        <Image src={assets.order_icon} alt='Orders' width={20} height={20} />
                        <p>Orders</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar
