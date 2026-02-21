import React from 'react';

export const EducationPage = () => {
  return (
    <div className='education-page'>
      <h2>Mon Parcours Éducatif</h2>
      
      <section className='education-section'>
        <h3>Diplômes et Formations</h3>
        <div className='education-item'>
          <h4>Master I en informatique, option System informatique Electronic et intelligence artificielle </h4>
          <p>Institut Superieur Polytechnique de Madagascar</p>
          <span className='education-duration'>2022 - 2023</span>
          <p>Description : Études approfondies en programmation, développement web, et ingénierie logicielle.</p>
        </div>
        <div className='education-item'>
          <h4>Licence  en informatique, option System informatique Electronic et intelligence artificielle </h4>
          <p>Institut Superieur Polytechnique de Madagascar</p>
          <span className='education-duration'>2021 - 2022</span>
          <p>Description : Études approfondies en programmation, développement web, et ingénierie logicielle.</p>
        </div>
        <div className='education-item'>
          <h4>Diplôme de Baccalaureat serie Technique filiere Electronique numerique</h4>
          <p>Lycée Technique Professionnel Alarobia</p>
          <span className='education-duration'>2018 - 2019</span>
          <p>Description : Études approfondies en programmation, développement web, et ingénierie logicielle.</p>
        </div>

        {/* <div className='education-item'>
          <h4>Formation Développeur Full-Stack</h4>
          <p>Institut ABC</p>
          <span className='education-duration'>2021</span>
          <p>Description : Formation pratique en JavaScript, React, Node.js, et gestion de bases de données.</p>
        </div> */}
      </section>

      <section className='skills-section'>
        <h3>Compétences Techniques Acquises</h3>
        <ul>
          <li>Programmation en JavaScript, HTML, et CSS</li>
          <li>Développement Front-End avec React</li>
          <li>Développement Back-End avec Node.js et Express</li>
          <li>Gestion des bases de données SQL et NoSQL</li>
        </ul>
      </section>
      
      {/* <section className='certifications-section'>
        <h3>Certifications</h3>
        <div className='certification-item'>
          <h4>Certification en Développement Web</h4>
          <p>Plateforme en ligne DEF</p>
          <span className='certification-date'>2022</span>
          <p>Description : Couvre les concepts avancés en JavaScript, frameworks front-end, et API REST.</p>
        </div>
      </section> */}
    </div>
  );
};
