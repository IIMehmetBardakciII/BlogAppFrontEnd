'use client'

import { MenuItem } from '@/constant'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

export const AuthLinks = () => {

  const [open, setOpen] = useState(false)
    // Temporary/Geçici
    const {status} = useSession();
  return (
    <>
    {
        status === 'unauthenticated' ?
        (
            <Link href='/login' className='max-sm:hidden' >Login</Link>
        ):(
          <>
            <Link href='/writer' className='max-sm:hidden' >Write</Link>
            <span className='cursor-pointer max-sm:hidden'  onClick={signOut}>Logout</span>
          </>
        )
    }

    <div className='w-[20px] h-[16px] flex  flex-col justify-between gap-[1px]
    cursor-pointer group 
    sm:hidden'
    onClick={()=>setOpen(!open)}
    >
   <span className='w-full h-2 bg-textColor rounded-sm group-hover:bg-slate-600'></span>
    <span className='w-full h-2 bg-textColor group-hover:bg-slate-600'></span>
    <span className='w-full h-2 bg-textColor rounded-sm group-hover:bg-slate-600'></span>
    </div>
    

    {open && (

      <div className='absolute top-[100px] flex flex-col left-0
      bg-bg h-[calc(100vh-100px)]
      w-[100%] items-center justify-center gap-[50px] text-4xl'>
         {MenuItem.map((item)=>(
            <Link  href={item.href}>{item.label}</Link>
        ))}

          {status === 'notauthenticated' ?
              (
                  <Link href='/login' >Login</Link>
              ):(
                <>
                  <Link href='/writer' >Writer</Link>
                  <span className='cursor-pointer'>Logout</span>
                </>
              )
              }
      </div>
    )}


    </>

   
  )
}
