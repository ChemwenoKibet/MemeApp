import React, {useState} from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

export default function HomePage() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    }, []
    )
    const[allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])
        

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url

        //to save the random url in state
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))


    }

    function handleChange(event){
        const{name,value} = event.target
       setMeme(prevMeme => {
        return{...prevMeme,
        [name]: value
        }
        
       })

    }

    return(   
        <main>
        <div className="form">
                    <button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    onClick={getMemeImage}
                    type="button">
                    Get a new meme 🖼
                    </button>
                    <br></br>
        </div>
        <div className="meme-container">  
                <div className="meme">
                    <pre>{JSON.stringify(setAllMemes,null,2)}</pre>
                    <img src={meme.randomImage} alt="meme-random" className="meme--image"/>
                    <h3 className="top--text">{meme.topText}</h3>
                    <h3 className="bottom--text">{meme.bottomText}</h3>
                </div>

                <div className="meme-details">
                    {/* <p> Meme name </p>
                    <p> Width </p>
                    <p> Height </p> */}
                </div>
        </div>
       
        </main>
    )
}

