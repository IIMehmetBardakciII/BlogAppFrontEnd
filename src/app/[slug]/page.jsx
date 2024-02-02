
import { Comments, Menu } from "@/components";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-[1] ">
          <h1 className=" text-[64px] mb-[50px] font-bold max-2xl:text-[54px]
          max-xl:text-[48px]  max-sm:text-[36px]
          ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <div className="flex items-center gap-[20px]">
            <div className="relative w-[50px] h-[50px] ">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="object-cover rounded-[50%]  "
              />
            </div>
            <div className="flex flex-col gap-[5px] text-softTextColor">
              <span className="text-[20px] font-[500]">John Lesh</span>
              <span>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className="flex-[1] relative h-[350px] max-lg:hidden">
          <Image src="/p1.jpeg" alt="" fill className="object-cover " />
        </div>
      </div>

      <div className="flex gap-[50px]">
        <div className="flex-[5] mt-[60px]">
          <div className="descp">
            <p className="text-[20px] font-[300] mb-[20px] max-sm:text[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              cupiditate repellendus exercitationem delectus iusto, alias vero
              laboriosam corrupti quidem omnis consequuntur, temporibus
              reprehenderit non dolorem iste ipsum quas ab quia.
            </p>
            <h2 className="text-2xl font-[600]">Lorem ipsum dolor sit amet.</h2>
            <p className="text-[20px] font-[300] mb-[20px] max-sm:text[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              cupiditate repellendus exercitationem delectus iusto, alias vero
              laboriosam corrupti quidem omnis consequuntur, temporibus
              reprehenderit non dolorem iste ipsum quas ab quia.
            </p>
            <p className="text-[20px] font-[300] mb-[20px] max-sm:text[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
              cupiditate repellendus exercitationem delectus iusto, alias vero
              laboriosam corrupti quidem omnis consequuntur, temporibus
              reprehenderit non dolorem iste ipsum quas ab quia.
            </p>
          </div>
          <div className="comment">
            <Comments />
          </div>
          
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
