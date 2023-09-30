import clsx from "clsx";
import { AiOutlineRight } from "react-icons/ai";
import { sideBarDataType } from "../types/types";

type Props = {
  data: sideBarDataType;
};

export default function Menu({ data }: Props) {
  const { icon: Icon, title, hasSideIcon, id } = data;
  return (
    <div
      className={clsx(
        ` 
    flex justify-between items-center cursor-pointer text-sm 
    `,

        id === 4
          ? "text-[#6418c3]"
          : id === 1 || id === 2
          ? "text-gray-500"
          : "text-[#72a1f0]"
      )}
    >
      <div className="flex gap-3 items-center">
        <Icon size={20} />
        <p className="text-">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        {id === 2&& <p className="px-1 py-0.5 rounded-full bg-[#5dcfff] text-white text-xs">17</p>}
      {hasSideIcon ? <AiOutlineRight /> : ""}
      { id=== 5 && <p className="text-xs px-2 bg-[#e328af] rounded-xl text-white">New</p>}
      {id === 4 && <div className="w-1 h-7 bg-[#6418c3]  absolute right-0 rounded-full"/>}
      </div>
    </div>
  );
}
