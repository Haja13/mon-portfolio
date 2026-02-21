// import React from 'react'
// import './ServiceStyle.css'

// export const ServicePage = () => {
//   return (
//     <div className='content-service'>
//       <div className='title'>
//         <h1>My <span className='highlight'>Services</span></h1>
//       </div>

//       <div className='content-cards'>
//         <div className='card'>
//           <h3>Frontend Development</h3>
//           <p>
//             I build responsive, user-friendly interfaces with modern frameworks 
//             like React, Angular, and Next.js to deliver seamless user experiences.
//           </p>
//           <button className='btn'>Read More</button>
//         </div>

//         <div className='card'>
//           <h3>Graphic Design</h3>
//           <p>
//             From branding to UI/UX, I create clean and creative visuals that 
//             capture attention and communicate effectively.
//           </p>
//           <button className='btn'>Read More</button>
//         </div>

//         <div className='card'>  
//           <h3>Backend Development</h3>
//           <p>
//             I design scalable and secure backend systems with Node.js, Express, 
//             and NestJS, ensuring performance and reliability.
//           </p>
//           <button className='btn'>Read More</button>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react'
import './ServiceStyle.css'

export const ServicePage = () => {
  return (
    <div className='content-service'>
      <div className='title'>
        <h1>My <span className='highlight'>Services</span></h1>
      </div>

      <div className='content-cards'>
        {/* --- CARD FRONTEND --- */}
        <div className='card'>
          <div className="service-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="Frontend" />
          </div>
          <h3>Frontend Development</h3>
          <p>
            I build responsive, user-friendly interfaces with modern frameworks 
            like React, Angular, and Next.js to deliver seamless user experiences.
          </p>
          <button className='btn-view'>Read More</button>
        </div>

        {/* --- CARD DESIGN --- */}
        <div className='card'>
          <div className="service-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Design" />
          </div>
          <h3>Graphic Design</h3>
          <p>
            From branding to UI/UX, I create clean and creative visuals that 
            capture attention and communicate effectively.
          </p>
          <button className='btn-view'>Read More</button>
        </div>

        {/* --- CARD BACKEND --- */}
        <div className='card'>  
          <div className="service-icon">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Backend" />
          </div>
          <h3>Backend Development</h3>
          <p>
            I design scalable and secure backend systems with Node.js, Express, 
            and NestJS, ensuring performance and reliability.
          </p>
          <button className='btn-view'>Read More</button>
        </div>
      </div>
    </div>
  )
}