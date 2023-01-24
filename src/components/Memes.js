import React, {useState} from "react";
import { useEffect } from "react";


function Memes() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    }, []
    )
    const[allMemes, setALlMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setALlMemes(data.data.memes))
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


    
}
export default Memes