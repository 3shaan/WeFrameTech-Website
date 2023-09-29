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

export interface TodoType {
    id:number;
    tag:string;
    title:string;
    percentage : number
    due_time :Date
    isProgressing ? : boolean
    isDone ?: boolean
    isRevised ? : boolean
    color: string
    taskTypeId: number
}