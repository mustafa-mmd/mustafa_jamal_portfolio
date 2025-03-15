import React from 'react'
import "./Home.css";
import img from "../assets/mus.jpeg"
import Button from './Button'
import Socialicon from './Socialicon';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const textElement = document.querySelector(".animated-text");
    const text = "I'm a frontend developer ";
    let index = 0;

    const interval = setInterval(() => {
      textElement.textContent += text[index];
      index += 1;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);
  return (
    <>
    
    <div className='herosection'>
    <div className='intro'>
    <h1>Hello </h1>
    <h2 className="animated-text"></h2>
    
<h4>Creatig Modern and Responsive Web Application</h4>
<h4>Transforming Ideas Into Interactive Masterpieces</h4> 
<Button/>
         
     
<Socialicon/>
    </div>
    <img src={img} className='profile' alt='img'></img>
    
    </div>
    
    
    
    </>
  )
}

export default Home;
