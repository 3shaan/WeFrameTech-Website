import React from 'react'
import {FaBars} from 'react-icons/fa';
import { sidebarData } from '../data/sidebarData';
import Menu from './Menu';


type Props = {}

export default function Sidebar({}: Props) {
  return (
    <section className='bg-[#110f22] text-white w-[345px] h-screen p-7'>
      <div className='flex justify-between pb-5'>
        <h3 className='text-xl'>WelframeTech</h3>
        <FaBars size={28} />
      </div>
      <div>
        <p className='text-xl uppercase'>Main Menu</p>
        <div className='space-y-9 mt-5'>
          {
            sidebarData.map(data=>(
              <Menu data={data} key={data.id}/>
            ))
          }

        </div>
      </div>
    </section>
  )
}