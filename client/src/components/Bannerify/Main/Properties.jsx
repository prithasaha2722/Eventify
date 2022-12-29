import React from 'react'

export default function Properties(props) {
    return (
        <div className='flex border border-[#dae4ea] items-center'>
            <div className='mr-[30px]'>
                <img src={props.Image} alt={`property-${props.propertyNumber}`} className='h-full w-full'/>
            </div>
            <div className='flex flex-col items-start justify-start'>
                <div className='text-[34px] left-[120px] text-[#009688] font-bold'>{`0${props.propertyNumber}`}</div>
                <div className='text-[18px] text-[#293745]'>{props.Text}</div>
            </div>
        </div>
    )
}
