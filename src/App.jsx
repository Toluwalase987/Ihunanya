import React from 'react'
import Homepage from './components/Homepage'
import MainHomepage from './components/MainHomepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainHomepage/>}/>
          <Route path='/thankful' element={<Homepage/>}/>
        </Routes>
      </Router>
    </div>
  )
}
