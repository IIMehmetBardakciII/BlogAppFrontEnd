import Image from "next/image"
import Link from "next/link"

export const MenuPosts = ({withImage}) => {
  return (
    <div>

    
 



  <div className="mt-[20px] flex flex-col gap-[35px]">
        <Link href="/" className="flex items-center  gap-[20px]">
        {withImage &&  <div className="relative aspect-square	 flex-[1]">
            <Image
              src="/p1.jpeg"
              alt="p1"
              fill
              className="object-cover rounded-[50%] border-[3px] border-solid border-textColor"
            />
          </div>}

          <div className="flex-[4] flex flex-col gap-[5px]">
            <span className="bg-red-500 flex items-center justify-center text-softBg rounded-lg w-max px-[8px] py-[3px] text-[12px]">
              Travel
            </span>
            <h3 className="text-[18px] font-[500] text-softTextColor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className="text-[12px]">
              <span>John Lash</span>
              <span className="text-gray-500">- 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className="flex items-center  gap-[20px]">
    {  withImage &&  <div className="relative aspect-square	 flex-[1]">
            <Image
              src="/p1.jpeg"
              alt="p1"
              fill
              className="object-cover rounded-[50%] border-[3px] border-solid border-textColor"
            />
          </div>}

          <div className="flex-[4] flex flex-col gap-[5px]">
            <span className="bg-orange-500 flex items-center justify-center text-softBg rounded-lg w-max px-[8px] py-[3px] text-[12px]">
              Culture
            </span>
            <h3 className="text-[18px] font-[500] text-softTextColor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className="text-[12px]">
              <span>John Lash</span>
              <span className="text-gray-500">- 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className="flex items-center  gap-[20px]">
          { withImage &&  <div className="relative aspect-square	 flex-[1]">
            <Image
              src="/p1.jpeg"
              alt="p1"
              fill
              className="object-cover rounded-[50%] border-[3px] border-solid border-textColor"
            />
          </div>}

          <div className="flex-[4] flex flex-col  gap-[5px]">
            <span className="bg-green-500 flex items-center justify-center text-softBg rounded-lg w-max px-[8px] py-[3px] text-[12px]">
              Food
            </span>
            <h3 className="text-[18px] font-[500] text-softTextColor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className="text-[12px]">
              <span>John Lash</span>
              <span className="text-gray-500">- 10.03.2023</span>
            </div>
          </div>
        </Link>

        <Link href="/" className="flex items-center  gap-[20px]">
         { withImage &&  <div className="relative aspect-square	 flex-[1]">
            <Image
              src="/p1.jpeg"
              alt="p1"
              fill
              className="object-cover rounded-[50%] border-[3px] border-solid border-textColor"
            />
          </div>}

          <div className="flex-[4] flex flex-col gap-[5px]">
            <span className="bg-pink-500 flex items-center justify-center text-softBg rounded-lg w-max px-[8px] py-[3px] text-[12px]">
              Fashion
            </span>
            <h3 className="text-[18px] font-[500] text-softTextColor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h3>

            <div className="text-[12px]">
              <span>John Lash</span>
              <span className="text-gray-500">- 10.03.2023</span>
            </div>
          </div>
        </Link>
      </div>

  </div>
  )
}
