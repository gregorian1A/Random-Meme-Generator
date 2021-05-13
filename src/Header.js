import React, { useState, useEffect } from "react";
import "./style.css";

const Header = () => {

  return (
    <div>
      <nav>
        <img
          className="header-img"
          src="https://st.depositphotos.com/1864495/4874/i/950/depositphotos_48742747-stock-photo-trollface-internet-troll-3d-illustration.jpg"
          alt="troll face"
        />
        <h1>Random Meme Generator</h1>
      </nav>
    </div>
  );
}

export default Header;