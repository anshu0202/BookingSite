import React,{useState} from 'react'
import { useNavigate ,useLocation} from 'react-router-dom'
import './AvailableTrain.css'
const AvailableTrain = (props) => {


    const navigateBookTicket= useNavigate();
     const bookTicket = () => {
      navigateBookTicket("/PassengerDetails");
     }
    
 
  return (
    <>
    <div className='trainList'>
           <div className="TListItem">
            <div className="TListItemHead">
                            <div className="TrainName">
                                  <h1 className="TName">Poorva Express</h1>
                                  <div className="Tnum">
                                    <div className="TNumber">#12304</div>
                                      <div className="TDeparts">Departs on: S <span className='TRunDay'> M </span> T <span className='TRunDay'>W </span>F  <span className='TRunDay'>S </span></div>
                                  </div>
                            </div>
                            <div className="TDuration">
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
            </div>
            <div className="TListItemContent">
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL  <div className="tatkal">Tatkal</div></div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
            </div>
           </div> 
    </div>

    {/* ************************************************* */}
    <div className='trainList'>
           <div className="TListItem">
            <div className="TListItemHead">
                            <div className="TrainName">
                                  <h1 className="TName">Poorva Express</h1>
                                  <div className="Tnum">
                                    <div className="TNumber">#12304</div>
                                      <div className="TDeparts">Departs on: S <span className='TRunDay'> M </span> T <span className='TRunDay'>W </span>F  <span className='TRunDay'>S </span></div>
                                  </div>
                            </div>
                            <div className="TDuration">
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
            </div>
            <div className="TListItemContent">
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL  <div className="tatkal">Tatkal</div></div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
            </div>
           </div> 
    </div>

    {/* *************************************************** */}

    <div className='trainList'>
           <div className="TListItem">
            <div className="TListItemHead">
                            <div className="TrainName">
                                  <h1 className="TName">Poorva Express</h1>
                                  <div className="Tnum">
                                    <div className="TNumber">#12304</div>
                                      <div className="TDeparts">Departs on: S <span className='TRunDay'> M </span> T <span className='TRunDay'>W </span>F  <span className='TRunDay'>S </span></div>
                                  </div>
                            </div>
                            <div className="TDuration">
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
            </div>
            <div className="TListItemContent">
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL  <span className="tatkal">Tatkal</span></div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" onClick={bookTicket}>
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
              <div className="TListBox" >
                <div className="TPrice">
                  <div className="TCoach">SL</div>
                  <div className="TCost">₹ 845</div>
                </div>
                <span className="TQuota">TQWL 41</span>
                  <div className="Ticketcancel">
                    <div className="TCancel">Free Cancellation</div>
                    <div className="UpdateTime">Updated 1 hr ago</div>
                  </div>
                  <button className='BookNowBtnT' onClick={bookTicket}>Book Now</button>
              </div>
            </div>
           </div> 
    </div>
    </>
  )
}

export default AvailableTrain
