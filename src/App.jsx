import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Landing />}/>
        
      </Routes>
    </>
  )
}

export default App
