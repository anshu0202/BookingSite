import  './newAccount.css'
import Navbar from '../login_page/loginNavbar'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
const NewAccount = () => {
   
  const navigate = useNavigate();
    const goBack =() => {
        navigate("/");
    }
  return (
    <div>
      
      <Navbar/>
        <button className="back" onClick={goBack}>Back</button>
      <div className="CreateContainer">
        <h1 className='signUpHeader'>Create a New Account</h1>
        <form action="">
            <div className="entry">
                <div className="entryItem">       
            <input type="text" placeholder='Name' /></div> 
            <div className="entryItem">        
            <input type="email" placeholder='Email' /></div> 
            <div className="entryItem">       
            <input type="tel" placeholder='Mobile No.' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' /></div> 
            <div className="entryItem">      
            <input type="text" placeholder='Permanent address' /></div> 
            </div>
            <div className="entryItem">      
            <input type="password" name='password' placeholder='Password' /></div>
            <div className="entryItem">      
            <input type="password" placeholder='Confirm password' /></div> 
           
             <button className='btn cAccount'>Create Account</button>
             <div className='SocialMedia'>
             <hr className='hrLine'/>
              <h3 className='smHead'>Create account using social media accounts</h3>
              <div className="SocialItem">
              <div className="Facebook sIcon"> <FacebookIcon/>
              <span>
              Facebook </span></div>
              <div className="Twitter sIcon"> <TwitterIcon/>  <span> Twitter</span></div>
              <div className="Google sIcon">  <EmailIcon/> <span> Gmail</span></div>
              </div>

             </div>
        </form>
      </div>
    </div>
  )
}

export default NewAccount
