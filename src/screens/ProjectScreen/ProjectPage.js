// import React from 'react';
// import './ProjectStyle.css';

// export const ProjectPage = () => {
//   return (
//     <div className='content-project'>
//       <div className='title-project'>
//          <h1>Latest <span className='highlight'>Projects</span></h1>
//       </div>

//       <div className='project-list'>
//         <div className='project-item'>
//           <h3>Plateforme de Gestion de Stocks</h3>
//           <p>Une application web de gestion de stocks, permettant l'ajout, la sortie et la valorisation d'articles. Créée avec React et Node.js pour optimiser les opérations de stock en entreprise.</p>
//           <p><strong>Technologies utilisées :</strong> React, Node.js, Express, MongoDB</p>
//           <a href='https://github.com/username/stock-management' target='_blank' rel='noopener noreferrer'>Voir le code</a>
//         </div>

//         <div className='project-item'>
//           <h3>Portfolio Personnel</h3>
//           <p>Un portfolio interactif et réactif pour présenter mes compétences, expériences et projets récents. Construit en React pour une navigation fluide.</p>
//           <p><strong>Technologies utilisées :</strong> React, CSS, HTML</p>
//           <a href='https://monportfolio.com' target='_blank' rel='noopener noreferrer'>Voir le site</a>
//         </div>

//         <div className='project-item'>
//           <h3>Application de Gestion de Tâches</h3>
//           <p>Une application simple de gestion de tâches, permettant aux utilisateurs de créer, organiser et marquer des tâches comme terminées.</p>
//           <p><strong>Technologies utilisées :</strong> JavaScript, HTML, CSS</p>
//           <a href='https://github.com/username/task-manager' target='_blank' rel='noopener noreferrer'>Voir le code</a>
//         </div>
//       </div>
//     </div>
//   );
// };
import React from 'react';
import './ProjectStyle.css';

export const ProjectPage = () => {
  return (
    <div className='content-project'>
      <div className='title-project'>
          <h1>Latest <span className='highlight'>Projects</span></h1>
      </div>

      <div className='project-list'>
        {/* --- PROJET 1 --- */}
        <div className='project-card'>
          <div className="project-badge">Web App</div>
          <h3>Gestion de Stocks</h3>
          <p>Optimisation des flux : ajout, sortie et valorisation d'articles en entreprise.</p>
          <div className="tech-stack">
            <span>React</span> <span>Node.js</span> <span>MongoDB</span>
          </div>
          <a href='https://github.com/username/stock-management' className="project-btn" target='_blank' rel='noopener noreferrer'>
            Voir le code
          </a>
        </div>

        {/* --- PROJET 2 --- */}
        <div className='project-card'>
          <div className="project-badge">Portfolio</div>
          <h3>Portfolio Personnel</h3>
          <p>Interface interactive et réactive pour présenter mon expertise et mes travaux.</p>
          <div className="tech-stack">
            <span>React</span> <span>CSS3</span> <span>Lottie</span>
          </div>
          <a href='https://monportfolio.com' className="project-btn" target='_blank' rel='noopener noreferrer'>
            Voir le site
          </a>
        </div>

        {/* --- PROJET 3 --- */}
        <div className='project-card'>
          <div className="project-badge">JavaScript</div>
          <h3>Gestion de Tâches</h3>
          <p>Organisation et suivi de productivité avec marquage des tâches terminées.</p>
          <div className="tech-stack">
            <span>JavaScript</span> <span>HTML5</span> <span>CSS3</span>
          </div>
          <a href='https://github.com/username/task-manager' className="project-btn" target='_blank' rel='noopener noreferrer'>
            Voir le code
          </a>
        </div>
      </div>
    </div>
  );
};