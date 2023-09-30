import React from 'react'
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import Input from '../Input';
import NotificationMenu from '../Navbar/NotificationMenu';
import Sidebar from './Sidebar';

type Props = {
    onClick: ()=> void;
    isSideBarOpen : boolean
}

export default function MobileSideBar({onClick, isSideBarOpen}: Props) {
  return (
    <div className={`${isSideBarOpen || "hidden"} fixed inset-0 h-screen w-screen z-50  overflow-hidden p-4 bg-black bg-opacity-[.65] lg:hidden`}>
        <aside id='sidebar-animation' className='sidebar-animation absolute z-10 inset-0  transition-transform ease-in-out duration-500 bg-primary text-white p-5 overflow-auto'>
        <div className="flex justify-between pb-5">
        <h3 className="text-xl">WelframeTech</h3>
        <button onClick={onClick}><AiOutlineDoubleLeft size={28} /></button>
      </div>
      
      <div className='space-y-5'>
        <Input/>
        <NotificationMenu/>
      </div>
        <Sidebar/>
        </aside>
    </div>
  )
}