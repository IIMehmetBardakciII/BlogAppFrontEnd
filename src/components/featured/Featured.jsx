import Image from "next/image";
import React from "react";

export const Featured = () => {
  return (
    <div className="mt-[30px] ">
      <h1 className="text-[96px] max-xl:text-[72px] max-lg:text-[64px]
      max-md:text[48px] max-sm:text-[32px]">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas
      </h1>

      <div className="mt-[60px] flex items-center gap-[50px] ">
        <div className="relative  h-[550px] flex-[1] max-lg:hidden  ">
          <Image src="/p1.jpeg" alt="fill" fill  className="object-cover"/>
        </div>

        <div className="flex-[1] flex flex-col gap-5">
          <h1 className="text-[40px] font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="text-xl font-[300] text-softTextColor">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maiores architecto quod distinctio dolore alias doloremque a cum.
            Eaque reiciendis quidem exercitationem, cumque deserunt inventore
            velit dolor maxime dicta voluptatibus.
          </p>
          <button className="py-4 px-5 border-none rounded-[5px] bg-textColor text-bg w-max">
            Read More
            </button>
        </div>
      </div>
    </div>
  );
};
