"use client"

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const {data,status}=useSession();

  const router = useRouter();

  if(status==="loading"){
    return <div>Loading...</div>
  }

  if(status==="authenticated"){
    

    router.push('/')

  }
  
 

  return (
    <div
      className="flex items-center justify-center mt-[60]
    rounded-[10px]"
    >
      <div className="bg-softBg py-[150px] px-[200px] flex flex-col gap-[50px]
        max-md:p-[50px] max-sm:p-[30px] max-lg:p-[75px]
      ">
        <div className="loginButton bg-red-500" onClick={()=>signIn("google")}>
          Sign in with Google
        </div>
        <div className="loginButton bg-slate-900">Sign in with Github</div>
        <div className="loginButton bg-blue-500">Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
