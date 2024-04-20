import { Outlet,NavLink } from "react-router-dom";
import '../css/Headder.css';
//react icons
import { FaHome } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";


export default function Headder(){
    
  return (
    <div>
      
        <div className='main-div-header'>
            <div className='div-home' >
                <NavLink to="/"><FaHome size={55}  className="icon" /></NavLink>
            </div>

            <div className='div-account'>
                <NavLink to="/courses"><BiSolidBookContent size={55}  className="icon" /></NavLink>
            </div>

            <div className='div-contact'>
                <NavLink to="/contact"><TfiHeadphoneAlt size={55}  className="icon" /></NavLink>   
            </div>

            <div className='div-course'>
                <NavLink to="/dashboard"><MdManageAccounts size={55}  className="icon"  /></NavLink>
            </div>
           
        </div>
    </div>
  )
} 