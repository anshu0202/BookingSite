import './FlightList.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Availableflight from './AvailableFlight'
import NavbarFlightList from './NavbarFlightList'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
const FlightList = () => {
  const location = useLocation();
  const [City,setCity] = useState(location.state.allEntry.City)
  const [Date,setDate] = useState(location.state.allEntry.Date)
  const [dCity,setdCity]=useState(location.state.allEntry.dCity);


  console.log("city is ",City)
     console.log("dcity is ",dCity)
  return (
    <div>
       <Header type="list"/>
        <NavbarFlightList City={City} dCity={dCity}   />
        {/* <NavbarTrainList/> */}
        <Availableflight City={City} dCity={dCity} />
        <div className="TLMail">
        <MailList/>
        </div>
        <div className="TLFooter">
        <Footer />
        </div>
    </div>
  )
}

export default FlightList
