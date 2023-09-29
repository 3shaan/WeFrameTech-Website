import React from 'react'

type Props = {
    width : number;
    color: string,
    height : number
}

export default function ProgressBar({width, color, height}: Props) {
  return (
    <div className={`overflow-hidden mb-4 text-xs flex rounded bg-[#1f2223] w-full h-${height}`}>
    <div style={{ width: `${width}%` , backgroundColor:`${color}`}} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}></div>
</div>
  )
}