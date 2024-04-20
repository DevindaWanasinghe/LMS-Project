import React from 'react'
import '../../css/lessons.css'
import '../../css/grade10main.css'
import register_icon from '../../../public/images/Register_icon.png'

function lesson01() {
  return (
  <>
    <div className='title'>
        <div className='main_title'><h1>GRADE 11</h1></div>
        <div><h1 className='h1'>THEORY</h1></div>
    </div>

    <div>
        <div className='btn-box-les'>
            <p className='btn-les'>Programming</p>

              <div className='num-box-01'>
                <button className='num_btn-01'>01</button>
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
        <button className='topic-num-btn'>01.1</button>
        <button className='topic-num-btn'>01.2</button>
        <button className='topic-num-btn'>01.3</button>
        <button className='topic-num-btn'>01.4</button>
        <button className='topic-num-btn'>01.5</button>
        <button className='topic-num-btn'>01.6</button>
        <button className='topic-num-btn'>01.7</button>
        <button className='topic-num-btn'>01.8</button>
        <button className='topic-num-btn'>01.9</button>
        <button className='topic-num-btn'>01.10</button>
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

export default lesson01