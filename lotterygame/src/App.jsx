import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lottery from './lotterygame'
import TicketNum from './TicketNum'
import Ticket from './Ticket'


function App() {


  return (
    <>
      <Lottery n={4} WinningSum={18}/>
    </>
  )
}

export default App
