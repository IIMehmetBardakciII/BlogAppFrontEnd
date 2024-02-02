import React from 'react'
import { Card } from '../card/Card'
import { Pagination } from '..'


const getData= async (page)=>{
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,{
    cache:"no-store",

  });

  if(!res.ok){
    throw new Error("failed")
  }

  return res.json();
  
}

 const CardList = async ({page}) => {

  const data  = await getData(page);

  return (
    <div className='flex-[5]  my-12'>
      <h1 className='my-[20px] font-bold text-3xl'>Recent Posts</h1>
      <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />

        <Pagination />
      </div>
      </div>
  )
}

export default CardList