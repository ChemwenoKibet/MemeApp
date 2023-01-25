// import './App.css';
// import Memes from './components/Memes';


// function App() {
//   return (
//     <div>
//     <Memes />
    
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import LandingPage from './components/Pages/LandingPage'
import ForgetPasswordPage from './components/Pages/ForgetPassword'
import HomePage from './components/Pages/HomePage'
import SignInPage from './components/Pages/LoginPage'
import SignUpPage from './components/Pages/RegisterPage'



export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <SignInPage/> } />
                    <Route path="/register" element={ <SignUpPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                    <Route path="/home" element={< HomePage/> } />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }>Laugh</p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}