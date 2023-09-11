import React, { createContext, useContext, useState } from 'react'
import { sublinks } from './data1'

export const AppContext =createContext()

function Context({children}) {
    const [text,setText] = useState(false)
    const [isMouseOver,setMouseOver]=useState(false)
    const [linkToDisplay,setLinkToDisplay] = useState([sublinks[0]])
    const toggle =()=>{
        setText(!text)
    }
  return (
    <>
      <AppContext.Provider value={{text,toggle,isMouseOver,setMouseOver,setLinkToDisplay,linkToDisplay}}>
           {children}
      </AppContext.Provider>
    </>
  )
}

export const globalUse=()=>{
    return useContext(AppContext)
}

export default Context
