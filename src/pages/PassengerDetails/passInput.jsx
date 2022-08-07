import React from 'react'
import './passInput.css'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function PassInput  (props)  {

    const [pass,setPass]=useState({
        PassengerName:"",
        gender:"",
        mobile:"",
        aadhar:""
    })
   
    
    function handleChange(event){
        // destructrucing the event
            const {name,value}=event.target;
            setPass(prevPass => {
                return {
                    ...prevPass,
                    [name]:value
                };
            });
    }


    function submitPass(event){
        props.onAdd(pass);
        // event.preventDefault();
        //to clear the input area

         var radios= document.getElementById("male");
            radios.checked=false;
         
         var radios= document.getElementById("female");
         radios.checked=false;
      
        setPass({
            PassengerName:"",
            gender:"",
            mobile:"",
            aadhar:""
        })  
    }   
   
   const formValidation = (event) => {
    var flag=1
    event.preventDefault();
    console.log("value is "+pass.gender)
    if(pass.aadhar ===""){
      toast.error("Unique Id is missing",{position:toast.POSITION.TOP_CENTER})
      flag=0;
    }
    else if(pass.PassengerName ===""){
      toast.error("Passenger",{position:toast.POSITION.TOP_CENTER})
      flag=0
    }
   else if(pass.mobile ===""){
             toast.error("Mobile no.is missing",{position:toast.POSITION.TOP_CENTER})
        flag=0
      }
     else if(pass.gender ===""){
      toast.error("Select Gender",{position:toast.POSITION.TOP_CENTER})
        flag=0
      }
    if(flag===1){
   submitPass();
    }
 }
    

  return (
    <div>
         <form action="" >
       <div className="passengerDetail">
                    <div className="passengerInput">
                <label htmlFor="">Passenger Name:</label>
                <div className="Userinput">
                <input type="text" placeholder='Passenger Name'name='PassengerName'value={pass.PassengerName} onChange={handleChange} required />
                </div>
                </div>            
                <div className="passengerInput gen">
                <label htmlFor="">Gender:</label>
                <div className="Userinput" >
                  <div className="radio">
                <input type="radio"  name="gender" value="Male" className='genIpM'  id='male' onChange={handleChange} /> <span className='maleP'>Male</span>
                <input type="radio" name='gender'  className='genIpF' value="Female" id='female'  onChange={handleChange}   /> <span className='femaleP'>Female</span>
                </div>
                </div>
                 </div>
                <div className="passengerInput">
                <label htmlFor="">Mobile No.:</label>
                <div className="Userinput">
                <input type="tel" placeholder='Mobile no.' name='mobile' value={pass.mobile} onChange={handleChange} /> </div> </div>
                <div className="passengerInput">
                    <label htmlFor="">Id Proof: </label>
                    <div className="Userinput">
                <input type="text" placeholder='Aadhar/Aadhar no.' name='aadhar' value={pass.aadhar} onChange={handleChange} />
               </div>
               </div>
                </div>
                <div className="addPass">
                    <Fab onClick={formValidation} type="submit" >
                <AddIcon  />
                </Fab>
                </div>
                </form>
                <ToastContainer/>
    </div>
  )
}

export default PassInput
