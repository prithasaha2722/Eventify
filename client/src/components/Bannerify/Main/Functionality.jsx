import React from 'react'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function Functionality(props) {
  return (
    <div className='flex items-start w-1/4'>
        <div className='mr-5 text-[#009688] text-3xl '><TaskAltIcon /></div>
        <div className='text-3xl h-min-[64px] '>{props.text}</div>
    </div>
    
  )
}
