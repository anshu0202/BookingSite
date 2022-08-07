import './passengerDetails.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import { useState } from 'react'
import PassInput from './passInput'
import NewPassenger from './NewPassenger'
import { useNavigate } from 'react-router-dom'

const PassengerDetails = () => {

  const [showButton, setShowButton]=useState(false);
  const [passenger,setPassenger]=useState([]);
  function addPassenger(newPass){
          setShowButton(true);
          setPassenger(prePass => {
              return [...prePass,newPass];
          });
  }
  const navigatePayment =useNavigate()
  const makePayment = () => {
      navigatePayment("/PaymentPage")
  }

  function deletePass(id){
    console.log("No. of pass "+passenger.length);
    if(passenger.length===1){
      setShowButton(false);
    }
    setPassenger(prePass => {
        return prePass.filter((passDetail,index) => {
            return index!==id;
        }) 
}) 
}
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
        
      <div className="trainBook">
       <div className="trainDetails">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam repudiandae accusamus necessitatibus molestias, placeat ut voluptates eius vitae rerum voluptatem praesentium a qui nam quis fuga nesciunt. Sapiente facilis natus culpa neque voluptatem, quas fugiat fugit, atque recusandae et maxime? Magni itaque ipsa laboriosam soluta illum quaerat odio esse doloremque?
       </div>
     
     

      <div className="pdBody">

        <div className="formControl">
        <h1 className='pdHeading'>Enter Passenger Details</h1>
        <div className="pDetails">
                {/* <div className="passengerDetail">
                    <div className="passengerInput">
                <label htmlFor="">Passenger Name:</label>
                <div className="Userinput">
                <input type="text" placeholder='Passenger Name' required />
                </div>
                </div> */}
               {/* <div className="passengerInput">
                <label htmlFor="">Last Name:</label>
                <div className="Userinput">
                <input type="text" placeholder='Last Name' />
                </div>
                </div> */}

                {/* <div className="passengerInput">
                <label htmlFor="">Gender:</label>
                <div className="Userinput" >
                  <div className="radio">
                <input type="radio"  name="gender" required/> <span>Male</span>
                <input type="radio" name='gender' required  /> <span>Female</span>
                </div>
                </div>
                </div>
                <div className="passengerInput">
                <label htmlFor="">Mobile No.:</label>
                <div className="Userinput">
                <input type="tel" placeholder='Mobile no.' /> </div> </div>
                <div className="passengerInput">
                    <label htmlFor="">Id Proof: </label>
                    <div className="Userinput">
                <input type="text" placeholder='Aadhar/Aadhar no.' />
               </div>
               </div>

    PassengerName:"",
            gender:"",
            mobile:"",
            aadhar:""


                </div> */}


          <PassInput onAdd={addPassenger}/>

        </div>
        
      </div>

   <div className="FilledDetails">
   { passenger.map((passDetail,index) => {
        return <NewPassenger  PassengerName={passDetail.PassengerName}
        gender ={passDetail.gender}
        mobile ={passDetail.mobile}
        aadhar = {passDetail.aadhar} 
        onDelete={deletePass} key ={index} id={index}/>
    })}
   </div>
       {showButton && <button className='btn trainBookButton' onClick={makePayment}>Reserve or Book Now!</button>}
      </div>
      </div>
      
      <MailList/>
      <div className="passDetfooter">
      <Footer/></div>
    </div>
  )
}

export default PassengerDetails
