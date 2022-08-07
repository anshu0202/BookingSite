import React, { useState } from 'react'
import './header.css';
// import List from '../../pages/list/List';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import CarRentalIcon from '@mui/icons-material/CarRental';
import TrainIcon from '@mui/icons-material/Train';
// import LocalTaxiSharpIcon from '@mui/icons-material/LocalTaxiSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import WcSharpIcon from '@mui/icons-material/WcSharp';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns"
import { useNavigate } from 'react-router-dom';
import { color } from '@mui/system';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Header = ({type}) => {

    const [openDate,setOpenDate]=useState(false);
    const [date,setDate]=useState([
        {
            startDate: new Date(),
            endDate:new Date(),
            key:'selection'
        }
    ]);
    const [openOption,setOpenOption]=useState(false);
    const [options,setOptions]=useState({
        adult:0,
        children:0,
        room:0
    });
    const handleOption = (name,operation) =>{
        setOptions(prev => {
            return { ...prev, [name]:operation === "i"? options[name]+1:options[name]-1}
        })
    }
    

    // ******************************
    //iska use kisi v page prr jaane k liye hota h
    const navigate = useNavigate()
    // yaha prr state v pass kr skte h
    const [destination,setDestination]=useState("");
    const handelSearch =() => {
        var flag=1;
        if(destination === ""){
            flag=0;
            toast.error("Destination is Missing",{position: toast.POSITION.TOP_CENTER})
        }
       else if(options.adult ===0){
            flag=0;
            toast.error("Number of Person is missing",{position: toast.POSITION.TOP_CENTER})

        }
       else if(options.room ===0){
            flag=0;
            toast.error("Number of room is missing",{position: toast.POSITION.TOP_CENTER})
        }
       else if(flag===1){
            navigate("/hotels",{state:{destination,date,options}})
        }
        
    }
    // **************************************
//    const [showModeH,setShowModeH] = useState(false)
//    const [showModeF,setShowModeF] = useState(false)
//    const [showModeC,setShowModeC] = useState(false)
//    const [showModeT,setShowModeT] = useState(false)

//    function handelActive (mode)  {
//     setShowModeH(false);
//     setShowModeF(false);
//     setShowModeC(false);
//     setShowModeT(false);
//     console.log("mode is "+mode)
//         if(mode==="Hotel"){
//             console.log("mode is hotel")
           
//         }
//         else if(mode==="Flight"){
//             console.log("mode is aeroplane")
//             setShowModeF(true)
//         }
//         else if(mode==="CarRental"){
//             setShowModeC(true)
//         }
//         else if(mode==="Train"){
//             setShowModeT(true)
//         }
//    }
 

   const navigateFlight= useNavigate();
    function goFlight  () {
        // console.log('hi fro f')
        // handelActive("Flight")
        // setShowModeF(true);
    //     setShowModeH(false);
    
    // setShowModeC(false);
    // setShowModeT(false);
      navigateFlight("/Flight")
    }
    const navigateTrain = useNavigate();
    const goTrain = () => {
        // handelActive("Train")
        // setShowModeT(true);
        navigateTrain("/Train");
    }
    const navigateHotel = useNavigate();
    const goHotel = () => {
        // handelActive("Hotel")
        // setShowModeH(true)
        navigateHotel("/home");
    }

    const navigateCarRental = useNavigate();
    const goCarRental = () => {
        // handelActive("CarRental")
        navigateCarRental("/CarRental");
    }

   const handelMouseLeave = () => {
    setOpenOption(false);
    setOpenDate(false);
   }
  

  return (
    <div className='header'>
        <div className={type === "list"? "headerContainer listMode" : "headerContainer"}>
      <div className="headerList">
       
        {/* <div className="headerListItem active" style={{backgroundColor: showModeH && "grey"}}  onClick={goHotel}  > */}
        <div className="headerListItem active"   onClick={goHotel}  >
            <HotelIcon/>
            <span> Stays</span>
        </div>
        
        <div className="headerListItem active"  onClick={goFlight} >
        {/* <div className="headerListItem active" style={{backgroundColor: showModeF  && "grey"}} onClick={goFlight} > */}
            <FlightIcon />
            <span> Flights</span>       
        </div>
       
        {/* <div className="headerListItem active" style={{backgroundColor: showModeC && "grey"}} onClick={goCarRental} > */}
        <div className="headerListItem active" onClick={goCarRental} >
            <CarRentalIcon/>
            <span> Cars rentals</span>      
        </div>
        
        {/* <div className="headerListItem active" style={{backgroundColor: showModeT && "grey"}} onClick={goTrain} > */}
        <div className="headerListItem active"  onClick={goTrain} >
            <TrainIcon/>
            <span> Train</span>        
        </div>
      </div>
      {    type!=="list" &&  <> <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
        <p className="headerDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione id magnam, autem laboriosam, consequuntur, facere nemo natus ex odio fugit numquam animi provident pariatur. Quo error voluptates quibusdam recusandae reiciendis incidunt quam, temporibus assumenda.
        </p>
        {/* <button className="headerBtn">Sign In/ Register</button> */}
        <div className="headerSearch"  >
            <div className="headerSearchItem" >
            <HotelIcon />
            <input type="text" placeholder='Where are you going?' value={destination} className='headerSearchInput' onChange={ e =>setDestination(e.target.value)} required/>
            </div>
            <div className="headerSearchItem">
            <CalendarMonthSharpIcon/>
           <span className='headerSearchText'  onClick={()=> setOpenDate(!openDate)} >{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")} `}</span>
           {openDate && <DateRange 
           editableDateInputs={true}
           onChange={item => setDate([item.selection])}
           moveRangeOnFirstSelection={false}
           ranges={date} 
           className="date" minDate={new Date()}
           />}
            </div>
            <div className="headerSearchItem">
            <WcSharpIcon />
            <span onClick={() =>setOpenOption(true)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
            { openOption && <div className="options" onMouseLeave={handelMouseLeave} >
                <div className="optionsItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCount">
                    <button className='optionCounterButton' disabled={options.adult<1} onClick={ () => handleOption("adult","d")}>-</button>
                    <span className='optionCounterNumber'>{options.adult}</span>
                    <button className='optionCounterButton' onClick={ () => handleOption("adult","i")}>+</button>
                    </div>
                </div>
                <div className="optionsItem">
                    <span className="optionText">Children</span>
                    <div className="optionCount">
                    <button className='optionCounterButton' disabled={options.children<1} onClick={ () => handleOption("children","d")}>-</button>
                    <span className='optionCounterNumber'>{options.children}</span>
                    <button className='optionCounterButton' onClick={ () => handleOption("children","i")}>+</button>
                    </div>
                </div>
                <div className="optionsItem">
                    <span className="optionText">room</span>
                    <div className="optionCount">
                    <button className='optionCounterButton' disabled={options.room<1} onClick={ () => handleOption("room","d")}>-</button>
                    <span className='optionCounterNumber'>{options.room}</span>
                    <button className='optionCounterButton' onClick={ () => handleOption("room","i")}>+</button>
                    </div>
                </div>
            </div>
}
            </div>
            <div className="headerSearchItem">
            <button className='headerBtn' onClick={handelSearch}>Search</button>
            </div>
        </div>
        </>
}
      </div>
      <ToastContainer/>
    </div>
  );
}
export default Header
