import React from 'react';
import Footer from '../Components/Footer';
import '../css/home.css';
import Holi1 from '../../public/images/courses-images/Holi1.png'
import Holi2 from '../../public/images/courses-images/Holi2.png'

export default function Home() {
  
  return (
      <div className="wrapper">
        <div className='main'>



        <div className="title-box-1">
          <div className="holi-img1"> 
              <img src={Holi1} alt='Holi1'/> 
          </div>

          <div className="holi-img2">
              <img src={Holi2} alt='Holi2'/> 
          </div>

          <div className='home-title-box-2'>
            <p className='home-title-name-1'>COURSES</p>
            <p className='home-title-name-2'>SINHALA</p>
          </div>   
      </div>

          <div className='head'>
            <p className='heading'>your gateway to </p>
            <p className='heading'>interactive education</p>
          </div>

          <div className='user-friendly'>
            <div className='bdge-text'>
              <div className='bdge'><span >01</span></div><div  className ='text'><p >User-Friendly Interface</p></div>
            </div>
            <div className='description'>
            <p >The website should have an intuitive design that makes it easy for user to
              navigate and access course materials.
            </p>
            </div>
          </div>

          <div className='diverse'>
            <div className='bdge-text'>
              <div className='bdge'><span >02</span></div><div  className ='text'><p >Diverse Course Offerings</p></div>
            </div>
            <div className='description'>
            <p >Provide a wide range of courses covering various subject and skill levels to cater to different interests
               and learning needs.
            </p>
            </div>
          </div>

          <div className='interactive'>
            <div className='bdge-text'>
              <div className='bdge'><span >03</span></div><div  className ='text'><p >Interactive Learning Tools</p></div>
            </div>
            <div className='description'>
            <p >Incorporate interactive elements such as qizzes,similations and multimeadia content to enhance engagement and 
              learning outcomes.
            </p>
            </div>
          </div>

          <Footer/>
        </div>
    </div>
    
  );
}
