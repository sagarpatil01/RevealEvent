
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/Login/LoginComp';
import HomeComp from './components/Home/HomeComp';

import AdminHome from './components/Admin/AdminHomeComp';
import Header from './components/Header/HeaderComp';
import Footer from './components/Footer/FooterComp';
import RegForm from './components/Login/RegisterComp';
import LogoutComp from './components/Admin/LogoutComp';

import CustomerHome from './components/Customer/CustomerHome';
import OrganizerHome from './components/Organizer/OrganizerHome';
import ArtistHome from './components/Artist/ArtistHome';

import EventComp from './components/Event/EventComp';
import EventCat from './components/Event/EventCatComp';
import EventSingle from './components/Event/EventSingleComp';
import Payment from './components/Event/PaymentComp';
import Success from './components/Event/SuccessPageComp';
import StandupComp from './components/Event_category/StandupComp';
import DramaComp from './components/Event_category/DramaComp';
import MusicComp from './components/Event_category/MusicComp';
import DanceComp from './components/Event_category/DanceComp';
import PoetryComp from './components/Event_category/PoetryComp';
import ArtistRequest from './components/Artist/ArtistRequestComp';
import EventForm from './components/Organizer/OrgAddEventComp';
import ViewArtists from './components/Organizer/OrgViewArtists';
import AddEveSuccess from './components/Organizer/OrgAddEveSuccess';
import SendRequest from './components/Organizer/OrgSendRequest';
import ApproveRequest from './components/Artist/ArtistReqApproved';
import LoginInfo from './components/Admin/logininfo';
// import Logininfo from './components/Admin/logininfo';
import ArtistInfo from './components/Admin/ArtistInfo';
import OrganizerInfo from './components/Admin/OrganizerInfo';
import CustomerLogin from './components/Admin/CustomerLogin';
import EventInfo from './components/Admin/EventInfo';
import About from './components/Home/AboutComp';
import CustProfile from './components/Customer/CustProfile';
import Approvedreq from './components/Organizer/OrgApprovedReq';
import DeclineRequest from './components/Artist/ArtistDeclineComp';


function App() {
  
  
  
  return (

    
    
    <div className="App">
     
       
       
       <Header/> 
        <Routes>
            
            <Route path="/" element={<HomeComp/>}></Route>
            <Route path="login" element={<LoginComp/>}></Route> 
            <Route path="register" element={<RegForm/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/logout" element={<LogoutComp/>}></Route>

            <Route path="admin_home" element={<AdminHome/>}></Route>
            <Route path="customer_home" element={<EventComp/>}></Route>
            <Route path="organizer_home" element={<OrganizerHome/>}></Route>
            <Route path="artist_home" element={<ArtistHome/>}></Route>

            <Route path="/categories" element={<EventCat/>}></Route>
            <Route path="/singleevent/:id" element={<EventSingle/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/success" element={<Success/>}></Route>
            <Route path="/standup" element={<StandupComp/>}></Route>
            <Route path="/drama" element={<DramaComp/>}></Route>
            <Route path="/music" element={<MusicComp/>}></Route>
            <Route path="/dance" element={<DanceComp/>}></Route>
            <Route path="/poetry" element={<PoetryComp/>}></Route>
            <Route path="/profilecust" element={<CustProfile/>}></Route>


            <Route path="/view_requests" element={<ArtistRequest/>}></Route>
            <Route path="/requestapproved" element={<ApproveRequest/>}></Route>
            <Route path="/requestdeclined" element={<DeclineRequest/>}></Route>

            <Route path="/addevent" element={<EventForm/>}></Route>
            <Route path="/viewartists" element={<ViewArtists/>}></Route>
            <Route path="/addeventsuccess" element={<AddEveSuccess/>}></Route>
            <Route path="/sendrequest" element={<SendRequest/>}></Route>
            <Route path="/approvedrequests" element={<Approvedreq/>}></Route>

            <Route path="/logininfo" element={<LoginInfo/>}></Route>
            <Route path="/viewArtists" element={<ArtistInfo/>}></Route>
            <Route path="/vieworganizer" element={<OrganizerInfo/>}></Route>
            <Route path="/viewcustomer" element={<CustomerLogin/>}></Route>
            <Route path="/viewevents" element={<EventInfo/>}></Route>
        </Routes>
        <Footer/>
        
        
   
    </div>
  );
}

export default App;
