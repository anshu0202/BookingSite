import  './sideBar.css'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SupportIcon from '@mui/icons-material/Support';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
const Sidebar = () => {
  return (
    <div className='sideBarContent'>
      {/* <div className="sideBarItemSBars"> */}
        <div className="ItemSBar">
        <HomeIcon/>
        <span>Home</span>
        </div>
        <div className="ItemSBar">
        <InfoIcon/>
        <span>About</span>
        </div>
        <div className="ItemSBar">
        <ConnectWithoutContactIcon/>
        <span>Contact Us</span>
        </div>
        <div className="ItemSBar">
        <RssFeedIcon/>
        <span>Blog</span>
        </div>
        <div className="ItemSBar">
        <SupportIcon/>
        <span>support</span>
        </div>
      </div>
    
    // </div>
  )
}

export default Sidebar
