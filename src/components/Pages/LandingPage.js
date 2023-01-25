import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title-text-center">Login / Register page</h1>
            <p className="main-para-text-center"><marquee>Welcome to laugh with us</marquee></p>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
   // backgroundImage: {imageone},
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}