import { AiOutlineArrowLeft } from "react-icons/ai";
import {BsThreeDotsVertical} from 'react-icons/bs'

type StateSectionProps = {};

export default function StateSection({}: StateSectionProps) {
  return (
    <section className="text-white m-6 p-6 h-48 bg-primary">
      <section className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full p-1 bg-gray-500 flex justify-center items-center ">
          <AiOutlineArrowLeft size={18} />
        </div>
        <div>
        <p className="text-xl">School November Tasks</p>
        <p className="text-xs">Created by Instructor Day on November 31, 2022</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
            <p>Central Martial Arts</p>
            <p>Sunnyvale, Ca</p>
        </div>
        <div className="bg-white p-2 rounded-lg w-14">
        <div className="w-10 h-10 rounded-full border-8 border-solid border-red-500 border-r-[#F26674] border-t-[#82BCF4]"></div>
        </div>
        <BsThreeDotsVertical size={22}/>
      </div>
      </section>
    </section>
  );
}
