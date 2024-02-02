import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Pagination } from '../pagination/Pagination'



const getData= async ()=>{
  const res = await fetch("http://localhost:3000/api/categories",{
    cache:"no-store",

  });

  if(!res.ok){
    throw new Error("failed")
  }

  return res.json();
  
}

 const CategoryList = async () => {
  
  const data =await getData();

  return (
    <div>
      <h1 className='my-[50px]'>Popular Categories</h1>

      <div className="flex  flex-wrap justify-between gap-[20px]">

        {/* {
          data.map((item)=>(

            
          <Link href={`/blog?cat=${item.slug}`} className='flex items-center gap-[10px] capitalize
          bg-softBg rounded-[10px] w-[15%] h-[80px] justify-center 
          max-xl:w-[20%]  max-lg:w-[25%] max-md:w-[45%] max-sm:w-[100%]' >
          {item.img &&<Image 
          src={item.img} alt="style"
          width={32} height={32}

          className='rounded-[50%] h-[32px] '
          />}
          {item.title}
          </Link>
          ))
        } */}




      </div>

    </div>
  )
}


export default CategoryList