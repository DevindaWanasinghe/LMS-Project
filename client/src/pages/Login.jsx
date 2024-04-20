import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/images/logo_login.png'
import email_icon from '../../public/images/email.png'
import password_icon from '../../public/images/password.png'
import register_icon from '../../public/images/Register_icon.png'

function Login() {
  return (
    <div className='auth'>
        <div className='form-box'>
            <div className='buttonbox_login'>
                <div id='btn_log'></div>
                <button type='button' className='toggle-btn_log'><Link to="/login" className="register_login_btn">LOGIN</Link></button>
                <button type='button' className='toggle-btn_log'><Link to="/register" className="login_register_btn">REGISTER</Link></button>
            </div>
        </div>
        <form className='input-group_log'>
            <input type='text' className='input-field_log' placeholder=' Enter Your Email Address' required/>
            <input type='password' className='input-field_log' placeholder=' Enter Your Password' required/>

                <div className='icon-log-field1'></div>
                    <div className='email-img_log'>
                        <img src={email_icon} alt="emai-icon"/>
                    </div> 
                <div className='icon-log-field2'></div>
                    <div className='password-img_log'>
                        <img src={password_icon} alt="password-icon"/>
                    </div> 
                
            <input type='checkbox' className='check-box_log'/><span>Remember Password</span><span><u>ForgetPassword</u></span>
        </form>

            <div className='login-img_log'>
                <img src={logo} alt="loginimg" />  
            </div>
            <div>
                <button type='submit' className='submit-btn_log'><Link to="/" className='submit_btn_login'>LOGIN</Link></button>

                <div>
                    <div id='arro_log'></div>  
                    <div  className='register-icon_log'>
                        <img src={register_icon} alt="register-icon" />
                    </div>         
                </div>          
            </div>       
    </div>
  )
}

export default Login