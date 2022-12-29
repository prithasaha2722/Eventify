import React from 'react'

export default function Button(props) {
  let BoxShadow;
  if(props.boxShadow){
  BoxShadow = '0 0 17px 3px rgb(184 184 184 / 50%)';
  }else{
    BoxShadow = ''
  }
  return (
    <button className='mb-5 inline-block text-4xl py-[16px] px-[58px] rounded-md bg-[#009688] text-white align-middle transition-all text-center' style={{boxShadow: BoxShadow,...props.style}}>Create Your Banner</button>
  )
}
