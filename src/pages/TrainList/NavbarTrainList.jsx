import './NavbarTrainList.css'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
const NavbarTrainList = (props) => {
     
  return (
    <div className="NTContainer">
        <div className="NTBody">
         <div className="NTItems">
            <div className="NTItem">
                 <span className='SNTItem'>From City </span>
                 <div>{props.City}</div>
            </div>
            <div className="NTItem NTIcon">
                 <span className='SNTItem'> <DirectionsRunIcon/> </span>
                 <div> <CompareArrowsIcon/></div>
            </div>
            <div className="NTItem">
                 <span className='SNTItem'>To City </span>
                 <div>{props.dCity}</div>
            </div>
            <div className="NTItem">
                 <span className='SNTItem'>Travel Date </span>
                 <div>{JSON.stringify(props.Date)}</div>
            </div>
            <div className="NTItem">
                 <span className='SNTItem'>Class </span>
                 <div>All Classes</div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default NavbarTrainList
