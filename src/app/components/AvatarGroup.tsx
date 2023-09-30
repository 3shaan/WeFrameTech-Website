import React from 'react'
import { avatarData } from '../data/avatarData'
import Image from 'next/image'

type Props = {
    width : number,
    height : number,
    isMore?:boolean
}

export default function AvatarGroup({width, height, isMore}: Props) {
  return (
    <div className="flex -space-x-3 justify-center items-center">
            {
                avatarData.map(avatar=>(
                    <Image key={avatar.id} src={avatar.src} width={width} height={height} alt="" className="rounded-full" />
                ))
            }
            {
               isMore && <div className='w-7 h-7 rounded-full bg-[#e328af] flex justify-center items-center text-xs' >10+</div> 
            }
            
        </div>
  )
}