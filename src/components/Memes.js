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
}
export default Memes