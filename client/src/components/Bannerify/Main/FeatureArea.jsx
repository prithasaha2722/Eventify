import React from 'react'
import Button from '../UI/Button'

export default function FeatureArea(props) {

    return (
        <div className='flex items-center' style={{flexDirection : props.orientation ? 'row-reverse': 'row'}}>
            <img src={props.image} alt={props.alt} className='w-[40%] pl-10' style={{'padding': '0px 60px'}}/>
            <div className='w-[60%] flex flex-col items-start justify-center' style={{paddingLeft: '60px'}}>
                <div className='text-4xl text-[#293745] mb-5 font-bold'>{props.header}</div>
                <div className='text-2xl text-[#293745] mb-4 max-w-[90%]'>{props.para}</div>
                <Button style={{'padding': '12px 20px !important'}}/>
            </div>
        </div>
    )
}
