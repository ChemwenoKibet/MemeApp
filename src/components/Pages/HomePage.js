import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        
        <div className="text-left">
            <h1 className="main-title home-page-title">Happy Meme</h1>
            <nav>
            <ul>
                <li><a href="default">Home</a></li>
                <li><a href="news">News</a></li>
                <li><a href="contact">Contact</a></li>
                <li><a href="about">About</a></li>
           </ul>
            </nav>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
