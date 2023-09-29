import { NotificationMenuType } from "../types/types";
import {IoNotifications} from 'react-icons/io5'
import {MdOutlineContactMail} from 'react-icons/md'
import {BiTask} from 'react-icons/bi';
import {BsFillCalendarFill} from 'react-icons/bs'

export const notificationMenuData:NotificationMenuType[] = [
    {
        id:1,
        icon:IoNotifications,
        number:12
    },
    {
        id:2,
        icon:MdOutlineContactMail,
        number:12
    },
    {
        id:3,
        icon:BiTask,
        number:12
    },
    {
        id:4,
        icon:BsFillCalendarFill,
        number:null
    }
]