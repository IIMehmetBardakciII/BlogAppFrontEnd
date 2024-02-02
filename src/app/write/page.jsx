"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");


  const {status}=useSession();

  const router = useRouter();

  if(status==="loading"){
    return <div>Loading...</div>
  }

  if(status==="authenticated"){
    

    router.push('/')

  }
  

  return (
    <div className="flex flex-col gap-[15px] relative">
      <input
        type="text"
        placeholder="Title"
        className="text-[64px] bg-transparent p-[50px] border-none outline-none placeholder:text-[#b3b3b1] "
      />
      <div className="flex gap-[20px] h-[700px] relative  ">
        <button onClick={() => setOpen(!open)} className="button relative z-[1000]">
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button>

        {open && (
          <div className="flex gap-[20px] bg-bg absolute z-[999]  w-full left-[50] ml-[50px]">
            <button className="button border-green-400">
              <Image src="/image.png" alt="plus" width={16} height={16} />
            </button>

            <button>
              <Image
                className="button border-green-400"
                src="/external.png"
                alt="plus"
                width={16}
                height={16}
              />
            </button>

            <button>
              <Image
                className="button border-green-400"
                src="/video.png"
                alt="plus"
                width={16}
                height={16}
              />
            </button>
          </div>
        )}

        <ReactQuill
          className="w-full mt-[30px]"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
        />
      </div>

      <button type="submit" className="publish" >Publish</button>
    </div>
  );
};

export default WritePage;
