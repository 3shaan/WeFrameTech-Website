import { sideBarDataType } from "../types/types";
import {TbDashboard} from 'react-icons/tb';
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {AiOutlineWechat} from 'react-icons/ai'
import {BsGrid, BsFillCalendarFill} from 'react-icons/bs'
import {LuContact} from 'react-icons/lu'

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
        icon:BsFillCalendarFill,
        title:"Courses",
        hasSideIcon:true
    },
    {
        id:8,
        icon:BsFillCalendarFill,
        title:"Shop"
    },
    {
        id:9,
        icon:BsFillCalendarFill,
        title:"Invoice",
        hasSideIcon:true
    },
    {   id:10,
        icon:BsFillCalendarFill,
        title:"Settings"
    },
]