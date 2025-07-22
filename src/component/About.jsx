import img from "../assets/passwordgen.jpg"
import "./About.css"
function About() {
  return (
    <>
    <div className='about'>
      <div className='aboutleft'>
    <h2 className="headingabout">About Me</h2>
    <p>Hello My name is Mustafa Jamal, a passionate and goal-driven student of Bachelor of Computer Science (BSCS), currently enrolled from 2022 to 2026. I specialize in full stack web development (MERN Stack) and have cultivated strong technical skills through hands-on experience and continuous learning. As a web  Developer, I work with a wide range of modern web technologies including HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, React.js, Redux Toolkit , Node js, Express js and MongoDB. I follow best practices in version control using Git and GitHub. I deploy and manage web applications using platforms like Vercel and Netlify, ensuring fast, secure, and scalable delivery of projects. My focus is on building clean, responsive, and interactive web solutions that provide real value to users. Driven by a love for technology and innovation, I aim to continue growing as a developer, contribute to real-world projects, and deliver exceptional results for clients and teams.</p>

         
         </div>
         <div className='aboutright'>
          
          <img src={img} alt='img'></img>
         </div>
         </div>
    </>
  )
}

export default About