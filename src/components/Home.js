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