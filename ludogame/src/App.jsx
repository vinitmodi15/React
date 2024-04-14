import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ludoboard from './Ludoboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Ludoboard/>
    </>
  )
}

export default App
