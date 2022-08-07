import React, { useState } from 'react';
import "./navbar.css";
import logo from '../../pages/login_page/logo.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SupportIcon from '@mui/icons-material/Support';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import { useNavigate } from 'react-router-dom';
// import SideBar from '../SideBar/SideBar';
// import * as FaIcons from 'react-icons/fa'
import MenuIcon from '@mui/icons-material/Menu';
// import * as AiIcons from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Sidebar from './Sidebar';
const Navbar = () => {

 const [show,setShow]= useState(false);
  const handelClick =() => {
   
    setShow(!show)
  }
  const handelOut =() => {
    setShow(false)
  }

  const navigateBack= useNavigate();
  const goLogin = () => {
    navigateBack("/")
  }

   const [sidebar,setSidebar]=useState(false);
   const showSidebar = () => {
   
    // if(sidebar===false){
    //   document.getElementById('sBar').classList.toggle('active');
    // }

    console.log("side menu is clicked");
        setSidebar(!sidebar)
   }

  return (
    <div className='navBarW'>
    <div className='navbar'>
      <div className="navContainer">
      <div className="sideBar">
      <Link to='#' >
      <MenuIcon onClick={showSidebar} className="setIconColor"/>
      </Link>
      </div>
      <div className="siteName">
            <img src={logo} alt=""  className='logo'/>
          <div className='site'>  GetSetBooking.com</div>
        </div>
      </div>
      <div className="profileDesc">
      <div className='profile'>
        <div className="welcome">Hello Anshu!</div>
        <div className="viewProfile" onClick={handelClick}>
     <AccountCircleIcon className='IconOut'/></div>
     </div>
     { show && <div className="SignOut" onMouseLeave={handelOut}>
        <div className="proOption" onClick={goLogin}>Sign Out</div>
        <div className="proOption">Edit Profile</div>
    </div>
}
      </div>
    </div>
    <div className={sidebar?"viewSideBar active":"viewSideBar"} id="sBar">
     <div className='sideBarContent'>
        <div className="ItemSBar">
        <HomeIcon/>
        <span>Home</span>
        </div>
        <div className="ItemSBar">
        <InfoIcon/>
        <span>About</span>
        </div>
        <div className="ItemSBar">
        <ConnectWithoutContactIcon/>
        <span>Contact Us</span>
        </div>
        <div className="ItemSBar">
        <RssFeedIcon/>
        <span>Blog</span>
        </div>
        <div className="ItemSBar">
        <SupportIcon/>
        <span>support</span>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Navbar;
