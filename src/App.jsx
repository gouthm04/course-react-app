import { useState } from 'react'

import './App.css'
import InsertCourse from './components/InsertCourse'
import ViewCourse from './components/ViewCourse'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {


  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<InsertCourse/>}/>
           
            <Route path='/view' element={<ViewCourse/>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
