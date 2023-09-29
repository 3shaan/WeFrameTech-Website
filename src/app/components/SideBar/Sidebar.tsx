import { FaBars } from "react-icons/fa";
import { sidebarData } from "../../data/sidebarData";
import Menu from "../Menu";
import {PiDotsNineBold} from 'react-icons/pi'
import {FaArrowRightLong} from 'react-icons/fa6'

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <section className="bg-primary text-white  h-screen p-7 lg:w-72">
      <div className="hidden lg:flex justify-between pb-5">
        <h3 className="text-xl">WelframeTech</h3>
        <FaBars size={28} />
      </div>
      <div>
        <p className="text-xl uppercase">Main Menu</p>
        <div className="space-y-6 mt-5">
          {sidebarData.map((data) => (
            <Menu data={data} key={data.id} />
          ))}
        </div>
      </div>
      <div className="mt-10 bg-[#0978d3] p-5 rounded-lg space-y-2">
            <PiDotsNineBold size={28}/>
            <p>Increase your <br /> work with kanban</p>
            <FaArrowRightLong size={28}/>

      </div>
    </section>
  );
}
