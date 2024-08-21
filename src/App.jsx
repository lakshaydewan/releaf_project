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
        <Route path="/aboutus" element={<Aboutsection heading={"ABOUT US"} content={ (
    <div className="container mx-auto px-4 py-8">
      <p className="text-lg mb-4">
        <strong>Welcome to Releaf – Your Ultimate Study Companion!</strong>
      </p>
      <p className="text-lg mb-4">
        At Releaf, we understand the challenges that college life can bring. Balancing coursework, assignments, and extracurriculars can be overwhelming, and we're here to lighten your load. Our platform is designed with college students in mind, providing you with everything you need to excel in your studies and stay ahead.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">What We Offer:</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Comprehensive Study Material:</strong> Dive into our extensive library of video tutorials and PDF notes, carefully curated to cover every topic in your syllabus. Whether you're prepping for exams or brushing up on a tough concept, we've got you covered.</li>
        <li><strong>Assignment and Practical Files:</strong> Need ready-made assignments, practical files, or Excel sheets? Save time and stress by purchasing them directly from our platform. Each file is crafted to meet the high standards expected by your professors.</li>
        <li><strong>Second-Hand Market:</strong> Looking to buy or sell used drafters, sheet-holders, or scientific calculators? Our marketplace connects you with fellow students for convenient, affordable deals.</li>
        <li><strong>University News and Events:</strong> Stay updated with the latest happenings in your college or university. From upcoming fests to important announcements, we bring the news to you in one place.</li>
        <li><strong>Interactive Study Experience:</strong> Our unique feature allows you to study videos and PDFs side by side on the same screen. It's a seamless way to enhance your learning experience and make the most of your study sessions.</li>
        <li><strong>Join Our Team:</strong> Passionate about tech, education, or both? We're always on the lookout for enthusiastic students to join our development team. Help us shape the future of education while gaining valuable experience.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 mb-4">Our Mission:</h2>
      <p className="text-lg mb-4">
        Our mission is to empower students by providing them with the tools and resources they need to succeed academically. We believe that every student deserves access to high-quality study material and a support system that helps them navigate the demands of college life.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Student-Centric:</strong> We’re created by students, for students. We understand your needs and strive to make your academic journey as smooth as possible.</li>
        <li><strong>Quality Assurance:</strong> Every resource on our platform is vetted to ensure it meets the standards of your curriculum.</li>
        <li><strong>Innovation at Heart:</strong> We’re constantly innovating to bring you features that make studying more efficient and effective.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Get In Touch:</h2>
      <p className="text-lg mb-4">
        We’re here to help! Whether you have a question about our services or want to join our team, feel free to reach out. Let’s make your college experience more manageable, more engaging, and more successful.
      </p>
    </div>)}/>} /> 
        <Route path="/contactus" element={<Aboutsection heading={"CONTACT US"} content={ (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4">
        We’re here to help you with any questions or support you need. Reach out to us through any of the following channels:
      </p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
        <ul className="list-disc list-inside">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Instapage
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Discord
            </a>
          </li>
          {/* Add more links here as needed */}
        </ul>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-lg mb-2">
          For general inquiries or support, you can reach us at:
        </p>
        <p className="text-lg mb-2">
          <a href="" className="text-blue-500 hover:underline">
            support@yourwebsite.com
          </a>
        </p>
        <p className="text-lg mb-2">
          You can also contact us through our social media channels for the latest updates and more:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Facebook
            </a>
          </li>
          <li>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Twitter
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </div>
  )}/>} /> 
        <Route path="/refundpolicy" element={<Aboutsection heading={"REFUND POLICY"} content={<div className="container mx-auto px-4 py-8">
      <p className="text-lg mb-4">
        Thank you for visiting Releaf. We are currently in the process of finalizing our refund policy. At this time, we do not have a refund policy in place.
      </p>
      <p className="text-lg mb-4">
        Please note that our refund policy will be updated soon. Once we have added products to our page and finalized the details, we will update this section with the specific terms and conditions regarding refunds.
      </p>
      <p className="text-lg mb-4">
        We appreciate your patience and understanding. If you have any questions or concerns in the meantime, please feel free to contact us at:
      </p>
      <p className="text-lg mb-4">
        <a className="text-blue-500 hover:underline">
          support@yourwebsite.com
        </a>
      </p>
    </div>}/>} /> 
        <Route path='/termsandconditions' element={<Aboutsection heading={"Terms and condition"} content={ <div className="container mx-auto px-4 py-8">
      <p className="text-lg mb-4">
        Welcome to [Your Website Name]. These Terms and Conditions outline the rules and regulations for the use of our website. By accessing or using our site, you agree to comply with and be bound by these terms.
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
      <p className="text-lg mb-4">
        By accessing or using [Your Website Name], you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you should not use our site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">2. Changes to Terms</h2>
      <p className="text-lg mb-4">
        We reserve the right to update or modify these Terms and Conditions at any time without prior notice. It is your responsibility to review these terms periodically for changes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">3. Use of the Website</h2>
      <p className="text-lg mb-4">
        You agree to use [Your Website Name] for lawful purposes only and in a manner that does not infringe upon the rights of, restrict, or inhibit anyone else's use and enjoyment of the site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
      <p className="text-lg mb-4">
        All content on [Your Website Name], including text, images, and videos, is the property of [Your Website Name] or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. User Accounts</h2>
      <p className="text-lg mb-4">
        If you create an account on our site, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
      </p>

      <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
      <p className="text-lg mb-4">
        [Your Website Name] will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our site. We make no guarantees regarding the accuracy or completeness of the content on our site.
      </p>

      <h2 className="text-2xl font-semibold mb-4">7. Links to Other Websites</h2>
      <p className="text-lg mb-4">
        Our site may contain links to third-party websites that are not owned or controlled by [Your Website Name]. We are not responsible for the content or practices of any third-party websites.
      </p>

      <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
      <p className="text-lg mb-4">
        These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State]. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in [Your Country/State].
      </p>

      <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
      <p className="text-lg mb-4">
        If you have any questions about these Terms and Conditions, please contact us at:
      </p>
      <p className="text-lg mb-4">
        <a className="text-blue-500 hover:underline">
          support@yourwebsite.com
        </a>
      </p>
    </div>}/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

// href="mailto:support@yourwebsite.com"

export default App
