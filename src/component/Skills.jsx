import React from 'react';
import "./Skills.css";
import img1 from "../assets/html.jpg"
import img2 from "../assets/css.jpg"
import img3 from "../assets/tailwind.svg"
import img4 from "../assets/js.jpg"
import img5 from "../assets/typescript.jpg"
import img6 from "../assets/react.jpg"
import img7 from "../assets/redux.jpg"
import img8 from "../assets/nodejs.jpg"
import img9 from "../assets/express.jpg"
import img10 from "../assets/mongodb.jpg"
import img11 from "../assets/github.jpg"
import img12 from "../assets/vercel.jpg"
import img13 from "../assets/netlify.jpg"
import img14 from "../assets/bootstrap.jpg"
function Skills() {
  return (
    <>
      <h1 className='skills'>Skills</h1>
      <div className='skillwraper'>
<div className='skillbox'><img className='pic' src={img1}/>
</div>
<div className='skillbox'><img className='pic' src={img2}/></div>

<div className='skillbox'><h5>Tailwind css</h5><img className='pic' src={img3}/></div>

<div className='skillbox'><h5>Bootstrap</h5><img className='pic' src={img14}/></div>

<div className='skillbox'><h5>Javascript</h5><img className='pic' src={img4}/></div>
<div className='skillbox'><h5>Typescript</h5><img className='pic' src={img5}/></div>
<div className='skillbox'><h5>React</h5><img className='pic' id='bg' src={img6}/>
</div>
<div className='skillbox'><h5>Redux</h5><img className='pic' src={img7}/>
</div>
<div className='skillbox'><h5>Node js</h5><img className='pic' id='bg' src={img8}/>
</div>

<div className='skillbox'><h5>Express js</h5><img className='pic' id='bg' src={img9}/>
</div>

<div className='skillbox'><h5>MongoDb</h5><img className='pic' id='bg' src={img10}/>
</div>

<div className='skillbox'><h5>Github</h5><img className='pic' id='bg' src={img11}/>
</div>

<div className='skillbox'><h5>Vercel</h5><img className='pic' id='bg' src={img12}/>
</div>

<div className='skillbox'><h5>Netlify</h5><img className='pic' id='bg' src={img13}/>
</div>
      </div>
    </>
  )
}

export default Skills