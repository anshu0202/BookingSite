import React from 'react'
import './featured.css'
import reno from './reno.jpg'
import dublin from './dublin.jpeg'
import austin from './austin.jpg'
const featured = () => {
  return (
    <div  className='featured'>
      <div className="featuredItem">
        <img src={dublin} alt="dublin" className='featuredImg'/>
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={austin} alt="austin" className='featuredImg austin'/>
        <div className="featuredTitles">
            <h1>Austin</h1>
            <h2>532 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={reno} alt="reno" className='featuredImg reno'/>
        <div className="featuredTitles">
            <h1>Reno</h1>
            <h2>533 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default featured
