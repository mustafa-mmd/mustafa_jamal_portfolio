import React, { useState } from 'react'
import "./Contacts.css"
import SocialIcon from './SocialIcon'
import emailjs from 'emailjs-com';

function Contacts() {


//second method web3forms
const [result, setResult] = React.useState("");

const onsubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "419531b8-90d4-4a48-ab8c-d0fafa9d607a");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
  } else {
    console.log("Error", data);
    setResult(data.message);
  }
}


//second methoe web3forms
  return (
    
    <>
    <div className='form'>
    
    <h1>Send Message</h1>
    
<div className="form-container">
      <form className="form" onSubmit={onsubmit} >
        <div className="form-group">
        <label>FullName</label>
        <input  type="text"  id="fullname" name="fullname" required  ></input>
          <label> Enter CityName</label>
          <input  type="text"  id="city" name="city" required ></input>
        </div>
        <div className="form-group">
          <label >How Can We Help You?</label>
          <textarea   name="textarea" id="textarea" rows="10" cols="50" required >          </textarea>
        </div>
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
      <span>{result}</span>
    </div>
    
    </div>
  
    
     
    <div className="fotersocialicon" style={{marginBottom:"10px"}}><SocialIcon /></div>
    
    
    <ul className="fullfoter">
    
      <li> frontend development</li>
<li>web development</li>
<li>responsive web design</li>
<li>react development</li>
<li>single page application</li>
    </ul>
    
   
    </>
  )

  
}
export default Contacts