import { useState } from 'react'
import './App.css'
import Nav from './Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-[#6366F1] overflow-hidden'>
       <Nav/>
       <main className='mx-6 h-full w-11/12 flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-semibold text-[white] md:w-7/12 md:text-center'>Manage Any Content Anywhere</h1>
          <p className='text-[white] mt-5 md:w-7/12 md:text-center'>Strapi si the leading open-source headless CMS. It's 100% JavaScript and full customizable.</p>
       </main>
    </div>
  )
}

export default App
