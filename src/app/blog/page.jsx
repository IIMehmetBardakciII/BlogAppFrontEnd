import { CardList, Menu } from '@/components'
import React from 'react'

 const BlogPage = () => {
  return (
    <div>

        <h1 className='bg-orange-400 text-2xl text-white px-[5px] py-[10px]
        text-center
        '>Style Blog</h1>

        <div className='flex gap-[50px]'>
            <CardList />
            <Menu />
        </div>
    </div>
  )
}


export default BlogPage
