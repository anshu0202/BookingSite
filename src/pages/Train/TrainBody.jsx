import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import { useNavigate , Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './trainBody.css'
import { useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import TrainIcon from '@mui/icons-material/Train';
import StreamIcon from '@mui/icons-material/Stream';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import NearMeIcon from '@mui/icons-material/NearMe';
import CampaignIcon from '@mui/icons-material/Campaign';

// import {format} from "date-fns"
const TrainBody = () => {
   
    const navigatePassenger= useNavigate();

      const [selectedDate,setSelecteDate]=useState(new Date);    
  

   const handelChangeDate = (date)=> {   
      JSON.stringify(date)    
       setSelecteDate(date);
   }
   const [allEntry,setAllEntry] = useState ({
      City:"",
      dCity:"", 
      Date: selectedDate,
      class: "2S"
    })

    const handelSearch = () => {
      navigatePassenger("/TrainList",{state:{allEntry}})
   }

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

  const formValidation = (e) => {
   e.preventDefault();
   var flag=1
   if(allEntry.City ===""){
      toast.warning("Enter city name to travel from",{position:toast.POSITION.TOP_CENTER})
     flag=0
   }
   else if(allEntry.dCity ===""){
      toast.warning("Enter Destination city",{position:toast.POSITION.TOP_CENTER})
     flag=0
   }
 
   if(flag===1){
       console.log("Selected date is "+selectedDate)
   handelSearch();
   }
}
   
  return (
    <div className="fContainerTrain">
      <div className="Flightheader">
         <div className="TrainSearch">
            <h1>Book the best Train and have a safe journey!</h1>
            <div className="userInput">
                <form action="">
                <div className="InputItem">
                <span>From</span>     
                   <div className="EnterOption">
                   <DepartureBoardIcon/>
                    <input type="text" placeholder='City name, Station name, Station code' name='City' value={allEntry.City} onChange={handelChange} />
                   </div>
                </div>
                <div className="InputItem">
                <span>To</span>  
                   <div className="EnterOption">
                   <TransferWithinAStationIcon/>    
                    <input type="text" placeholder='City name, Station name, Station code' name='dCity' value={allEntry.dCity} onChange={handelChange} />
                   </div>
                </div>
                   <div className="InputItem">
                   <span>Boardind Date/ Travel Date</span>   
                   <div className="EnterOption Date">
                   <CalendarMonthSharpIcon className='calendar'/> 
                
                   {/* <DatePicker selected={selectedDate} id="dateTrain" dateFormat='dd/MM/yyyy' onChange={date => setSelecteDate(date )} minDate={new Date()}/>  */}
                   <DatePicker selected={selectedDate} id="dateTrain" dateFormat='dd/MM/yyyy' onChange={handelChangeDate} minDate={new Date()}/> 
                    
                   </div>
                   </div>
                   {/* <div className="InputItem">
                   <span>Time</span>   
                   <div className="EnterOption">
                   <CalendarMonthSharpIcon/>  
                    <input type="text" placeholder='Boardind Time/Time Date' />
                   </div>
                   </div> */}
                <div className="InputItem">
                <span>Select Class</span>
                   <div className="EnterOption">
                   <AccountCircleIcon/>
                 {/* <select id="inputState" class="form-select" style="width: 150%;">  */}
                 <select className='SelectOption'> 
              <option selected>2S</option>
              <option>SL</option>
              <option>3A</option>
              <option>2A</option>
              <option>1A</option>
              <option>CC</option>
            </select>
                   </div>            
                </div>
                <Link to={{ pathname:"/TrainNavbar" }}> </Link>
                <button className='SearchFlight serachT' onClick={formValidation}>Train Search </button>
                </form>
            </div>
            </div>
            <div className="trainDesc">
                 <h1 className="TrainInfo">Train Information Services</h1>
                 <div className="TrainInfoDetails">
                  <div className="trainInfo">
                     <div className="tIcon">
                  <CreditCardIcon/></div>
                     <div className="railwayInfo">
                        Check PNR Status
                     </div>
                  </div>
                  <div className="trainInfo">
                      <div className="tIcon">
                  <LocationOnIcon/> </div>
                     <div className="railwayInfo">
                        Live Train Status
                     </div>
                  </div>
                  <div className="trainInfo">
                     <div className="tIcon">
                  <EventAvailableIcon/></div>
                     <div className="railwayInfo">
                        See Train Schedule
                     </div>
                  </div>
                  <div className="trainInfo">
                     <div className="tIcon">
                  <LunchDiningIcon/></div>
                     <div className="railwayInfo">
                        Food in Trains
                     </div>
                  </div>
                  <div className="trainInfo">
                   <div className="tIcon"> 
                  <TrainIcon/></div>
                     <div className="railwayInfo">
                        Check Train Availability
                     </div>
                  </div>
                  <div className="trainInfo">
                     <div className="tIcon">
                  <StreamIcon/> </div>
                     <div className="railwayInfo">
                        Live Station
                     </div>
                  </div>
                 </div>
            </div>

            <div className="railAccouncements">
                  <div className="Announce">  
                  <div className="AnnounceIcon">
            {/* <NearMeIcon/> */}
            <CampaignIcon/>
            </div>
                  <h1>Accouncements</h1></div> 
                  <div className="AccounceContent">
                     <b>As per IRCTC</b>,
                     <span>if 2S reserved tickets are receiving PNR status A "Route class deleted/Booking not allowed as given class for the route is deleted," they may cancel such tickets to get full refund </span>
                  </div>
            </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default TrainBody
