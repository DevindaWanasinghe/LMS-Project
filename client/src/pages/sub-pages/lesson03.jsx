import React from 'react'
import '../../css/lessons.css'
import '../../css/grade10main.css'
import register_icon from '../../../public/images/Register_icon.png'

function lesson03() {
  return (
  <>
    <div className='title'>
        <div className='main_title'><h1>GRADE 11</h1></div>
        <div><h1 className='h1'>THEORY</h1></div>
    </div>

    <div>
        <div className='btn-box'>
            <button className='btn'>The Internet and the Electronic Mail</button>

              <div className='num-box-01'>
                <button className='num_btn-01'>03</button>
              </div>
        </div>
    </div> 
    <div>

        <div className='topic-box'>
          <button className='topic-btn'>Topic 01</button>
          <button className='topic-btn'>Topic 02</button>
          <button className='topic-btn'>Topic 03</button>
          <button className='topic-btn'>Topic 04</button>
          <button className='topic-btn'>Topic 05</button>
          <button className='topic-btn'>Topic 06</button>
          <button className='topic-btn'>Topic 07</button>
          <button className='topic-btn'>Topic 08</button>
          <button className='topic-btn'>Topic 09</button>
          <button className='topic-btn'>Topic 10</button>
          
        </div>
        <div className='topic-card-box'>
              <button className='topic-card-btn'>FREE</button>
              <button className='topic-card-btn'>FREE</button>
              <button className='topic-card-btn'>PAID</button>
              <button className='topic-card-btn'>PAID</button>
              <button className='topic-card-btn'>PAID</button>
              <button className='topic-card-btn'>PAID</button>
              <button className='topic-card-btn'>PAID</button>
              <button className='topic-card-btn'>PAID</button>
              <button className='topic-card-btn'>PAID</button>
              <button className='topic-card-btn'>PAID</button>
        </div> 
    </div>
    <div className='topic-num-box'>
        <button className='topic-num-btn'>03.1</button>
        <button className='topic-num-btn'>03.2</button>
        <button className='topic-num-btn'>03.3</button>
        <button className='topic-num-btn'>03.4</button>
        <button className='topic-num-btn'>03.5</button>
        <button className='topic-num-btn'>03.6</button>
        <button className='topic-num-btn'>03.7</button>
        <button className='topic-num-btn'>03.8</button>
        <button className='topic-num-btn'>03.9</button>
        <button className='topic-num-btn'>03.10</button>
    </div> 

    <div className='price-box'>
        <button className='price-btn'>LKR 1000.00</button>
            <div id='arro-cir'></div>  
                <div  className='arro-price'>
                    <img src={register_icon} alt="register-icon" />
                </div>               
    </div>

  </>
  )
}

export default lesson03