import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import {LiaCommentSolid} from "react-icons/lia"
import AvatarGroup from "./AvatarGroup";
import Button from "./Button";
import ProgressBar from "./ProgressBar";

type StateSectionProps = {};

export default function StateSection({}: StateSectionProps) {
  return (
    <section className="text-white m-6 p-6 lg:h-44 bg-primary rounded-md flex flex-col justify-between">
      <section className="md:flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full p-1 bg-gray-500 hidden md:flex justify-center items-center ">
            <AiOutlineArrowLeft size={18} />
          </div>
          <div>
            <p className="text-xl">School November Tasks</p>
            <p className="text-xs">
              Created by Instructor Day on November 31, 2022
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 lg:mt-0">
          <div>
            <p>Central Martial Arts</p>
            <p>Sunnyvale, Ca</p>
          </div>
          <div className="bg-white p-2 rounded-lg w-14">
            <div className="w-10 h-10 rounded-full border-8 border-solid border-red-500 border-r-[#F26674] border-t-[#82BCF4]"></div>
          </div>
          <BsThreeDotsVertical size={22} />
        </div>
      </section>
      {/* second half  */}
      <section className="md:pl-10 md:flex justify-between items-center gap-10">
        <div className="lg:flex gap-3 grid grid-cols-3 mt-3 lg:mt-0 gap-x-10">
          <AvatarGroup width={30} height={30} isMore />
          <div className="col-span-2">
          <Button danger type="button">
           <MdPersonAddAlt1 size={22} /> <p>Invite People</p>
          </Button>
          </div>
          <Button isOutline type="button">
            Private
          </Button>
          <Button primary type="button">
            Edit
          </Button>
         <div className="col-span-2">
         <Button isOutline type="button">
          <LiaCommentSolid size={22} /> <p>45 Comments</p>
          </Button>
         </div>
        </div>

        <div className="lg:flex items-center gap-3 mt-4 lg:mt-0">
          <p className="text-sm">Total Progress 60%</p>
          <div className="w-60">
          <ProgressBar width={60} color="#6418c3" height={2}/>
          </div>
        </div>
      </section>
    </section>
  );
}
