import React, { useContext, useEffect, useRef } from 'react'
import { AppContext, globalUse } from './Context'
import Mnav from './Mnav'
import NavSub from './NavSub'
import { sublinks } from './data1'


function Nav() {
    const {text,toggle,isMouseOver,setMouseOver,setLinkToDisplay,linkToDisplay} = globalUse()
    const {page,links,id}=linkToDisplay[0]

    const mouseOver= (e)=>{
      setMouseOver(true)
      const pageName = e.target.textContent.slice(0,1).toLowerCase()+e.target.textContent.slice(1)
      console.log(pageName)
      const linkToShow=sublinks.filter((item)=>{
        return item.page==pageName
      })
      setLinkToDisplay(linkToShow)
      console.log(linkToDisplay)
    }
  return (
    <>
      <Mnav/>
      <nav className='flex p-6 justify-between items-center w-full '>
        <h1 className='text-[white] text-3xl font-semibold'>strapi</h1>
        <ul className='md:flex items-center text-[white] text-xl hidden'>
            <li className='hover:cursor-pointer p-5' onMouseOver={(e)=>{mouseOver(e)}} onMouseLeave={()=>{setMouseOver(false)}}>Products</li>
              <li className='hover:cursor-pointer p-5' onMouseOver={(e)=>{mouseOver(e)}} onMouseLeave={()=>{setMouseOver(false)}}>Solutions</li>
            <li className='hover:cursor-pointer p-5' onMouseOver={(e)=>{mouseOver(e)}} onMouseLeave={()=>{setMouseOver(false)}}>Resources</li>
        </ul>
        <button className={`text-[#5d5fee] bg-[white] text-lg px-3 rounded-sm duration-150 bg z-10 md:invisible ${text?'invisible':'visible'}`} onClick={()=>{toggle()}}><i class="fa-solid fa-bars"></i></button>
      </nav>
      {isMouseOver?<NavSub page={page} links={links} key={id}/>:''}

      
    </>
  )
}

export default Nav
