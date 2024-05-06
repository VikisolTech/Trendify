import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./main-test/screens/Home"
import Otp from "./main-test/screens/Otp"
import Register from "./main-test/screens/Register"
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index element={<Home />} />
          <Route path='/otp' element={<Otp />} />
          <Route path='/register' element={<Register />} />

      </Routes>
      </BrowserRouter>
    </>
    
 
  )
}

export default App