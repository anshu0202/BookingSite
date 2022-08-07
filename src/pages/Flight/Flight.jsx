import './flight.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import BodyFlight from './BodyFlight'
const Flight = () => {
  return (
    <div>
        <Navbar/>
        <Header type='list'/>
        <BodyFlight/>
        <div className="FlightMail">
        <MailList/></div>
        <div className="FlightFooter">
        <Footer />
        </div>
    </div>
  )
}

export default Flight

