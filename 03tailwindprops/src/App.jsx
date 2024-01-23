import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
 let nearray = [1,2,3,4,5,6,7,8,9,10];
  return (
    <>
    <h1 className='bg-red-900 p-3 rounded-md'>vite with tailwind</h1>
    <Card username="Hanny" post='co-founder' myarr={nearray}/>
    <Card username='Het'/>
    <Card />

    </>
  )
}

export default App
