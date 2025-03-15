import React from 'react'
import "./ServiceCard.css";
function ServiceCard(props) {
  return (
    <>
<div className="serviceCard">
  <div className="tools">
    <div className="circle">
      <span className="red box"></span>
    </div>
    <div className="circle">
      <span className="yellow box"></span>
    </div>
    <div className="circle">
      <span className="green box"></span>
    </div>
  </div>
  <div className="card__content">
<h3>{props.heading}</h3>
<p>{props.para}</p>
  </div>
</div>
</>

  )
}

export default ServiceCard