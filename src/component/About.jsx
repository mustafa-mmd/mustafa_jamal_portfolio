import img from "../assets/passwordgen.jpg"
import "./About.css"
function About() {
  return (
    <>
    <div className='about'>
      <div className='aboutleft'>
    <h2 className="headingabout">About Me</h2>
    <p>My name is Mustafa Jamal, a passionate and goal-driven student of Bachelor of Computer Science (BSCS), currently enrolled from 2022 to 2026. I specialize in full-stack web development and have cultivated strong technical skills through hands-on experience and continuous learning. As a FrontEnd Developer, I work with a wide range of modern web technologies including HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React.js, Redux Toolkit. I follow best practices in version control using Git and GitHub. I deploy and manage web applications using platforms like Vercel and Netlify, ensuring fast, secure, and scalable delivery of projects. My focus is on building clean, responsive, and interactive web solutions that provide real value to users. Driven by a love for technology and innovation, I aim to continue growing as a developer, contribute to real-world projects, and deliver exceptional results for clients and teams.</p>
{/* <p>This is my portfolio website.
      Here you will learn about my journey. */}
      {/* I'm a frontend web developerWith passion 
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
         */}
         
         </div>
         <div className='aboutright'>
          
          <img src={img} alt='img'></img>
         </div>
         </div>
    </>
  )
}

export default About