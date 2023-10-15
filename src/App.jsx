import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DoctorRoute } from './routes/DoctorRoute'



function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/doctor/*' element={<DoctorRoute/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App
