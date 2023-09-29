'use client'
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Input from "../Input";
import NotificationMenu from "./NotificationMenu";
import { useState } from "react";
import MobileSideBar from "../SideBar/MobileSideBar";

type Props = {};

export default function Navbar({}: Props) {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);


  return (
   <nav>
     <div className="bg-primary w-full  p-6 flex justify-between items-center ">
      <div className="flex justify-between gap-3 text-white lg:hidden">
        <button onClick={()=>setIsSideBarOpen(!isSideBarOpen)}><FaBars  size={28} /></button>
        <h3 className="text-lg">WelframeTech</h3>
      </div>

      <div className="hidden md:block">
        <Input />
      </div>
      <div>
        <p className="uppercase underline text-danger text-sm cursor-pointer hidden lg:block">
          Others Menu
        </p>
      </div>
      <div className="hidden lg:block lg:w-52">
        <NotificationMenu />
      </div>
      <div className="hidden lg:flex items-center gap-2 p-2 bg-secondary rounded-full cursor-pointer">
        <Image src={"/usa-circular.png"} width={30} height={30} alt="usa" />
        <p className="uppercase text-white text-sm">English</p>
        <div className="w-0 h-0 border-t-8 border-r-8 border-l-8 border-transparent border-t-danger"></div>
      </div>
      <div className="flex gap-2 items-center cursor-pointer">
        <hr className="w-0.5 h-10 bg-gray-600" />
        <div className="h-10 w-10 rounded-lg bg-[#C4C4C4]" />
        <div className="text-xs text-[#C4C4C4]">
          <p>Instructor Day</p>
          <p className="text-[#0a68ae]">Super Admin</p>
        </div>
        <div className="w-0 h-0 border-t-8 border-r-8 border-l-8 border-transparent border-t-danger"></div>
      </div>
    </div>
   
     <MobileSideBar isSideBarOpen={isSideBarOpen} onClick={()=>setIsSideBarOpen(!isSideBarOpen)}/>
  
   </nav>
  );
}
