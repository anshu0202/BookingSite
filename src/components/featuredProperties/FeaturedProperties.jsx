import './featuredProperties.css'
import pic from './hotel_feature.jpg'
const FeaturedProperties = () => {
  return (
    <div className='fp'>
        <div className="fpItem">
      <img src={pic} alt="" className="fpImg" />
      <span className='fpName'>Aparthotel Stare Miasto</span>
      <span className='fpCity'>Madrid</span>
      <span className='fpPrice'>Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
      </div> 
      <div className="fpItem">
      <img src={pic} alt="" className="fpImg" />
      <span className='fpName'>Aparthotel Stare Miasto</span>
      <span className='fpCity'>Madrid</span>
      <span className='fpPrice'>Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
      <img src={pic} alt="" className="fpImg" />
      <span className='fpName'>Aparthotel Stare Miasto</span>
      <span className='fpCity'>Madrid</span>
      <span className='fpPrice'>Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
      <img src={pic} alt="" className="fpImg" />
      <span className='fpName'>Aparthotel Stare Miasto</span>
      <span className='fpCity'>Madrid</span>
      <span className='fpPrice'>Starting from $120</span>
      <div className="fpRating">
        <button>8.9</button>
        <span>Excellent</span>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProperties
