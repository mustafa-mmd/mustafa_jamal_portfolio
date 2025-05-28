import React from 'react'
import "./Services.css"
import ServiceCard from './ServiceCard'
function Services() {
  return (
    <>
      <h1>Services</h1>
   <div className='servicecont'>
<ServiceCard heading="Front-end Development:" para="Focus on client-side development, creating interactive and responsive user interfaces."/>

<ServiceCard heading="React Development:" para="Specialize in building reusable UI components and managing state changes with React."/>

<ServiceCard heading="Tailwind CSS Integration:" para="Implement Tailwind CSS to build custom and efficient UI components,consistency and design flexibility."/>

<ServiceCard heading="Single Page Applications (SPAs):" para="Develop SPAs using React to provide a seamless and fast user experience."/>

<ServiceCard heading="Performance optimization:" para="Optimize website performance, ensuring fast loading times and a smooth user experience."/>

<ServiceCard heading="Responsive Design:" para="Ensure websites and applications look great on all devices by implementing responsive design principles."/>

<ServiceCard heading="RESTful API Development:" para="Custom backend APIs for web and mobile apps.
CRUD operations, data handling, validation."/>

<ServiceCard heading="User Authentication & Authorization:" para="Secure login/signup system using JWT or sessions.
Password encryption and role-based access control."/>

<ServiceCard heading="Real-time Applications:" para="Real-time chat or notification systems using Socket.io."/>

<ServiceCard heading="File Upload & Management:" para="Handling image, document uploads with Multer.
Integration with cloud storage (AWS S3, Cloudinary)."/>

<ServiceCard heading="Email Notification & Alerts:" para="Automated email sending for password reset, order confirmation."/>

<ServiceCard heading="Payment Gateway Integration:" para="Secure payment processing with Stripe, PayPal.
Order management and transaction handling."/>
</div>
    </>
  )
}

export default Services