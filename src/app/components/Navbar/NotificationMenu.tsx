import { notificationMenuData } from '@/app/data/NotificationMenuData'
import clsx from 'clsx';
import React from 'react'

export default function NotificationMenu() {
  return (
    <div className='flex gap-4'>
        {
            notificationMenuData.map(data=>{
                const {id, icon:Icon,number} = data;
                return(
                    <div key={id} className='relative text-[#777cf1]'>
                        <Icon size={24}/>
                        <p className={clsx(`
                        absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-gray-950  rounded-full -top-2 -right-2 
                        `,
                        number ? "bg-[#5dcfff]" : "bg-[#e328af]"
                        )}>{number ? number : "!"}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
