import React, {useState} from "react";
import { useEffect } from "react";


function Memes() {
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

    // return(   
    //     <main>
    //     <div className="form">
    //         <input 
    //         type="text"
    //         className="form--inputs" 
    //         placeholder="Top text"
    //         name="topText"
    //         value={meme.topText}
    //         onChange = {handleChange}

    //         />

    //         <button className="form--button"
    //         onClick={getMemeImage}>
    //         Get a new meme  🖼
    //         </button>
    //     </div>

    //     <div className="meme">
    //     <pre>{JSON.stringify(setAllMemes,null,2)}</pre>
    //     <img src={meme.randomImage} alt="meme-random" className="meme--image"/>
    //     <h3 className="top--text">{meme.topText}</h3>
    //     <h3 className="bottom--text">{meme.bottomText}</h3>
    //     </div>
       
    //     </main>
    // )
}
export default Memes