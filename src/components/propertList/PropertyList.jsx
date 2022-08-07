import React from 'react'
import './propertyList.css'
import hotel from './hotel.jpg'
import airport from './airport.jpg'
import beach from './beach.jpg'
import bed from './bed.jpg'
import villa from './vills.jpg'
import resort from './resort.jpg'
const propertyList = () => {
  return (
    <div className='pList'>
      <div className="pListItem">
        <img src={hotel} alt=""  className='pListImg'/>
        <div className="pListTitle">
            <h1>Hotels</h1>
            <h2>2340 hotels</h2>
        </div> 
      </div>
      <div className="pListItem">
        <img src={bed} alt="" className='pListImg' />
        <div className="pListTitle">
            <h1>Resorts</h1>
            <h2>2333 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={airport} alt="" className='pListImg' />
        <div className="pListTitle">
            <h1>Apartments</h1>
            <h2>2012 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={beach} alt="" className='pListImg' />
        <div className="pListTitle">
            <h1>Cabins</h1>
            <h2>2230 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={villa} alt=""  className='pListImg'/>
        <div className="pListTitle">
            <h1>Villas</h1>
            <h2>1420 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={resort} alt="" className='pListImg' />
        <div className="pListTitle">
            <h1>Resorts</h1>
            <h2>2074 Hotels</h2>
        </div>
      </div>
    </div>
  )
}

export default propertyList;
