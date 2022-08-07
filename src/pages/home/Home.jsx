import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/feature/featured';
import PropertyList from '../../components/propertList/PropertyList';
import "./home.css";
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle2">Homes guests love</h1>
        <FeaturedProperties/>
        
      </div>
      <div className="Media">
        <MailList/>
        <div className="MediaFooter">
        <Footer/></div>
        </div>
      
    </div>
  )
}

export default Home;
