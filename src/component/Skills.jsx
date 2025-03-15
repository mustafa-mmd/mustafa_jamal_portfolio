import React from 'react';
import "./Skills.css";
import img1 from "../assets/html.png"
import img2 from "../assets/css.png"
import img3 from "../assets/tailwind.svg"
import img4 from "../assets/js.png"
import img5 from "../assets/typescript.png"
import img6 from "../assets/react.png"
import img7 from "../assets/redux.png"
import img8 from "../assets/github.png"

function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <div className='skillwraper'>
<div className='skillbox'><img className='pic' src={img1}/>

</div>
<div className='skillbox'><img className='pic' src={img2}/></div>
<div className='skillbox'><h5>Tailwind css</h5><img className='pic' src={img3}/></div>
<div className='skillbox'><h5>Javascript</h5><img className='pic' src={img4}/></div>
<div className='skillbox'><h5>Typescript</h5><img className='pic' src={img5}/></div>
<div className='skillbox'><h5>React</h5><img className='pic' id='bg' src={img6}/>
</div>
<div className='skillbox'><h5>Redux</h5><img className='pic' src={img7}/>
</div>
<div className='skillbox'><h5>Github</h5><img className='pic' id='bg' src={img8}/>
</div>

      </div>
    </>
  )
}

export default Skills