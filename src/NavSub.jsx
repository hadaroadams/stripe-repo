import React from 'react'
import { globalUse } from './Context'

function NavSub({links,page}) {
    const {setMouseOver,isMouseOver}=globalUse()
  return (
    <article onMouseOver={()=>{setMouseOver(true)}} onMouseLeave={()=>{setMouseOver(false)}} className={`absolute duration-200 bg-white  ${isMouseOver?"h-fit":'h-0'}  mx-auto p-6 left-0 right-0  w-8/12 rounded-md overflow-hidden top-24`}>
      <h1 className='text-2xl text-[#5d5fee] mb-3'>{page.slice(0,1).toUpperCase()+page.slice(1)}</h1>
      <div className=' grid grid-cols-2'>
        {links.map((item , num)=>{
             const {icon,label} = item
             return(  
                <a href="" className=' text-[#71859b]' key={num}>{icon} <span className='ml-4'>{label}</span></a>
          )
        })}
      </div>
    </article>
  )
}

export default NavSub
