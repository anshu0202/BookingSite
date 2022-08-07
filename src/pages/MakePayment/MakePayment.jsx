import './makePayment.css'
import LoginNavbar from '../login_page/loginNavbar'
import payPal from './paypal-logo.png'
import phonePe from './phonePe.jpg' 
import GPay from './Google-Pay-UPI-limit.jpg'
import PayTm from './Paytm.jpg'
import masterCard from './mastercard11.png'
import {useState}  from 'react';
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar';
{/* <FontAwesomeIcon icon="fa-brands fa-google-pay" />
<FontAwesomeIcon icon="fa-brands fa-paypal" /> 
<FontAwesomeIcon icon="fa-brands fa-amazon-pay" />
<FontAwesomeIcon icon="fa-brands fa-cc-visa" />
<FontAwesomeIcon icon="fa-solid fa-credit-card" />
import PaymentIcon from '@mui/icons-material/Payment';
*/}
const MakePayment = () => {
    
    const [show,setShow]= useState(false);
    
    const handelPay = () =>{
        setShow(true);
    }
    const navigateBack = useNavigate();
    
 
  return (
    <div>
        <Navbar/>
        {/* <button className='back' onClick={goPrev}>Back</button> */}
         <div className="pay">
            <div className="paymentMethod">
                <h1>Select Payment Method</h1>
                <div className="paymentItems">
                            <input type="radio" name='payment' onClick={handelPay} />
                            <img src={masterCard} alt="loading"  className='PayImg' />
                            {/* <FontAwesomeIcon icon="fa-brands fa-cc-visa" /> */}
                </div>
                <div className="paymentItems">
                            <input type="radio" name='payment' onClick={handelPay}  />
                            <img src={payPal} alt="loading"  className='PayImg' />
                            {/* <FontAwesomeIcon icon="fa-brands fa-cc-visa" /> */}
                </div>
                <div className="paymentItems">
                            <input type="radio" name='payment' onClick={handelPay} />
                            <img src={phonePe} alt="loading" className='PayImg' />
                            {/* <FontAwesomeIcon icon="fa-brands fa-cc-visa" /> */}
                </div>
                <div className="paymentItems">
                            <input type="radio" name='payment' onClick={handelPay}/>
                            <img src={GPay} alt="loading"  className='PayImg' />
                            {/* <FontAwesomeIcon icon="fa-brands fa-cc-visa" /> */}
                </div>
                <div className="paymentItems" >
                            <input type="radio" name='payment' onClick={handelPay}/>
                            <img src={PayTm} alt="loading"  className='PayImg' />
                            {/* <FontAwesomeIcon icon="fa-brands fa-cc-visa" /> */}
                </div>
                

            </div>
            <div className="UserDetails">

                <h1>User Details</h1>
                <div className="uDetails">
                    <div className="uDetailItem">
                        <span className='key'>Name:</span>
                        <span className='value'>Anshu Verma</span>
                    </div>
                    <div className="uDetailItem">
                        <span className='key'>Email:</span>
                        <span className='value'>anshuverma@gamil.com</span>
                    </div>
                    <div className="uDetailItem">
                        <span className='key'>Phone no.:</span>
                        <span className='value'>7462398525</span>
                    </div>
                    <div className="uDetailItem">
                        <span className='key'>Address:</span>
                        <span className='value'>Muzaffarpur,842001,Bihar</span>
                    </div>
                    {show ? <button className='payMoney'> ₹ Pay</button>:""}
                </div>
            </div>
         </div>

    </div>
  )
}

export default MakePayment
