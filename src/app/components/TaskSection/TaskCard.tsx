import React from 'react'
import {BiDotsHorizontalRounded} from "react-icons/bi"
import ProgressBar from '../ProgressBar'
import AvatarGroup from '../AvatarGroup'
import { TodoType } from '@/app/types/types'
import clsx from 'clsx'

type Props = {
    data: TodoType
}

export default function TaskCard({data}: Props) {
    const {id,tag,color,percentage,due_time,title} = data;
    const currentDate = new Date();
    const differenceMs = due_time.getTime() - currentDate.getTime();
    const daysLeft = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    // console.log(daysLeft)
  return (
    <div className='w-64 bg-[#060414] rounded-xl my-3'>
        <div className={clsx(`w-64 p-4 bg-secondary rounded-xl text-white space-y-5 `,
    id === 5 && "rotate-12 mt-10"
    )}>
        <div className='flex justify-between'>
            <div className='flex gap-3 items-center'>
            <div className={`w-2 h-2 rounded-full`} style={{backgroundColor:`${color}`}} />
            <p>{tag} </p>
            </div>
            <BiDotsHorizontalRounded size={22} className='cursor-pointer'/>
        </div>
        <p className='text-sm'>{title}</p>
        <ProgressBar width={percentage} height={2} color={color}/>
        <div className='flex justify-between'>
            <AvatarGroup height={25} width={25}/>
            <p className='text-xs'>Due in {daysLeft} days</p>
        </div>
    </div>
    </div>
  )
}