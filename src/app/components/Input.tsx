import React from 'react';
import {BiSearch} from 'react-icons/bi'

export default function Input() {
  return (
    <div className=' bg-secondary rounded-full relative'>
        <label htmlFor="" className='absolute left-3 top-2.5 text-[#0a68ae]'><BiSearch size={24}/></label>
        <input type="text" placeholder='Search here' className='block w-full p-3 pl-10 text-sm rounded-full bg-secondary placeholder:pl-2 placeholder:text-gray-600 text-white' />
    </div>
  )
}
