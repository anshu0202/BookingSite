import logo from './logo.svg';
import './App.css';
import {
  // HashRouter as Router,
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login_page/loginPage';
import CreatePage from './pages/accountCreate/NewAccount'
import MakePayment from './pages/MakePayment/MakePayment'
import Flight from './pages/Flight/Flight'
import Train from './pages/Train/Train';
import PassengerDetails from './pages/PassengerDetails/PassengerDetails';
import TrainList from './pages/TrainList/TrainList';
import FlightList from './pages/Flight/FlightList';
import CarRental from './pages/CarRental/CarRental';
import NavbarTrainList from './pages/TrainList/NavbarTrainList';
function App() {
  return (
       <BrowserRouter>
       <Routes>
       <Route path="/"  element={<Login/>} />
       <Route path="/createPage"  element={<CreatePage/>} />
        <Route path="/home"  element={<Home/>} />
        <Route path="/hotels"  element={<List/>} />
        <Route path="/hotels/:id"  element={<Hotel/>} />
        <Route path="/PaymentPage"  element={<MakePayment/>} />
        <Route path="/Flight"  element={<Flight/>} />
        <Route path="/Train"  element={<Train/>} />
        <Route path="/PassengerDetails"  element={<PassengerDetails/>} />
        <Route path="/TrainList"  element={<TrainList/>} />
        <Route path="/FlightList"  element={<FlightList/>} />
        <Route path="/CarRental"  element={<CarRental/>} />
        <Route path="/TrainNavbar"  element={<NavbarTrainList/>} />
       </Routes>
       </BrowserRouter>
  );
}

export default App;
