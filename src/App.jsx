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
import { Profilepage } from './pages/main pages/profilepage';
import { Studyresources } from './pages/main pages/studyresourcespage';
import { Mycart } from './pages/main pages/mycart';
import { Aboutsection } from './components/aboutsection';

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
        <Route path="/profilepage" element={<Profilepage/>} />
        <Route path="/studyresources" element={<Studyresources />} />
        <Route path="/Mycart" element={<Mycart />} />
        <Route path="/aboutus" element={<Aboutsection heading={"ABOUT US"} content={<p>this is the content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsum illo libero perferendis dolores natus dicta nostrum deleniti eligendi eum repellat soluta voluptatum, dolorem, dolorum sapiente rem placeat fugiat sequi!</p>}/>} />
        <Route path="/termsandconditions" element={<Aboutsection heading={"TERMS AND CONDITIONS"} content={<p>this is the content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsum illo libero perferendis dolores natus dicta nostrum deleniti eligendi eum repellat soluta voluptatum, dolorem, dolorum sapiente rem placeat fugiat sequi!</p>}/>} /> 
        <Route path="/contactus" element={<Aboutsection heading={"CONTACT US"} content={<p>this is the content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsum illo libero perferendis dolores natus dicta nostrum deleniti eligendi eum repellat soluta voluptatum, dolorem, dolorum sapiente rem placeat fugiat sequi!</p>}/>} /> 
        <Route path="/refundpolicy" element={<Aboutsection heading={"REFUND POLICY"} content={<p>this is the content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsum illo libero perferendis dolores natus dicta nostrum deleniti eligendi eum repellat soluta voluptatum, dolorem, dolorum sapiente rem placeat fugiat sequi!</p>}/>} />  

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
