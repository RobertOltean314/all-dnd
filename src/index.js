import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);


//Round inverted cursor homepage__body!!!
document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (e.clientX+window.scrollX)
      + 'px'
     );
    document.documentElement.style.setProperty (
      '--y', ( e.clientY+window.scrollY ) 
      + 'px'
    );
  }

  //Play audio on click:
const mouseclick = new Audio();
  mouseclick.src = "https://www.fesliyanstudios.com/play-mp3/387";