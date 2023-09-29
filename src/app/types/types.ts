import {IconType} from "react-icons";

export interface sideBarDataType {
    id:number
    icon:IconType,
    title:string,
    hasSideIcon?:boolean
}

export interface NotificationMenuType {
    id:number,
    icon:IconType,
    number:number | null
}