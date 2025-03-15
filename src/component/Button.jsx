import React from 'react'
import "./Button.css"
import cv from '../assets/cv.pdf'
function Button() {
  function downloadcv(){
    
  }
  return (
    <div>
      <a href={cv} download="cv.pdf">
 <button className="butt" onClick={downloadcv}>Download CV</button>
 </a>
    </div>
  )
}

export default Button