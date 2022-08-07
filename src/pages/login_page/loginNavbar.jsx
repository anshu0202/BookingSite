import './lNavbar.css'
import logo from './logo.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const loginNavbar = () => {
  return (
    <div className='LnavContainer'>
       <div className="LnavContent">
        <div className="siteName LoginP">
            <img src={logo} alt=""  className='logo'/>
          <div className='site'>  GetSetBooking.com</div>
        </div>
        <div className="siteDescH">
            {/* <ul className="logoItem">
                <li >
                    HOME
                </li>
                <li>
                    ABOUT
                </li>
                <li>
                    BLOG
                </li>
                <li>
                    CONTACT US
                </li>
                <li>
                    SUPPORT
                </li>
                <li className='icon'><AccountCircleIcon/></li>
            </ul> */}


            <h2>Welcome To The Official Page Of GetSetBooking.com</h2>
        
        </div>

       </div>

    </div>
  )
}

export default loginNavbar;
