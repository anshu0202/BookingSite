import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import PlaceIcon from '@mui/icons-material/Place';
// import img from './hotel_img.jpg'
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import photos from './imageList'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CancelIcon from '@mui/icons-material/Cancel';
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
const Hotel = () => {
   const [slideNumber,setSlideNumber]=useState(0);
   const [open,setOpen]=useState(false);
  const photos=[
    {
      src:"https://www.thegoldenhotel.com/wp-content/uploads/2018/10/executive-room-1.jpg",
      key:"1",
      id:"1"
    },
    {
      src:"https://queenshotelportsmouth.com/wp-content/uploads/2020/01/Superior-Double-1.jpg",
      key:"2",
      id:"2"
    },
    {
      src:"https://th.bing.com/th/id/OIP.Repvk7eCOQjtz4dh_kOPwAHaFj?pid=ImgDet&rs=1",
      key:"3",
      id:"3"
    },
    {
      src:"https://i0.wp.com/www.caltonproperties.com/wp-content/uploads/2018/12/Most-Expensive-Hotel-Room-In-Vegas.jpg?ssl=1",
      key:"4",
      id:"4"
    },
    {
      src:"https://wallup.net/wp-content/uploads/2017/11/17/190305-hotels-room.jpg",
      key:"5",
      id:"5"
    },
    {
      src:"https://www.corinthia.com/media/2154/corinthia-kartoum-executive-room.jpg",
      key:"6",
      id:"6"
    }
    // {
    //   src:"https://www.od-hotels.com/content/imgsxml/galerias/panel_gallery/1/odbarcelona-02-exterior-04469.jpg",
    //   key:"7",
    //   id:"7"
    // },
    // {
    //   src:"https://www.od-hotels.com/content/imgsxml/galerias/panel_gallery/1/odbarcelona-02-exterior-04469.jpg",
    //   key:"8",
    //   id:"8"
    // },
    // {
    //   src:"https://www.od-hotels.com/content/imgsxml/galerias/panel_gallery/1/odbarcelona-02-exterior-04469.jpg",
    //   key:"9",
    //   id:"8"
    // }

  ];

  //  function createImg(photo){
  //   return <img src={photo.src} alt='loading' key={photo.key}/>
  //  }

   const handleOpen= (i) =>{
      setSlideNumber(i);
      setOpen(true);
   }
   
   const paymentPage= useNavigate();
   const makePayment =() => {
       paymentPage("/PaymentPage");
   }
  const handleMove=(direction) =>{
    let newSlideNumber;
    console.log("current slide -> "+slideNumber);
    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5:slideNumber-1;
    }
    else {
      newSlideNumber = slideNumber === 5 ? 0:slideNumber+1;

    }
    setSlideNumber(newSlideNumber)
    console.log("new slide -> "+slideNumber);
  }
  const navigateHotel = useNavigate();
    const goHotel = () =>{
     navigateHotel("/hotels")
    }
    
    const [showNotify,setShowNotify]= useState(false);
    const notify=() => {
      if(showNotify===false){
      toast("Click on the Image for larger view!",{position:toast.POSITION.TOP_RIGHT})
      setShowNotify(true);
      }
    }

  return (
    <div>
       <Navbar/>
       <Header type="list"/>
       <div className="hotelContainer" onMouseOver={notify} >
       { open && <div className="slider">
       <CancelIcon className='close' onClick={()=> setOpen(false)}/>
       <ArrowBackIcon className='arrow' onClick={()=>handleMove("l")}/>
       <div className="sliderWrapper">
        <img src={photos[slideNumber].src} alt="" className='sliderImg'/>
       </div>
       <ArrowForwardIcon className='arrow' onClick={()=>handleMove("r")}/>
       
        </div>}
        {/* <button className='backHotel' onClick={goHotel}>Back</button> */}
        <div className="hotelWrapper" >
          <button className="bookNow" onClick={makePayment}>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <PlaceIcon/>
            <span>Ejkon St 125 New york</span>
          </div>
   <span className="hotelDistance">
    Excellent location 500m from center
   </span>
   <span className='hotelPriceHighlight'>Book a stay $114 at this property and get a free airport taxi</span>
   <div className='hotelImages'>
           {photos.map((photo,index) =>(
              <div className="hotelImgWrapper">
              <img onClick={() =>handleOpen (index)} src={photo.src} alt="loading" className='hotelImg' key={photo.key} id={photo.id} />            
             </div> 
           ))}        
           {/* {photos.map(createImg)} */}
   </div>
   <div className="hotelDetails">
    <div className="hotelDetailsText">
      <h1 className="hotelTitle">
        Stay in the heart of Krakow
      </h1>
      <p className="hotelDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit aut quod explicabo, sit rem eum error. Officia, eligendi similique, voluptatibus aut pariatur repellat quis doloribus hic fugiat perspiciatis exercitationem modi laborum, voluptates culpa numquam amet aperiam neque velit! Perspiciatis quo ea explicabo accusamus sit reiciendis, aliquid odio omnis commodi? Laudantium quaerat harum eligendi quos placeat suscipit optio reiciendis rem vel. Ctium illo molestias ducimus dignissimos earum! Neque quis architecto facilis rerum expedita!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae omnis voluptatem impedit quisquam debitis at doloribus expedita iure temporibus enim, dolorem blanditiis amet maiores quaerat ad tempora autem. Eligendi, exercitationem?
      </p>
    </div>
      <div className="hotelDetailsPrice">
        <h1>Perfect for a 9-night stay!</h1>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia, minus cum harum earum sit magni s eveniet obcaecati vitae corrupti esse.
        </span>
        <h2><b>$945</b> (9 nights) </h2>
        <button onClick={makePayment}>Reserve or Book Now!</button>
        </div>
   </div>
        </div>
        <MailList/>
        <Footer/>
       </div>
       <ToastContainer/>
    </div>
  )
}

export default Hotel;
