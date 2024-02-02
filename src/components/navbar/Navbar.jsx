import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuItem } from '@/constant'
import { ThemeToggle } from '../themeToggle/ThemeToggle'
import { AuthLinks } from '../authLinks/AuthLinks'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[100px] w-full'>
      {/* socialMedia */}
      <div className='flex gap-[10px] flex-1
      max-lg:hidden
      '>
        <Image src='/facebook.png' alt='facebook ' width={24} height={24} />
        <Image src='/instagram.png' alt='instagram ' width={24} height={24} />
        <Image src='/tiktok.png' alt='tiktok ' width={24} height={24} />
        <Image src='/youtube.png' alt='youtube ' width={24} height={24} />
      </div>
      {/* logo */}
      <div className='text-text font-bold text-4xl flex-1 text-center
       max-xl:text-[32px]
       max-lg:text-left mr-1
       max-md:text-[24px]
       '>
        lamablog
      </div>
    {/* Menu */}
      <div className='flex gap-5 flex-1 text-[20px] items-center
      max-xl:text-[18px] max-xl:gap-[15px] max-sm:justify-end 
      '>
      <ThemeToggle />
        {MenuItem.map((item)=>(
            <Link className='max-sm:hidden' href={item.href}>{item.label}</Link>
        ))}

        <AuthLinks />
        
      </div>
    </div>
  )
}
