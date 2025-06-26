import React, { useState, useEffect } from 'react';
import "./Projects.css";
import Card from './Card';
import img1 from "../assets/blog1.jpeg";
import img2 from "../assets/ecommerce.jpg";
import img3 from "../assets/luxhaven.jpeg";
import img4 from "../assets/chair2.jpeg";
import img5 from "../assets/sunglass.jpg";
import img6 from "../assets/currency-converter.jpg";
import img7 from "../assets/coffe.jpg";
import img8 from "../assets/weatherapp.jpeg";
import img9 from "../assets/tic-toc-toe.jpeg";
import img10 from "../assets/todo.jpg";
import img11 from "../assets/ecommerceStore.jpeg";
import img12 from "../assets/passwordgen.jpg";
import img13 from "../assets/counter.jpeg";
import img14 from "../assets/calculator.jpg";
import img15 from "../assets/clg.jpg";
import img16 from "../assets/userlist.jpeg";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    { title: "sunglasses store", url: "https://pakshades-8gz5.vercel.app/", img: img5, descripition: "Step into style..." },
    { title: "Smart.uv", url: "https://mustafa-mmd.github.io/Blog-Website-1/", img: img1, descripition: "Time to get your house clean..." },
    { title: "Furni.interior design", url: "https://mustafa-mmd.github.io/ecommerce-websit/", img: img2, descripition: "We help you make modern interior..." },
    { title: "Modern Chairs", url: "https://mustafa-mmd.github.io/Modern-Chair/", img: img4, descripition: "Here you can find Modern chair..." },
    { title: "currency converter", url: "https://mustafa-mmd.github.io/currency-converter/", img: img6, descripition: "Allows users to easily convert..." },
    { title: "Coffe Shope", url: "https://mustafa-mmd.github.io/coffee-Shop/", img: img7, descripition: "The coffee you will fall in love..." },
    { title: "weather Application", url: "https://mustafa-mmd.github.io/weather-application/", img: img8, descripition: "Enter any country name..." },
    { title: "Tic Toc Toe Game", url: "https://mustafa-mmd.github.io/Tic-Toc-Toe/", img: img9, descripition: "A fun two-player game..." },
    { title: "Todo list", url: "https://mustafa-mmd.github.io/todo-list-in-js/", img: img10, descripition: "Add, delete, and manage..." },
    { title: "Ecommerce Store", url: "https://silver-palmier-d293fe.netlify.app/", img: img11, descripition: "Redux Toolkit and API-powered store..." },
    { title: "Password Generator", url: "https://mustafa-mmd.github.io/passwordGenerator/", img: img12, descripition: "Generate strong passwords..." },
    { title: "Counter", url: "https://mustafa-mmd.github.io/counter/", img: img13, descripition: "Simple counter app..." },
    { title: "Calculator", url: "https://mustafa-mmd.github.io/calculator/", img: img14, descripition: "A simple calculator..." },
    { title: "university website", url: "https://react-website-two-ashy.vercel.app/", img: img15, descripition: "A beautiful React university site..." },
    { title: "user list application", url: "https://66eeb11433a5bb45b23d3880--preeminent-cuchufli-05af48.netlify.app/", img: img16, descripition: "Add/delete user data..." }
  ];

  const visibleProjects = isMobile
    ? (showAll ? projects : projects.slice(0, 5))
    : projects; // show all if not mobile

  return (
    <>
      <h1>Projects</h1>
      <div className='procont'>
        {visibleProjects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            url={project.url}
            img={project.img}
            descripition={project.descripition}
          />
        ))}
      </div>

      {/* Show button only on mobile screen */}
      {isMobile && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => setShowAll(!showAll)} className="show-btn">
            {showAll ? "Show Less Projects" : "Show More Projects"}
          </button>
        </div>
      )}
    </>
  );
}

export default Projects;
