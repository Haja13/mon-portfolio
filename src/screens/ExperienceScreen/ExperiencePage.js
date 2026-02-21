// import React from 'react';
// import './styleAbout.css';
// import profileImage from '../../assets/test.png'; // <-- mets ton image ici


// export const ExperiencePage = () => {
//   return (
//     <div className="about-page">
      
//       <div className="about-image">
//         <img src={profileImage} alt="Profile" />
//       </div>

//       <div className="about-content">
//         <p className="intro">Introduction</p>
//         <h2>About me</h2>

//         <div>
//           <p className="paragraphe-about">
//             I am an experienced Frontend Developer with over a decade of professional expertise in the
//             field. Throughout my career, I have had the privilege of collaborating with prestigious
//             organizations, contributing to their success and growth.
//           </p>
//         </div>

//         <div className="content-cards">
//           {/* Section Langages */}
//           <div className="cards">
//     <p className="card-title">Langues</p>
//     <div className="skills-list">
//       <div className="skill-item">
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
//         <span>HTML</span>
//       </div>
//       <div className="skill-item">
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
//         <span>CSS</span>
//       </div>
//       <div className="skill-item">
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
//         <span>Javascript</span>
//       </div>
//       <div className="skill-item">
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TS" />
//         <span>Typescript</span>
//       </div>
//       <div className="skill-item">
//         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
//         <span>PHP</span>
//       </div>
//       </div>
//       </div>
//           <div className="cards">
//             <p>Skill</p>
//             <div className="skills-list">
//               <div className="skill-item"> 
//               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />                  <span>Angular</span>          
//               </div>
//               <div className="skill-item">
//                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
//                 <span>React</span>
//               </div>
//               <div className="skill-item">
//                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" />
//                 <span>React Native</span>
//               </div>
//               <div className="skill-item">
//                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
//                 <span>Node / Express</span>
//               </div>
//               <div className="skill-item">
//                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" alt="NestJS" />
//                 <span>NestJS</span>
//               </div>
//                      </div>
//           </div>

         

// <div className="cards projects-card">
//   <p className="card-title">Projets Récents</p>

//   <div className="project-item">
//     <div className="project-header">
//       <span className="project-name">Plateforme de Gestion de Stock</span>
//       <span className="project-tech">Angular • NestJS • GraphQL</span>
//     </div>
//     <ul className="project-details">
//       <li>Conception de l'architecture et création des entités/relations.</li>
//       <li>Envoi et récupération des données via le backend.</li>
//     </ul>
//   </div>

//   <div className="project-item">
//     <div className="project-header">
//       <span className="project-name">RankyShop (Mobile)</span>
//       <span className="project-tech">React Native</span>
//     </div>
//     <ul className="project-details">
//       <li>Fonctionnalité de scan QR Code pour les produits.</li>
//       <li>Mode jour/nuit et publication sur le Play Store.</li>
//     </ul>
//   </div>

//   <div className="project-item">
//     <div className="project-header">
//       <span className="project-name">E-fidy (Site d'élection)</span>
//       <span className="project-tech">PHP • Web Service</span>
//     </div>
//     <ul className="project-details">
//       <li>Formulaires d'élection, login et sécurisation des données.</li>
//     </ul>
//   </div>

//   <div className="project-item">
//     <div className="project-header">
//       <span className="project-name">E-commerce</span>
//       <span className="project-tech">CodeIgniter</span>
//     </div>
//     <ul className="project-details">
//       <li>Développement complet d'une boutique en ligne.</li>
//     </ul>
//   </div>
// </div>
// <div className="cards">
//   <p className="card-title">Outils & Databases</p>
//   <div className="skills-list">
//     {/* Bases de données */}
//     <div className="skill-item">
//       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
//       <span>MySQL</span>
//     </div>
//     <div className="skill-item">
//       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres" />
//       <span>PostgreSQL</span>
//     </div>

//     <div className="skill-item">
//       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
//       <span>GitHub</span>
//     </div>
//     <div className="skill-item">
//       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" />
//       <span>GraphQL</span>
//     </div>
    
//     {/* Design & API */}
//     <div className="skill-item">
//       <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
//       <span>Figma</span>
//     </div>
//     <div className="skill-item">
//       <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" />
//       <span>Postman</span>
//     </div>
//     <div className="skill-item">
//       <img src="https://www.vectorlogo.zone/logos/google_chrome/google_chrome-icon.svg" alt="Canary" />
//       <span>Canary</span>
//     </div>
//   </div>
// </div>
// <div className="cards education-card">
//   <p className="card-title">Education</p>
  
