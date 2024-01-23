import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('darksalmon')
//  function changecolor(color){
//   setColor(color)
//  }
  return (
   <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center  max-w-2xl shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={() => setColor('navy')}   className='outline-none px-6 py-1 rounded-md shadow-lg text-black font-bold p-2 m-2' style={{backgroundColor:"navy"}}>navy</button>
      <button onClick={() => setColor("firebrick")}  className='outline-none px-4 py-1 rounded-md shadow-lg text-black font-bold p-2 m-2' style={{backgroundColor:"firebrick"}}>Firebrick</button>
    </div>
    </div>
   </div>
  )
}

export default App
