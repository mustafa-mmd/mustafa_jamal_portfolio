import React from 'react'
import "./Card.css"
function Card(props) {
  const openLink=(url)=>{
    window.location.href=props.url;
  }
  return (
    <>
      <div className="card">
        <img src={props.img}></img>
      <p className="cardtitle">{props.title}</p>
      <p className="smalldesc">
        {props.descripition}
        
      </p>
      <button className='cardbutt' onClick={()=>{openLink("url")}}>check demo</button>
      
      
    </div>
    </>
  )
}

export default Card