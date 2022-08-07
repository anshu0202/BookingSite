import './train.css'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import MailList from '../../components/mailList/MailList'
import TrainBody from './TrainBody'

const Train = () => {
  return (
    <div>
      <Navbar/>
        <Header type='list'/>
        <TrainBody/>
        <MailList/>
        <div className="trainFooter">
        <Footer /></div>
    </div>
  )
}

export default Train
