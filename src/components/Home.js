import React from "react";
import "../index.css";
import LoginForm from "./Login";
import SignUpForm from "./Sign";
function Home(){
    return (
        <div>
            <div className="head">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="animate-charcter"> Meme App!</h3>
              </div>
            </div>
          </div>

          <>
          <LoginForm />
          <SignUpForm />
          </>

          <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="https://media.istockphoto.com/id/1357413580/photo/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-forest-trees-background.jpg?s=612x612&w=0&k=20&c=WhMCde6ZKg46Jw9HJMjkkI4wWw3hD8iVs6KFkRsIXPM=" alt="meme"/>
      <p>
        <h2>
          About Us
        </h2>
        <h3>
        The Imgflip image generators are designed to be insanely fast and provide powerful customization, while still being simple and easy to use. Images created on Imgflip can be made "private" if you just want to download the image and save it for yourself, or they can be saved on imgflip.com where you can share them with friends and track their popularity. If you think your images will be appreciated by most imgflip users, you can submit them to be featured. Imgflip users and/or moderators can then vote on your submitted images, and the best ones will make it to the homepage.
        </h3>
      </p>
    </div>




          
        <div className="holder">
            <div className="carousel">
                <div className="image"><span>Memes</span></div>
                <div className="image"><span>Laugh</span></div>
                <div className="image"><span>Hilarious</span></div>
                <div className="image"><span>fun</span></div>
                <div className="image"><span>Smile</span></div>
                <div className="image"><span>Thrill</span></div>
                <div className="image"><span>Follow</span></div>
                <div className="image"><span>Like</span></div>
                <div className="image"><span>Comment</span></div>
            </div>
        </div>
    
        
        
       

        </div>
    )
}

export default Home;