import React, { useState, useEffect } from "react";
import "./style.css";

const MemeGenerator = () => {
  const [text, setText] = useState({ topText: "", midText: "", bottomText: "" });
  const [randomImage, setRandomImage] = useState("http://i.imgflip.com/1bij.jpg");
  const [allMemeImgs, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        setAllMemeImages(memes)
      })

  })

  const clearText = (e) => {
    e.preventDefault();
    setText({ topText: "", midText: "", bottomText: "" });
  }

  const shuffleImage = (e) => {
    e.preventDefault();
    const len = allMemeImgs.length;
    const randomIndex = Math.floor(Math.random() * len);
    const randomMeme = allMemeImgs[randomIndex].url;
    setRandomImage(randomMeme);
  }
  return (
    <div className="meme-form">
        <div className="meme">
        <img src={randomImage} />
        <h3 className="top">{text.topText}</h3>
        <h3 className="mid">{text.midText}</h3>
        <h3 className="bottom">{text.bottomText}</h3>
      </div>
      <div className="form">
        <form>
          <input
            type="text"
            onChange={e => setText({ ...text, topText: e.target.value })}
            value={text.topText}
            name="topText"
            placeholder="enter top text here"
          />
          <br />
          <input
            type="text"
            onChange={e => setText({ ...text, midText: e.target.value })}
            value={text.midText}
            name="midText"
            placeholder="enter middle text here"
          />
          <br />

          <input
            type="text"
            onChange={e => setText({ ...text, bottomText: e.target.value })}
            value={text.bottomText}
            name="bottomText"
            placeholder="enter bottom text here"
          />
          <br />
          <button onClick={shuffleImage}>Randon Image</button>
          <br />
          <button onClick={clearText} className="clear">
            Clear text
            </button>
        </form>
      </div>
  
    </div>
  )
}

export default MemeGenerator;