//   <div className="education-item">
//     <div className="edu-header">
//       <span className="edu-date">Janvier 2024 - Présent</span>
//       <span className="edu-school">ISPM</span>
//     </div>
//     <p className="edu-degree">Master 2 en Informatique</p>
//     <p className="edu-option">Option Électronique, Système Informatique et Intelligence Artificielle</p>
//   </div>

//   <div className="education-item">
//     <div className="edu-header">
//       <span className="edu-date">Mars 2021 - Déc. 2022</span>
//       <span className="edu-school">ISPM</span>
//     </div>
//     <p className="edu-degree">Licence en Informatique</p>
//     <p className="edu-option">Option Électronique, Système Informatique et Intelligence Artificielle</p>
//   </div>

//   <div className="education-item">
//     <div className="edu-header">
//       <span className="edu-date">2018 - 2019</span>
//       <span className="edu-school">Lycée Technique Alarobia</span>
//     </div>
//     <p className="edu-degree">Baccalauréat Série Technique</p>
//     <p className="edu-option">Filière Électronique Numérique</p>
//   </div>
// </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import './styleAbout.css';

export const ExperiencePage = () => {
  const [showEdu, setShowEdu] = useState(false);
  const [showProj, setShowProj] = useState(false);

  // URL d'une animation Lottie typée "Développement/Cloud" (style Netlify/Web)
  const animationUrl = "https://lottie.host/79064971-55b5-4841-94d0-4389600e1638/vXzWwL67lG.json";

  return (
    <div className="about-page">
  <div className="about-image lottie-container">
        <Lottie 
          path={animationUrl} 
          loop={true} 
          autoplay={true}
          style={{ width: '100%', maxHeight: '450px' }}
        />
      </div>

      <div className="about-content">
        <p className="intro">Introduction</p>
        <h2>About me</h2>

        <div className="paragraphe-container">
          <p className="paragraphe-about">
            I am an experienced Frontend Developer with professional expertise in the field. 
            Throughout my career, I have had the privilege of collaborating with prestigious 
            organizations, contributing to their success and growth.
          </p>
        </div>

        <div className="content-cards">
          {/* SECTION LANGAGES */}
          <div className="cards">
            <p className="card-title">Langues</p>
            <div className="skills-list">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                <span>HTML</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                <span>CSS</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" />
                <span>Javascript</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TS" />
                <span>Typescript</span>
              </div>
            </div>
          </div>

          {/* SECTION SKILLS */}
          <div className="cards">
            <p className="card-title">Skills</p>
            <div className="skills-list">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="Angular" />
                <span>Angular</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                <span>React</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" />
                <span>NodeJS</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" alt="NestJS" />
                <span>NestJS</span>
              </div>
            </div>
          </div>

          {/* SECTION PROJECTS - EXTENSIBLE */}
          <div className="cards projects-card">
            <p className="card-title">Projets Récents</p>
            <p className="card-subtitle">Web & Mobile</p>
            {showProj && (
              <div className="expanded-content">
                <div className="project-item">
                  <span className="project-name">Gestion de Stock</span>
                  <p className="project-tech">Angular • NestJS • GraphQL</p>
                </div>
                <div className="project-item">
                  <span className="project-name">RankyShop</span>
                  <p className="project-tech">React Native</p>
                </div>
              </div>
            )}
            <button className="view-more-btn" onClick={() => setShowProj(!showProj)}>
              {showProj ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>

          {/* SECTION OUTILS */}
          <div className="cards">
            <p className="card-title">Outils & DB</p>
            <div className="skills-list">
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
                <span>MySQL</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                <span>Figma</span>
              </div>
              <div className="skill-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <span>GitHub</span>
              </div>
            </div>
          </div>

          {/* SECTION EDUCATION - EXTENSIBLE */}
          <div className="cards education-card">
            <p className="card-title">Education</p>
            <p className="card-subtitle">Master & Licence</p>
            {showEdu && (
              <div className="expanded-content">
                <div className="education-item">
                  <p className="edu-degree">Master 2 Informatique</p>
                  <p className="edu-info">ISPM • 2024</p>
                </div>
                <div className="education-item">
                  <p className="edu-degree">Licence Informatique</p>
                  <p className="edu-info">ISPM • 2022</p>
                </div>
              </div>
            )}
            <button className="view-more-btn" onClick={() => setShowEdu(!showEdu)}>
              {showEdu ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}