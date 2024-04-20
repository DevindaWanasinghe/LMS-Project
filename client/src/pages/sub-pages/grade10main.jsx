import React from 'react'
import '../../css/grade10main.css'
import { Link } from 'react-router-dom'
import Headder from '../../Components/Headder'



function grade10main() {
  return (
    <>
  
        <div className='title'>
            <div className='main_title'><h1>GRADE 11</h1></div>
            <div><h1 className='h1'>THEORY</h1></div>
        </div>
        <div className='all-box'>

            <div className='btn-box'>

              <div className=''>
                <button className='btn'><Link to='/courses/grade10main/lesson01' className='btn-01'>Programming</Link></button>
                <p className='num_btn'>01</p>
              </div>
              <div className=''>
                <button className='btn'><Link to='/courses/grade10main/lesson02' className='btn-01'>System Development Life Cycle</Link></button>
                <p className='num_btn'>02</p>
              </div>
              <div className=''>
                <button className='btn'><Link to='/courses/grade10main/lesson03' className='btn-01'>The Internet and the Electronic Mail</Link></button>
                <p className='num_btn'>03</p>
              </div>
              <div className=''>
                <button className='btn'> <Link to='/courses/grade10main/lesson04'className='btn-01'>Use of Multimedia</Link></button>
                <p className='num_btn'>04</p>
              </div>
              <div className=''>
                <button className='btn'> <Link to='/courses/grade10main/lesson05'className='btn-01'>Web Designing Using Multimedia</Link></button>
                <p className='num_btn'>05</p>
              </div>
              <div className=''>
                <button className='btn'> <Link to='/courses/grade10main/lesson06'className='btn-01'>Information & communication Technology & Society</Link></button>
                <p className='num_btn'>06</p>
              </div>
              <div className=''>
                <button className='btn'></button>  
                <p className='num_btn'>07</p>
              </div>
              <div className=''>
                <button className='btn'></button>
                <p className='num_btn'>08</p>
              </div>
              <div className=''>
                <button className='btn'></button>
                <p className='num_btn'>09</p>
              </div>

              <div >
                    
      
              </div>   
            </div>

        </div>
        <div className='nav-bar'><Headder/></div>
    
    </>
    
  )
}

export default grade10main