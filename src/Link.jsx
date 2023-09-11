import React from 'react'

function Link({links,page}) {
  return (
    <article className='mx-8'>
      <h1 className='text-2xl text-[#5d5fee]'>{page}</h1>
      <div className='grid grid-cols-2  mt-1 mb-4'>
        {links.map((item,num)=>{
          const {icon,label} = item
          return(  
            <a href="" className=' text-[#71859b]' key={num}>{icon} <span className='ml-4'>{label}</span></a>
          )
        })}
      </div>
    </article>
  )
}

export default Link
