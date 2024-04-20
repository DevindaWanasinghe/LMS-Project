import React from 'react';
import Footer from '../Components/Footer';
import '../css/course.css';
//images
import Holi1 from '../../public/images/courses-images/Holi1.png'
import Holi2 from '../../public/images/courses-images/Holi2.png'
import content1 from '../../public/images/courses-images/final1.jpg'
import content2 from '../../public/images/courses-images/final2.jpg'
import content3 from '../../public/images/courses-images/final3.jpg'
import content4 from '../../public/images/courses-images/final4.jpg'
import { Link } from 'react-router-dom'

export default function Course() {
  return (
    <div className=''>
      <div className="title-box-1">
          <div className="holi-img1"> 
              <img src={Holi1} alt='Holi1'/> 
          </div>

          <div className="holi-img2">
              <img src={Holi2} alt='Holi2'/> 
          </div>

          <div className='title-box-2'>
            <p className='title-name-1'>COURSES</p>
            <p className='title-name-2'>SINHALA</p>
          </div>   
      </div>

        
          
      <div className='content-box'>
          <div className=''><img src={content1} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>

      <div className='content-box'>
          <div className=''><img src={content2} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>

      <div className='content-box'>
          <div className=''><img src={content3} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>
      
      <div className='content-box'>
          <div className=''><img src={content4} alt='content1' className='content-img'></img></div>
          <p className='content-name-1'>GRADE 10</p>
          <p className='content-name-2'>THEORY</p>
      </div>
      
      
     

      
      <div className='bottom-headder'><Footer/></div>
    </div>
  );
  
}

