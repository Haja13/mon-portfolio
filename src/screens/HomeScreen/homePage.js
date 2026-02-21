import React from 'react'
import myImage from '../../assets/test.png';
import './styleHome.css'

export const HomePage = () => {
  return (
    <div className='contentHome'>
       <div className='image-block'>
          {/* On garde ton image ici, on la stylisera en cercle dans le CSS */}
          <img src={myImage} alt="Ajaah Rajerison" className="profile-img" />
       </div>
       
       <div className='home-text'>
          <h2 className='names'>Hi ! I'm A<span className='highlight'>jaah</span> Rajerison</h2>
          <p className='job-title'>Frontend Web Developer <br/> based in Madagascar.</p>

          <p className='description'>
            I am a frontend developer from Madagascar, with experience in creating 
            modern and performant web applications for various companies.
          </p>

          <div className='home-btns'>
            <button className='btn-primary'>Contact me</button>
            <button className='btn-secondary'>My resume</button>
          </div>
       </div>
    </div>
  )
}