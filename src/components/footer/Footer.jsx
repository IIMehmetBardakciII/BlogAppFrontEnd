import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex mt-[50px] justify-between text-softTextColor
    py-[20px] items-center max-md:flex-col max-md:gap-[50px]">
      <div className="flex-[1] flex flex-col gap-[14px]">
        <div className="flex items-center gap-[10px]">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="text-2xl font-bold">Lamablog</h1>
        </div>

        <p className="font-[300]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
          aliquam minus dolorem recusandae nisi adipisci animi dignissimos est,
          quibusdam quas!
        </p>
        <div className="mt-[10px] flex gap-[10px]">


        <Image  src='/facebook.png' alt="" width={18} height={18}/>
        <Image  src='/instagram.png' alt="" width={18} height={18}/>
        <Image  src='/tiktok.png' alt="" width={18} height={18}/>
        <Image  src='/youtube.png' alt="" width={18} height={18}/>


        </div>
      </div>

      <div className="flex-[1] flex justify-end gap-[100px]
      max-lg:gap-[50px] max-md:justify-between max-md:w-full
      max-sm:text-[14px]
      ">
        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Links</span>

          <Link  href='/'>Homepage</Link>
          <Link  href='/'>Blog</Link>
          <Link  href='/'>About</Link>
          <Link  href='/'>Contact</Link>
        </div>

        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Tags</span>

          <Link  href='/'>Style</Link>
          <Link  href='/'>Fashion</Link>
          <Link  href='/'>Coding</Link>
          <Link  href='/'>Travel</Link>
        </div>

        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Social</span>

          <Link  href='/'>Facebook</Link>
          <Link  href='/'>Instagram</Link>
          <Link  href='/'>Tiktok</Link>
          <Link  href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  );
};
