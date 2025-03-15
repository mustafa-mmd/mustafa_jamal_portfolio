import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import "./Social.css"
function SocialIcon() {
  const openLink = (url) => {
    // window.open(url,'_blank' );
    window.location.href = url;

  };
 
  const mailHandle=()=>{
    const emailWindow = window.open('', '_blank');
    emailWindow.document.write('<html><head><title>Email Address</title></head><body><p>mustafajamalshabqadar@gmail.com</p></body></html>');
    emailWindow.document.close();
  }
  return (
    <div className='container'>
    <div className='socialicon'>
      <button onClick={() => openLink('https://www.facebook.com/profile.php?id=100070852429456&mibextid=ZbWKwL')}>
        <FacebookIcon className='icon' style={{ fontSize: 35 }}/>
      </button>
      <button onClick={() => openLink('https://www.instagram.com/mustafajamal897?igsh=cmkyZTJhZHozNzVz')}>
        <InstagramIcon className='icon' style={{ fontSize: 35 }}/>
      </button>
      <button onClick={() => openLink('https://wa.me/923479749239')}>
        <WhatsAppIcon className='icon' style={{ fontSize: 35 }}/>
      </button>
      <button onClick={() => openLink('https://www.linkedin.com/in/mustafa-jamal-60080228b')}>
        <LinkedInIcon className='icon' style={{ fontSize: 35 }}/>
</button>
        <button onClick={mailHandle}>
        <MailIcon className='icon' style={{ fontSize: 35 }}/>
        
      </button>
      
      <button onClick={() => openLink('https://github.com/mustafa-mmd')}>
        <GitHubIcon className='icon' style={{ fontSize: 35 }}/>
      </button>
      
    </div>
    
    </div>
  )
}

export default SocialIcon