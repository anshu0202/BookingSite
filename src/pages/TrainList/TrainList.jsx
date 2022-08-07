import './trainList.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import AvailableTrain from './AvailableTrain'
import NavbarTrainList from './NavbarTrainList'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
const TrainList = () => {
   const location = useLocation();
    //  const [allEntry,setAlltEntry] = useState({
    //     City:location.state.City,
    //     dCity:location.state.dCity,
    //     date:location.state.selectedDate
    //  })
     const [City,setCity] = useState(location.state.allEntry.City)
     const [Date,setDate] = useState(location.state.allEntry.Date)
     const [dCity,setdCity]=useState(location.state.allEntry.dCity);
    //  const [options,setOptions] = useState(location.state.options)
    //  console.log("All entry are "+allEntry);

     console.log("city is ",City)
     console.log("dcity is ",dCity)
     console.log("date is --> ",Date)

  return (
    <div >
        <Header type="list"/>
        {/* <NavbarTrainList  City={City} dCity={dCity} Date={date}/> */}
        <NavbarTrainList  City={City} dCity={dCity} Date={Date}/>
        <AvailableTrain  City={City} dCity={dCity} Date={Date}  />
        <div className="TLMail">
        <MailList/>
        </div>
        <div className="TLFooter">
        <Footer />
        </div>
    </div>
  )
}

export default TrainList
