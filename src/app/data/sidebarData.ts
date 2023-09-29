import { sideBarDataType } from "../types/types";
import {TbDashboard, TbSettingsFilled} from 'react-icons/tb';
import {MdGroups, MdOutlineMarkEmailUnread} from 'react-icons/md'
import {AiOutlineShop, AiOutlineWechat} from 'react-icons/ai'
import {BsGrid, BsFillCalendarFill} from 'react-icons/bs'
import {LuContact} from 'react-icons/lu'
import { FaFileInvoiceDollar } from "react-icons/fa";

export const sidebarData:sideBarDataType[] = [
    {
        id:1,
        icon:TbDashboard,
        title:"Dashboard",
    },
    {   id:2,
        icon:MdOutlineMarkEmailUnread,
        title:"Email",
        hasSideIcon:true
    },
    {   id:3,
        icon:AiOutlineWechat,
        title:"Chat"
    },
    {   id:4,
        icon:BsGrid,
        title:"Kanban",
        hasSideIcon:true
    },
    {   id:5,
        icon:LuContact,
        title:"Contact"
    },
    {   id:6,
        icon:BsFillCalendarFill,
        title:"Calender"
    },
    {   id:7,
        icon:MdGroups,
        title:"Courses",
        hasSideIcon:true
    },
    {
        id:8,
        icon:AiOutlineShop,
        title:"Shop"
    },
    {
        id:9,
        icon:FaFileInvoiceDollar,
        title:"Invoice",
        hasSideIcon:true
    },
    {   id:10,
        icon:TbSettingsFilled,
        title:"Settings"
    },
]