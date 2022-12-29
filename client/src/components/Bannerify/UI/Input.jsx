import React from 'react';

const Input =React.forwardRef( (props,ref) =>  {
    return (
        <div className='flex flex-col mb-5'>
            <label htmlFor={props.label.for} className='text-[1.3rem]'>{props.labelName}</label>
            <input type={props.input.type} className='mt-2 text-[1.1rem] rounded-md p-2' id={props.input.id} placeholder={props.input.placeholder} ref={ref}/>
        </div>
    )
})

export default Input