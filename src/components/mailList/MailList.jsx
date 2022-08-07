import { useState } from 'react';
import './mailList.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { POSITION } from 'react-toastify/dist/utils';
const MailList = () => {
  var mDesc="Sign up and we'll send the best deals to you"
  const [mailDesc,setMailDesc]=useState(mDesc);

  const [btnText,setBtnText]=useState("Subscribe");
  const handelClick = () => {
      
       var text= document.getElementById("emailId").value;
       if(text===""){
        toast.warning("Enter email-id for subscription",{position:toast.POSITION.TOP_CENTER})

       }
       else{
             setMailDesc("Thank you For Subscribing GetSetBooking")
             setBtnText("Subscribed!")
       }
  }

  return ( 
    <div className='mail'>
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className='mailDesc'>{mailDesc}</span>
      <div className='mailInputContainer'>
                    <input type="email" id="emailId" placeholder='Your Email' />
                    <button id='btn' onClick={handelClick}>{btnText}</button>
      </div>
      <ToastContainer/>
    </div>
  )
}
  
export default MailList
