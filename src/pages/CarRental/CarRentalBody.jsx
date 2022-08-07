import './CarRentalBody.css'
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PinDropIcon from '@mui/icons-material/PinDrop';
import HailIcon from '@mui/icons-material/Hail';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
// import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import CheckIcon from '@mui/icons-material/Check';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DatePicker from 'react-datepicker'
// import 'react-datepicker/dist/react-datepicker.css'
import {TimePickerComponent} from '@syncfusion/ej2-react-calendars'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import ReactPickyDateTime from 'react-picky-date-time';
const CarRentalBody = () => {

    const [selectedDate,setSelecteDate]=useState(new Date());
    const [selectedTime,setSelectedTime]=useState("");
    const navigatePayment=useNavigate();
    const handelClick = () => {
        console.log("Mouse has been clicked")
      navigatePayment("/PaymentPage")
    }

     const [showCabs,setShowCabs] = useState(false);
    const handelSearchCabs = () => {
     
      console.log("hello broo")
           if(showCabs===false){
               setShowCabs(true);
           }
           else if(showCabs===true){
            setShowCabs(false);
           }
         
    }
    //  function optionSelected () {
    //        var option= formid.journeyTime[formid.journeyTime.selectedIndex].text
    //  }
         
         function optionSelected (event) {
          console.log("valuse = "+event.target.value);
           var option= document.getElementById("journeyTime").value
           console.log("option selected --- is "+option);
           handelShowTime(option)
     }
      
     const [showDuration, setShowDuration]=useState(false);
     const handelShowTime = (opt) => {
             if(opt==="Schedule Later"){
                setShowDuration(true);
                // setShowCabs(false);
             }
             else{
                setShowDuration(false);
             }
     }

    //  *****************************************************Form Validation**************************
    //  function formValidation  ()   {
    //       console.log("fun is called")
    //       var CLocation = document.forms.regForm.CLocation.value;
    //       var DLocation = document.forms.regForm.Name.value;
    //       var NPassenger = document.forms.regForm.Name.value;
           
    //       var regNumber= /^\d{2}$/;
    //       if(CLocation == "" ){
    //         window.alert("Please enter your current location");
    //         CLocation.focus();
    //       }
    //  }
         const [allEntry,setAllEntry] = useState ({
            currentLocation : "",
            dropLocation : "",
            Npassenger: 0,
})
     
function handelChange(event){
    // destructrucing the event
        const {name,value}=event.target;
        setAllEntry(prevEntry => {
            return {
                ...prevEntry,
                [name]:value
            };
        });
}
      const formValidation = (event) => {
       
          var flag=1
          if(allEntry.currentLocation ==""){
            // alert("Current Location is invalid")
            toast.error("Current Location is empty",{position:toast.POSITION.TOP_CENTER})
            flag=0
          }
          else if(allEntry.dropLocation==""){
            // alert("Enter drop location")
            toast.error("Enter drop location",{position:toast.POSITION.TOP_CENTER})
            flag=0
          }
         else if(allEntry.Npassenger==0){
            // alert("Enter no. of passenger")
            toast.error("Number of Passengr is missing",{position:toast.POSITION.TOP_CENTER})
            flag=0
          }
         if(showDuration ===true){
             var flag2=1;
             if(selectedDate==""){
                // alert("Select Date")
                toast.error("Date is missing",{position:toast.POSITION.TOP_CENTER})
                flag2=0
              }
             else if(selectedTime==""){
                // alert("select Time")
                toast.error("Time is missing",{position:toast.POSITION.TOP_CENTER})
                flag2=0
              }
              // if(flag2===0){
              //   alert("Some fields are empty")
              // }
               if(flag2==1){
                handelSearchCabs();
              }
            }
            else{
           
          if(flag==1){
            handelSearchCabs();
          }
        }
        event.preventDefault();
      }
      

  return (
    <div>
       <div className="fContainer">
      <div className="Flightheader">
            <h1>Book a City Taxi to your destination in town </h1>
            <div className="TravelOption">
                <button className="OptionList" >Daily Rides</button>
                <button className="OptionList" >Outstation</button>
                <button className="OptionList">Rentals</button>
            </div>
            <div className="userInput">
                <form action=""  >
                <div className="InputItem">
                <span>PICKUP</span>     
                   <div className="EnterOption">
                   <HailIcon/>    
                    <input type="text" placeholder='Current Location' name="currentLocation" value={allEntry.currentLocation} onChange={handelChange} required />
                   </div>
                </div>
                <div className="InputItem">
                <span>Drop</span>  
                   <div className="EnterOption">
                   <PinDropIcon/>    
                    <input type="text" name='dropLocation' placeholder='Enter drop for ride estimate' value={allEntry.dropLocation} onChange={handelChange} required/>
                   </div>
                </div>
                   <div className="InputItem">
                   <span>When</span>   
                   <div className="EnterOption">
                   <ScheduleSendIcon/>  
                    <select className='SelectOption' id="journeyTime"   onChange={optionSelected} > 
              <option value="Now" >Now</option>
              <option value="Schedule Later">Schedule Later</option>
            </select>
                   </div>
                   </div>
                   {  showDuration && <div className="InputItem CabInput">
                      <div className="DepartDay">
                      <span  className='CabTime'>Depart Day</span>
                           <div className="CabIcon">
                           <CalendarMonthSharpIcon className='calendar'/>
                           <div className="EnterOption Date">
                   <DatePicker selected={selectedDate} dateFormat='dd/MM/yyyy' onChange={date => setSelecteDate(date)} minDate={new Date()} required name="Date"   /> 
                   </div>
                           </div>
                           
                      </div>
                      <div className="DepartDay">
                      <span className='CabTime'>Depart Time</span>
                           <div className="CabIcon">

                           <div className="EnterOption Date Time">
                   <input type="time" name="Time"  value="12:00"selected={selectedTime} onChange={Time => setSelectedTime(Time)} required /></div>
                           </div>
                      </div>
                </div>
}
                <div className="InputItem">
                <span>No. Of Passenger</span>
                   <div className="EnterOption numPassenger">
                   <AccountCircleIcon/>
              <input type="number" placeholder='No. of Passenger' id="numPass" name="Npassenger" min={1} value={allEntry.Npassenger} onChange={handelChange} max={8}/>
                   </div>            
                </div>
                <button className='SearchFlight' type='text'  onClick={formValidation} >Search Cabs</button>
                </form>
            </div>
      </div>
    </div>
     { showCabs && <div className="CabsAvailable">
           <div className="CabDistance">
            <div className="DistancePic">
            <LocationOnIcon/>
            </div>
            <div className="DistanceDesc">
                <h3 className='cabDist'>About 81 km</h3>
                <div className="Conditions">
                <div className='cabCondition'> <CheckIcon/> <div className="cabPay"> No pre-payment required</div></div>
                <div className='cabCondition'> <CheckIcon/> <div className="cabPay"></div>Free cancellation</div></div>
            </div>
            <div className="distText">  From {allEntry.currentLocation} To {allEntry.dropLocation}</div>
           </div>
           <div className="CabItems">
            <div className="CabName">
                    <div className="CabPic"> <AirportShuttleIcon/> </div>
                    <div className="CabNamedesc">
                        <h2>Mini</h2>
                        <div className="CabDetail">
                        <div className='CabDetailName'>Indica,Micra,ritz</div>
                        <div>Affordable AC cabs with free Wi-Fi</div></div>
                    </div>
            </div>
            <div className="CabPrice">
                <h2 className='cPriceBook' > ₹ 1846</h2>
                <button className="BookNowBtn"onClick={handelClick}>
                    Book Now!
                </button>
            </div>
           </div>
           <div className="CabItems">
            <div className="CabName">
                    <div className="CabPic"> <TwoWheelerIcon/> </div>
                    <div className="CabNamedesc">
                        <h2>Mini</h2>
                        <div className="CabDetail">
                        <div className='CabDetailName'>Indica,Micra,ritz</div>
                        <div>Affordable AC cabs with free Wi-Fi</div></div>
                    </div>
            </div>
            <div className="CabPrice">
                <h2 className='cPriceBook'> ₹ 1150</h2>
                <button className="BookNowBtn" onClick={handelClick}>
                    Book Now!
                </button>
            </div>
           </div>
           <div className="CabItems">
            <div className="CabName">
                    <div className="CabPic"> <ElectricRickshawIcon/> </div>
                    <div className="CabNamedesc">
                        <h2>Mini</h2>
                        <div className="CabDetail">
                        <div className='CabDetailName'>Indica,Micra,ritz</div>
                        <div>Affordable AC cabs with free Wi-Fi</div></div>
                    </div>
            </div>
            <div className="CabPrice">
                <h2 className='cPriceBook'> ₹ 1500</h2>
                <button className="BookNowBtn" onClick={handelClick}>
                    Book Now!
                </button>
            </div>
           </div>
           </div>  
}
   <ToastContainer/>
    </div>
  )
}

export default CarRentalBody
