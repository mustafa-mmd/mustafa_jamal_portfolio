import React, { useState, useEffect } from 'react';
import "./Services.css";
import ServiceCard from './ServiceCard';

function Services() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services = [
    { heading: "Front-end Development:", para: "Focus on client-side development, creating interactive and responsive user interfaces." },
    { heading: "React Development:", para: "Specialize in building reusable UI components and managing state changes with React." },
    { heading: "Tailwind CSS Integration:", para: "Implement Tailwind CSS to build custom and efficient UI components, consistency and design flexibility." },
    { heading: "Single Page Applications (SPAs):", para: "Develop SPAs using React to provide a seamless and fast user experience." },
    { heading: "Performance optimization:", para: "Optimize website performance, ensuring fast loading times and a smooth user experience." },
    { heading: "Responsive Design:", para: "Ensure websites and applications look great on all devices by implementing responsive design principles." },
    { heading: "RESTful API Development:", para: "Custom backend APIs for web and mobile apps. CRUD operations, data handling, validation." },
    { heading: "User Authentication & Authorization:", para: "Secure login/signup system using JWT or sessions. Password encryption and role-based access control." },
    { heading: "Real-time Applications:", para: "Real-time chat or notification systems using Socket.io." },
    { heading: "File Upload & Management:", para: "Handling image, document uploads with Multer. Integration with cloud storage (AWS S3, Cloudinary)." },
    { heading: "Email Notification & Alerts:", para: "Automated email sending for password reset, order confirmation." },
    { heading: "Payment Gateway Integration:", para: "Secure payment processing with Stripe, PayPal. Order management and transaction handling." },
  ];

  const visibleServices = isMobile
    ? (showAll ? services : services.slice(0, 4))
    : services;

  return (
    <>
      <h1>Services</h1>
      <div className='servicecont'>
        {visibleServices.map((service, index) => (
          <ServiceCard key={index} heading={service.heading} para={service.para} />
        ))}
      </div>

      {/* Show toggle button only on small screens */}
      {isMobile && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={() => setShowAll(!showAll)} className="show-btn">
            {showAll ? "Show Less Services" : "Show More Services"}
          </button>
        </div>
      )}
    </>
  );
}

export default Services;
