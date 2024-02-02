"use client"
import Image from "next/image";
import Link from "next/link";

export const Comments = () => {
  const status = "authenticated";
  return (
    <div className="mt-[50px]">
      <h1 className="text-softTextColor text-2xl mb-[30px] ">Comments</h1>

      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea className="p-[20px] w-full" placeholder="write a comment..." />
          <button className="px-[20px] py-[16px] bg-teal-600 text-white
          font-bold border-none rounded-[5px]">Send</button>
        </div>
      ) : (
        <Link href="login">Login to write a comment</Link>
      )}

      <div className="mt-[50px]">
        <div className="mb-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image src="/p1.jpeg" alt="" width={50} height={50} 
            className="rounded-[50%] object-cover"
            />

            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="font-[500]">John Lesh</span>
              <span className="text-[14px]">01.01.2023</span>
            </div>
            <p className="text-[18px] font-[300]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tempore, sequi nostrum quidem ex id?
            </p>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image src="/p1.jpeg" alt="" width={50} height={50} 
            className="rounded-[50%] object-cover"
            />

            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="font-[500]">John Lesh</span>
              <span className="text-[14px]">01.01.2023</span>
            </div>
            <p className="text-[18px] font-[300]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tempore, sequi nostrum quidem ex id?
            </p>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image src="/p1.jpeg" alt="" width={50} height={50} 
            className="rounded-[50%] object-cover"
            />

            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="font-[500]">John Lesh</span>
              <span className="text-[14px]">01.01.2023</span>
            </div>
            <p className="text-[18px] font-[300]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tempore, sequi nostrum quidem ex id?
            </p>
          </div>
        </div>
        <div className="mb-[50px]">
          <div className="flex items-center gap-[20px] mb-[20px]">
            <Image src="/p1.jpeg" alt="" width={50} height={50} 
            className="rounded-[50%] object-cover"
            />

            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="font-[500]">John Lesh</span>
              <span className="text-[14px]">01.01.2023</span>
            </div>
            <p className="text-[18px] font-[300]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
              tempore, sequi nostrum quidem ex id?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


