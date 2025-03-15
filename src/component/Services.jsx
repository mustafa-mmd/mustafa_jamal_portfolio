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
<ServiceCard heading="Tailwind CSS Integration:" para="Implement Tailwind CSS to build custom and efficient UI components, ensuring consistency and design flexibility."/>
<ServiceCard heading="Single Page Applications (SPAs):" para="Develop SPAs using React to provide a seamless and fast user experience."/>
<ServiceCard heading="Performance optimization:" para="Optimize website performance, ensuring fast loading times and a smooth user experience."/>
<ServiceCard heading="Responsive Design:" para="Ensure websites and applications look great on all devices by implementing responsive design principles."/>
</div>
    </>
  )
}

export default Services