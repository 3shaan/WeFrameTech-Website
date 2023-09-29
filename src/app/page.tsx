import Image from 'next/image'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar/Navbar'
import StateSection from './components/StateSection'
import TaskSection from './components/TaskSection/TaskSection'

export default function Home() {
  return (
    <main className='bg-[#0e0c21] grid grid-cols-5'>
      <Sidebar/>
      <div className='col-span-4'>
      <Navbar/>
      <StateSection/>
      <TaskSection/>
      </div>
      
    </main>
  )
}
