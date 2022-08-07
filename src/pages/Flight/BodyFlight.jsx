import './bodyFlight.css'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const BodyFlight = () => {

  
    
   const [roundtrip,setRoundtrip]=useState(false);
   const handelRound = () => {
      setRoundtrip(true);
   }
   const [OneWay,setOneWay]=useState(false);
   const handelOneWay = () => {
      setRoundtrip(false);
   }
 const [selectedDate,setSelecteDate]=useState(new Date());
 const [allEntry,setAllEntry]= useState({
       City:"",
       dCity:"",
       Date: new Date
 })
   
 const handelChange = (event) => {
   const {name,value}=event.target
   setAllEntry (preEntry =>{
      return {
         ... preEntry,
         [name]:value
      }
   })
 }  
 const navigateFlightList=useNavigate();
 const handelFSearch= () => {
    navigateFlightList("/FlightList",{state:{allEntry}})
 }
   const formValidation = (event) =>{
      event.preventDefault()
      var flag=1;
        if(allEntry.City===""){
         //   alert("Enter Boarding Airport");
           toast.error("Enter Boarding Airpor",{position:toast.POSITION.TOP_CENTER})
           flag=0;
        }
        else if(allEntry.dCity===""){
         flag=0;
         toast.error("Destination is missing",{position:toast.POSITION.TOP_CENTER})
      }
      if(flag===1){
         handelFSearch()
      }
        
   } 

    
  return (
    <div className="fContainer">
      <div className="Flightheader">
            <h1>Book the best Flight and have a safe journey!</h1>
            <div className="TravelOption">
                <button className="OptionList" onClick={handelOneWay}>One Way</button>
                <button className="OptionList" onClick={handelRound}>Roundtrip</button>
                <button className="OptionList">MultiCity</button>
            </div>
            <div className="userInput">
                <form action="">
                <div className="InputItem"> 
                <span>From</span>     
                   <div className="EnterOption">
                   <FlightTakeoffIcon/>    
                    <input type="text" name='City' value={allEntry.City} onChange={handelChange} placeholder='City name/ Airport name' />
                   </div>
                </div>
                <div className="InputItem">
                <span>To</span>  
                   <div className="EnterOption">
                   <FlightLandIcon/>    
                    <input type="text"  name="dCity" value={allEntry.dCity} onChange={handelChange} placeholder='City name/ Airport name' />
                   </div>
                </div>
                   <div className="InputItem">
                   <span>Departure Date</span>   
                   <div className="EnterOption Date">
                   <CalendarMonthSharpIcon className='calendar'/> 
                
                   <DatePicker selected={selectedDate} dateFormat='dd/MM/yyyy' onChange={date => setSelecteDate(date)} minDate={new Date()}/> 
                    
                   </div>
                   </div>
                   {
                     roundtrip && <div className="InputItem">
                   <span>+ Add Return Date</span>   
                   <div className="EnterOption Date">
                   <CalendarMonthSharpIcon className='calendar'/> 
                
                   <DatePicker selected={selectedDate} dateFormat='dd/MM/yyyy' onChange={date => setSelecteDate(date)} minDate={new Date()}/> 
                    
                   </div>
                </div>
}
                <div className="InputItem">
                <span>Traveller {'&'} Class</span>
                   <div className="EnterOption">
                   <AccountCircleIcon/>
                 {/* <select id="inputState" class="form-select" style="width: 150%;">  */}
                 <select className='SelectOption'> 
              <option className='Mopt' selected>Economy class</option>
              <option className='Mopt'>Business class</option>
              <option className='Mopt'>First class</option>
              <option className='Mopt'>Basic economy</option>
            </select>
                   </div>            
                </div>
                <button className='SearchFlight' onClick={formValidation}>Search Flight</button>
                <ToastContainer/>
                </form>
            </div>
      </div>
      <ToastContainer/>
    </div>
  )
}
export default BodyFlight
