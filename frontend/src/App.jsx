import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Home } from './pages/main pages/home'
import { Assigenmentpage } from './pages/main pages/assigment';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/assigment" element={<Assigenmentpage/>} /> 

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
