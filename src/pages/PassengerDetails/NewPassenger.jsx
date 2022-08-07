import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import './newPassenger.css'
function NewPassenger  (props)  {
    
    function handleClick(){
        props.onDelete(props.id)
    }
   console.log("gender is "+props.gender);

  return (
    <div className='FilledDetailsNew'>
        <div className="showDetails">
       <div className='filledDetail' >Passenger Name: <div className="PDShow">{props.PassengerName} </div></div>
        <div className='filledDetail'>Gender:  <div className="PDShow"> {props.gender} </div> </div>
        <div className='filledDetail'>Mobile no.:  <div className="PDShow">{props.mobile}</div> </div>
        <div className='filledDetail'>Id Proof: <div className="PDShow">{props.aadhar}</div> </div>
        <button className="editBtnn" onClick={handleClick}>
           <DeleteIcon/>
        </button>
        </div>
    </div>

  )
}

export default NewPassenger

// import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';

// function Node(props){
//     function handleClick(){
//         props.onDelete(props.id)
//     }
//     return <div className="note">
//         <h1>{props.title}</h1>
//         <p>{props.content}</p>
//         <button className="delbtnn" onClick={handleClick}>
//           {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
//           {/* <FontAwesomeIcon icon={faXmark}/> */}
//            <DeleteIcon/>
//         </button>
//     </div>
// } 

// export default Node; 