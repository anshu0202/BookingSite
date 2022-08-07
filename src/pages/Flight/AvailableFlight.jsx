import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  './AvailableFlight.css'
import SpiceJet from './spicejet.png'
import Emirates from './emirates.jpg'
import Indigo from './Indigo.png'
import AirIndia from './AirIndia.png'
const AvailableFlight = (props) => {
  
   
  const [btnContentS,setBtnContentS]=useState("View Prices");
    const [showPriceS,setShowPriceS] = useState(false);
   const ViewPriceS = () => {
         if(showPriceS===true){
          console.log("on click value is true ")
          setBtnContentS("View Prices")
          setShowPriceS(false);
          
         }
         else if(showPriceS===false){
          setBtnContentS("Hide Prices")
          setShowPriceS(true);
         }
   }

   const [btnContentI,setBtnContentI]=useState("View Prices");
   const [showPriceI,setShowPriceI] = useState(false);
  const ViewPriceI = () => {
        if(showPriceI===true){
         console.log("on click value is true ")
         setBtnContentI("View Prices")
         setShowPriceI(false);
         
        }
        else if(showPriceI===false){
         setBtnContentI("Hide Prices")
         setShowPriceI(true);
        }
  }

  const [btnContentA,setBtnContentA]=useState("View Prices");
  const [showPriceA,setShowPriceA] = useState(false);
 const ViewPriceA = () => {
       if(showPriceA===true){
        console.log("on click value is true ")
        setBtnContentA("View Prices")
        setShowPriceA(false);
        
       }
       else if(showPriceA===false){
        setBtnContentA("Hide Prices")
        setShowPriceA(true);
       }
 }
 const [btnContentE,setBtnContentE]=useState("View Prices");
 const [showPriceE,setShowPriceE] = useState(false);
const ViewPriceE = () => {
      if(showPriceE===true){
       console.log("on click value is true ")
       setBtnContentE("View Prices")
       setShowPriceE(false);
       
      }
      else if(showPriceE===false){
       setBtnContentE("Hide Prices")
       setShowPriceE(true);
      }
}


    const navigateBook =useNavigate()
   const handelBook = () => {
    navigateBook("/PassengerDetails")
   }
  return (
    <>
      <div className="FlightContent">
        <div className="FlightDetails">
            <div className="FlightLogo">
                <img src={SpiceJet} alt="loading" />
                <div className='FlightName'>Spice Jet</div>
            </div>
            <div className="FDuration">
                              <div className="DepartTime">
                                  <div className="Dtime">
                                    5:40 PM, Wed
                                  </div>
                                  <div className="ToStation">
                                    {props.City}
                                  </div>
                              </div>
                              <div className="JourneyDuration">
                              <div className="line">
                                <hr /></div>
                               ---- 23hrs 20 mins ----
                                <div className="line">
                                <hr /></div>
                              </div>
                              <div className="ArriveTime">
                              <div className="Dtime">
                                    5:00 PM, Thu
                                  </div>
                                  <div className="ToStation">
                                  {props.dCity}
                                  </div>
                              </div>
                            </div>
                            <div className="PriceControl">
                                <div className="AED">AED 283</div>
                                <button className='AEDBtn' onClick={ViewPriceS}>{btnContentS}</button>
                            </div>
        </div>
        <div className="FlightDiscount">
            Get AED  instant discount and AED 15 wallet cashback, Use code "INDFLY"
        </div>
        { showPriceS &&
        <div className="FlightBook">
           <div className="FlightBookItems">
               <div className="FBookItem">
                <div className="FBkey">Fares</div>
                <div className="FBDesc">
                    <h3>Spicesaver</h3>
                    <span>Fare offered by airline</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cabin Bag</div>
                <div className="FBDesc">
                    <span> 7 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Check-In</div>
                <div className="FBDesc">
                    <span>15 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cancellation</div>
                <div className="FBDesc">
                    <span>Cancellation fee starting AED 168 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Date Change</div>
                <div className="FBDesc">
                    <span>Date Change fee starting AED 156 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Seat</div>
                <div className="FBDesc">
                    <span>Free seats available</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey"></div>
                <div className="FBDesc FBookNow">
                    <div className='BookAED'>AED 283</div>
                    <button className='BookNowBtn Fbook' onClick={handelBook}>Book Now</button>
                </div>
               </div>
           </div>
        </div>
        }
      </div>
      {/* ************************************************ */}
      <div className="FlightContent">
        <div className="FlightDetails">
            <div className="FlightLogo">
                <img src={Indigo} alt="loading" />
                <div className='FlightName'>Indigo</div>
            </div>
            <div className="FDuration">
                              <div className="DepartTime">
                                  <div className="Dtime">
                                    5:40 PM, Wed
                                  </div>
                                  <div className="ToStation">
                                  {props.City}
                                  </div>
                              </div>
                              <div className="JourneyDuration">
                              <div className="line">
                                <hr /></div>
                               ---- 23hrs 20 mins ----
                                <div className="line">
                                <hr /></div>
                              </div>
                              <div className="ArriveTime">
                              <div className="Dtime">
                                    5:00 PM, Thu
                                  </div>
                                  <div className="ToStation">
                                  {props.dCity}
                                  </div>
                              </div>
                            </div>
                            <div className="PriceControl">
                                <div className="AED">AED 283</div>
                                <button className='AEDBtn' onClick={ViewPriceI}>{btnContentI}</button>
                            </div>
        </div>
        <div className="FlightDiscount">
            Get AED  instant discount and AED 15 wallet cashback, Use code "INDFLY"
        </div>
        { showPriceI &&
        <div className="FlightBook">
           <div className="FlightBookItems">
               <div className="FBookItem">
                <div className="FBkey">Fares</div>
                <div className="FBDesc">
                    <h3>Spicesaver</h3>
                    <span>Fare offered by airline</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cabin Bag</div>
                <div className="FBDesc">
                    <span> 7 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Check-In</div>
                <div className="FBDesc">
                    <span>15 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cancellation</div>
                <div className="FBDesc">
                    <span>Cancellation fee starting AED 168 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Date Change</div>
                <div className="FBDesc">
                    <span>Date Change fee starting AED 156 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Seat</div>
                <div className="FBDesc">
                    <span>Free seats available</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey"></div>
                <div className="FBDesc FBookNow">
                    <div className='BookAED'>AED 283</div>
                    <button className='BookNowBtn' onClick={handelBook}>Book Now</button>
                </div>
               </div>
           </div>
        </div>
        }
      </div>

      {/* ************************************************************** */}
      <div className="FlightContent">
        <div className="FlightDetails">
            <div className="FlightLogo">
                <img src={AirIndia} alt="loading" />
                <div className='FlightName'>Air India</div>
            </div>
            <div className="FDuration">
                              <div className="DepartTime">
                                  <div className="Dtime">
                                    5:40 PM, Wed
                                  </div>
                                  <div className="ToStation">
                                  {props.City}
                                  </div>
                              </div>
                              <div className="JourneyDuration">
                              <div className="line">
                                <hr /></div>
                               ---- 23hrs 20 mins ----
                                <div className="line">
                                <hr /></div>
                              </div>
                              <div className="ArriveTime">
                              <div className="Dtime">
                                    5:00 PM, Thu
                                  </div>
                                  <div className="ToStation">
                                  {props.dCity}
                                  </div>
                              </div>
                            </div>
                            <div className="PriceControl">
                                <div className="AED">AED 283</div>
                                <button className='AEDBtn' onClick={ViewPriceA}>{btnContentA}</button>
                            </div>
        </div>
        <div className="FlightDiscount">
            Get AED  instant discount and AED 15 wallet cashback, Use code "INDFLY"
        </div>
        { showPriceA &&
        <div className="FlightBook">
           <div className="FlightBookItems">
               <div className="FBookItem">
                <div className="FBkey">Fares</div>
                <div className="FBDesc">
                    <h3>Spicesaver</h3>
                    <span>Fare offered by airline</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cabin Bag</div>
                <div className="FBDesc">
                    <span> 7 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Check-In</div>
                <div className="FBDesc">
                    <span>15 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cancellation</div>
                <div className="FBDesc">
                    <span>Cancellation fee starting AED 168 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Date Change</div>
                <div className="FBDesc">
                    <span>Date Change fee starting AED 156 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Seat</div>
                <div className="FBDesc">
                    <span>Free seats available</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey"></div>
                <div className="FBDesc FBookNow">
                    <div className='BookAED'>AED 283</div>
                    <button className='BookNowBtn' onClick={handelBook}>Book Now</button>
                </div>
               </div>
           </div>
        </div>
        }
      </div>
      {/* ******************************************* */}
      <div className="FlightContent">
        <div className="FlightDetails">
            <div className="FlightLogo">
                <img src={Emirates} alt="loading" />
                <div className='FlightName'>Emirates</div>
            </div>
            <div className="FDuration">
                              <div className="DepartTime">
                                  <div className="Dtime">
                                    5:40 PM, Wed
                                  </div>
                                  <div className="ToStation">
                                  {props.City}
                                  </div>
                              </div>
                              <div className="JourneyDuration">
                              <div className="line">
                                <hr /></div>
                               ---- 23hrs 20 mins ----
                                <div className="line">
                                <hr /></div>
                              </div>
                              <div className="ArriveTime">
                              <div className="Dtime">
                                    5:00 PM, Thu
                                  </div>
                                  <div className="ToStation">
                                  {props.dCity}
                                  </div>
                              </div>
                            </div>
                            <div className="PriceControl">
                                <div className="AED">AED 283</div>
                                <button className='AEDBtn' onClick={ViewPriceE}>{btnContentE}</button>
                            </div>
        </div>
        <div className="FlightDiscount">
            Get AED  instant discount and AED 15 wallet cashback, Use code "INDFLY"
        </div>
        { showPriceE &&
        <div className="FlightBook">
           <div className="FlightBookItems">
               <div className="FBookItem">
                <div className="FBkey">Fares</div>
                <div className="FBDesc">
                    <h3>Spicesaver</h3>
                    <span>Fare offered by airline</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cabin Bag</div>
                <div className="FBDesc">
                    <span> 7 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Check-In</div>
                <div className="FBDesc">
                    <span>15 Kgs</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Cancellation</div>
                <div className="FBDesc">
                    <span>Cancellation fee starting AED 168 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Date Change</div>
                <div className="FBDesc">
                    <span>Date Change fee starting AED 156 upto 2hrs before departure</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey">Seat</div>
                <div className="FBDesc">
                    <span>Free seats available</span>
                </div>
               </div>
               <div className="FBookItem">
                <div className="FBkey"></div>
                <div className="FBDesc FBookNow">
                    <div className='BookAED'>AED 283</div>
                    <button className='BookNowBtn' onClick={handelBook}>Book Now</button>
                </div>
               </div>
           </div>
        </div>
        }
      </div>
    </>
  )
}

export default AvailableFlight
