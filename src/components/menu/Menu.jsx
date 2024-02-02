import { Categories } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuPosts } from "../menuposts/MenuPosts";

export const Menu = () => {
  return (
    <div className="flex-[2] my-16 max-lg:hidden">
      <div className="flex-[2] my-16">
        <h2 className="text-gray-600 text-base font-[400]">{"What's hot"}</h2>
        <h1 className="text-[28px] font-bold">Most Popular</h1>
        <MenuPosts withImage={false} />
      </div>

      <h2 className="text-gray-600 text-base font-[400]">Discover by topic </h2>
      <h1 className="text-[28px] font-bold">Categories</h1>
      <div className="flex items-center flex-wrap justify-around gap-[20px] my-[30px]">
        {Categories.map((category) => (
          <Link
            href={`/blog?cat=${category.href}`}
            className="flex items-center gap-[10px] capitalize
              bg-softBg rounded-[10px] w-[30%] h-[40px] justify-center  
              "
          >
            <Image
              src={category.image}
              alt={category.alt}
              width={32}
              height={32}
              className="rounded-[50%] h-[32px] "
            />
            {category.label}
          </Link>
        ))}
      </div>

      <h2 className="text-gray-600 text-base font-[400]">
        Chosen by the editor
      </h2>
      <h1 className="text-[28px] font-bold">Editors Pick</h1>
     

     <MenuPosts  withImage={true}/>



     
    </div>
  );
};
