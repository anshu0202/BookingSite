import './LBody.css'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
const LBody = () => {

    const navigate = useNavigate();
    const navigate_CreatePage= useNavigate();

    const [count,setCount]=useState(0);

    const handelSignIn =(event) => {
      event.preventDefault();
      var userName=document.getElementById("userName").value;
      var password=document.getElementById("password").value;
      console.log("user name is"+userName);
      console.log("password is "+password)
      if(userName===""){
        console.log("hiii")
        toast("Username is not entered",{position:toast.POSITION.TOP_RIGHT})
      }
     else if(password===""){
        toast("Password is not entered",{position:toast.POSITION.TOP_RIGHT})
      }
      else if(userName==="Anshu.verma" && password==="anshu@2002"){
        navigate("/home");
      }
      else{
        setCount(count+1);
        if(count===2){
          toast.warning("Too many Wrong attempts!",{position:toast.POSITION.TOP_CENTER})
        }
        else
        toast("Incorrect Username or Password!",{position:toast.POSITION.TOP_RIGHT})
       
      }

        
    }
      
    const handelSignUp = () =>{
        navigate_CreatePage("/createPage");
    }
     
  return (
    <div>
    <div className='bContainer'>
        <div className="LoginIn">
        <form action="ggg">
                <h1>User Login</h1>
                <div className="user">
                <PersonIcon className='LogIcon'/>
            <input type="text"  id="userName" placeholder='Username' required/></div>
            <div className="user">
            <LockIcon className='LogIcon'/>
            <input type="password" id="password"  placeholder='Password' required/></div>
            <div className="LoginFormat">
                <div className="remember">
                <input type="checkbox" value='Remember'  />
                Remember
                </div>
                <div className="forget">
                    Forgot password?
                </div>
            </div>
            <button className='btn' type='submit' onClick={handelSignIn}>Sign in</button>
            <div className='SocialMedia'>
             <hr className='hrLine'/>
              <h3 className='smHead'>Sign In using social media accounts</h3>
              <div className="SocialItemLogin">
              <div className="Facebook sIcon"> <FacebookIcon/><span>Facebook </span></div>
              <div className="Twitter sIcon"> <TwitterIcon/>  <span> Twitter</span></div>
              <div className="Google sIcon">  <EmailIcon/> <span> Gmail</span></div>
              </div>
              </div>
        </form>
      </div>
      <div className="WelcomeContent">
        <h1>New Here?</h1>
        <h3>Sign up and discover a great amount of new opportunities</h3>
           <span onClick={handelSignUp}>Create new account</span>
        <button className='SignUpBtn' onClick={handelSignUp}>Sign Up</button>
      </div>
    </div>
    <div className="Loginfooter">
       <div className="icons">
        <div className="iconItem">
      <TwitterIcon/></div>
      <div className="iconItem">
      <InstagramIcon/></div>
      <div className="iconItem">
      <LinkedInIcon/></div>
      <div className="iconItem">
      <EmailIcon/>
      </div>
      </div>
      <div className="fText">Copyright © 2022 Lamabooking.</div>
    </div>
    <ToastContainer/>
    </div>
   
  )
}
export default LBody
