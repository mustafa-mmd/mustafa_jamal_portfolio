import img from "../assets/passwordgen.jpg"
import "./About.css"
function About() {
  return (
    <>
    <div className='about'>
      <div className='aboutleft'>
    <h2 className="headingabout">About Me</h2>
<p>This is my portfolio website.
      Here you will learn about my journey.
      I'm a frontend web developerWith passion 
      for building beautiful and responsive,user
       friendly interfaces My goal is to create
      digital experiences that delight and inspire users.
         When I,m not coding you can find me exploring 
         new design trends, learning about emerging technologies or 
         contributing to open source projects. And I have successfully complete multiple and different projects and also start works on other projects .And i'm 
         passionate to become a fullstack developer .
         And I am student  of  computer science.
          My degree starting and completing date: 2022 To 2026.
         
         </p>
         </div>
         <div className='aboutright'>
          
          <img src={img} alt='img'></img>
         </div>
         </div>
    </>
  )
}

export default About