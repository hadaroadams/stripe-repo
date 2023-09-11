import React from 'react'
import { globalUse } from './Context'
import Link from './Link'
import { sublinks } from './data1'
function Mnav() {
    const {text,toggle}= globalUse()
    const user = sublinks
  return (
    <div className={`w-full h-screen bg-white duration-300 absolute opacity-0 md:hidden ${text?'opacity-100':``} flex flex-col`}>
        <button className='h-fit w-fit self-end m-3 text-[#5d5fee] text-3xl' onClick={()=>{toggle(!text)}}><i class="fa-solid fa-xmark"></i></button>
        {sublinks.map((item)=>{
          const {page,links,id}=item
          return <Link key={id} page={page} links={links}/>
        })}
    </div>
  )
}

export default Mnav
