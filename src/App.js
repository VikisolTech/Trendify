import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Components/screens/Home"
import Otp from "./Components/screens/Otp"
import Register from "./Components/screens/Register"
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