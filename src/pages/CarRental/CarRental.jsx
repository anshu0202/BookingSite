import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './CarRental.css'
import CarRentalBody from './CarRentalBody'
const CarRental = () => {
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <CarRentalBody/>
      <MailList/>
      <div className="CarRentalFooter">
      <Footer/></div>
    </div>
  )
}

export default CarRental
