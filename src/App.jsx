import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Clock from './components/Clock'

function App() {

  return (
    <BrowserRouter>
      <Clock />
    </BrowserRouter>
  )
}

export default App
