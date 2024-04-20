import { Outlet,NavLink } from "react-router-dom";
import '../../src/css/footer.css';
//react icons
import { FaHome } from "react-icons/fa";
import { BiSolidBookContent } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdManageAccounts } from "react-icons/md";


export default function Headder(){
    
  return (
    <div>
      
        <div className='main-div '>
            <div className='div-home' >
                <NavLink to="/"><FaHome size={55}  className="icon" /></NavLink>
            </div>

            <div className='div-account'>
                <NavLink to="/courses"><BiSolidBookContent size={55}  className="icon" /></NavLink>
            </div>

            <div className='div-contact'>
                <NavLink to="/Contact"><TfiHeadphoneAlt size={55}  className="icon" /></NavLink>   
            </div>

            <div className='div-course'>
                <NavLink to="/Account"><MdManageAccounts size={55}  className="icon"  /></NavLink>
            </div>
           
          <Outlet/>
        </div>
    </div>
  )
} 