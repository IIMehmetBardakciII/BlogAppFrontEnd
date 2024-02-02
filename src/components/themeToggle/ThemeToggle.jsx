'use client'
import { ThemeContext } from '@/context/ThemeContext'
import Image from 'next/image'
import React, { useContext } from 'react'

export const ThemeToggle = () => {

  const {toggle,theme} = useContext(ThemeContext)


  return (
    <div className='themetoggle' onClick={toggle}>
      <Image src='/moon.png' alt='moon' width={14} height={14}/>
      <span className={`w-[15px] h-[15px] rounded-full
      bg-bg absolute  ${theme==='dark' ? 'left-[1px]' : 'right-[1px]'} ease-in-out duration-300`}></span>
      <Image src='/sun.png' alt='moon' width={14} height={14}/>
    </div>
  )
}
