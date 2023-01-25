import React, {useState} from "react";
import { useEffect } from "react";


function Memes() {
    const [meme, setMeme] = useState({ 
        
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    }, []
    )
    const[allMemes, setAllMemes] = useState([])
    const [selectedMemeId, setSelectedMemeId] = useState(null);
    // const [selectedMemeName, setSelectedMemeName] = useState(null);


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])


    function getMemeImage(){ //function that triggered by the button click
        const randomNumber = Math.floor(Math.random() * allMemes.length) //generating new number between 0 and length of array
        const url = allMemes[randomNumber].url;
        const id = allMemes[randomNumber].id;

        //to save the random url in state
        setMeme(prevMeme => ({ //function to update random image property with url of randomly selected meme
            ...prevMeme,
            randomImage : url
        }))

        // console.log(randomNumber); //randomnumber of the meme
         console.log(allMemes) //array of the memes
        setSelectedMemeId(id);
        
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
            <input 
            type="text"
            className="form--inputs" 
            placeholder="Top text"
            name="topText"
            value={meme.topText}
            onChange = {handleChange}

            />

            <button className="form--button"
            onClick={getMemeImage}>
            Get a new meme  🖼
            </button>
        </div>
        <div className="labelid">
        <label>MemeId:  {selectedMemeId}</label>
        {/* <label>{selectedMemeName}</label> */}
        </div>

        <div className="meme">
        <pre>{JSON.stringify(setAllMemes,null,2)}</pre>
        <img src={meme.randomImage} alt="meme-random" className="meme--image"/>
        <h3 className="top--text">{meme.topText}</h3>
        <h3 className="bottom--text">{meme.bottomText}</h3>
        </div>
       
        </main>
    )
}
export default Memes