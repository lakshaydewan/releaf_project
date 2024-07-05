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
import { Assignmentfilepage } from './pages/main pages/assigmentbutpage';
import { Practicalfilepage } from './pages/main pages/practicalfile';
import { Egsheets } from './pages/main pages/egsheets';
import { Studylyout } from './pages/main pages/studylayout';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/assigment" element={<Assigenmentpage/>} />
        <Route path="/assigment/practicalfile" element={<Assignmentfilepage/>} />
        <Route path="/assigment/assigment" element={<Practicalfilepage/>} />
        <Route path="/assigment/egsheets" element={<Egsheets/>} />
        <Route path="/studylayout" element={<Studylyout/>} /> 

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
