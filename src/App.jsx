import React from 'react'
import './global.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ProjectPG from './PrejectPG'
import Admin from './Admin'

const App = () => {
  return (
    <BrowserRouter>
      <div className="background min-h-screen">
        <header>
          <Navbar className="fixed" />
          <Home/>
        </header>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/Projects' element={<ProjectPG />} />
          <Route path='/Admin' element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App