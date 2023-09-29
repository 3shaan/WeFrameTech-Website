import React from 'react'
import Input from '../Input'
import NotificationMenu from './NotificationMenu'
import Image from 'next/image'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='bg-primary w-full  p-6 flex justify-between items-center'>
        <Input/>
        <div>
            <p className='uppercase underline text-danger text-sm'>Others Menu</p>
        </div>
        <NotificationMenu/>
        <div className='flex items-center gap-2 p-2 bg-secondary rounded-full cursor-pointer'>
            <Image src={'/usa-circular.png'} width={30} height={30} alt='usa'/>
            <p className='uppercase text-white text-sm'>English</p>
            <div className="w-0 h-0 border-t-8 border-r-8 border-l-8 border-transparent border-t-danger"></div>
        </div>
        <div className='flex gap-2 items-center'>
            <hr className='w-0.5 h-10 bg-gray-600' />
            <div className='h-10 w-10 rounded-lg bg-[#C4C4C4]'/>
            <div className='text-xs text-[#C4C4C4]'>
                <p>Instructor Day</p>
                <p className='text-[#0a68ae]'>Super Admin</p>
            </div>
            <div className="w-0 h-0 border-t-8 border-r-8 border-l-8 border-transparent border-t-danger"></div>
        </div>
    </nav>
  )
}