import './searchItem.css'
import img from './searchImg.jpg'
import { useNavigate } from 'react-router-dom';
const SearchItem = () => {

  const navigate = useNavigate();
  const seeAvailability =() => {
      navigate("/hotels/ss");
  }

  return (
    <div className='searchItem'>
      <img src={img} alt="loading" className='siImg' />
      <div className="siDesc">
        <h1 className='siTitle'>Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className='siTaxiOp'>Free airport taxi</span>
        <span className="siSubTitle">
            Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
            Entire studio + 1 bathroom 21m sq full bed
        </span>
        <span className='siCancelOp'>Free cancellation</span>
        <span className='siCancelOpSubtitle'>You can cancel later,so lock in this great price today! </span>
      </div>
      <div className="siDetails">
      <div className="siRating">
        <span>Excellent</span>
        <button>9.2</button>
      </div>
      <div className="siDetailText">
        <span className='siPrice'>$1244</span>
        <span className='siTaxOp1'>Includes taxes and fees</span>
        <button  className='siCheckButton' onClick={seeAvailability}>See availability</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
