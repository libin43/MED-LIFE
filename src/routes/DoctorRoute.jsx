import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';


export const DoctorRoute = () => {
  return (
    <Routes>
        <Route path='/doctor' element={<Home/>}/>
    </Routes>
  )
}
