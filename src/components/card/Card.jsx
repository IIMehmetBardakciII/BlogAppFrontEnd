import Image from "next/image";
import Link from "next/link";

export const Card = () => {
  return (
    <div className="flex  gap-[50px]  mb-[50px] items-center">
      <div className=" h-[350px] relative flex-[1] max-lg:hidden ">
        <Image className="object-cover" src="/p1.jpeg" alt="p1" fill />
      </div>


      <div className="text-container flex-[1] flex flex-col 
      gap-[30px]">
        <div className="deta">
          <span className="text-gray-600">11.02.2023 - </span>
          <span className="text-red-700 font-[500]">Culture</span>
        </div>

        <Link href='/'>
        <h1 className="font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </Link>

        <p className="text-[18px] font-[300] text-softTextColor">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          provident rerum, qui dolores sint aliquid voluptate nemo accusamus
          dolorem aperiam culpa expedita? Saepe officia ea impedit tempora
          quibusdam aut facere?
        </p>
        <Link className="border-b-[1px] border-solid border-red-700 w-max py-[2px]"  href='/'>Read More</Link>
      </div>
    </div>
  );
};
