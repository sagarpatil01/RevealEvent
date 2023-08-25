
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/Login/LoginComp';
import HomeComp from './components/Home/HomeComp';

import AdminHome from './components/Admin/AdminHomeComp';
import Header from './components/Header/HeaderComp';
import Footer from './components/Footer/FooterComp';
import RegForm from './components/Login/RegisterComp';
import { useSelector } from 'react-redux';
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


function App() {
  
  
  
  return (

    
    
    <div className="App">
     
       
       
       <Header/> 
        <Routes>
            
            <Route path="/" element={<HomeComp/>}></Route>
            <Route path="login" element={<LoginComp/>}></Route> 
            <Route path="register" element={<RegForm/>}></Route>
            <Route path="/logout" element={<LogoutComp/>}></Route>

            <Route path="admin_home" element={<AdminHome/>}></Route>
            <Route path="customer_home" element={<EventComp/>}></Route>
            <Route path="organizer_home" element={<OrganizerHome/>}></Route>
            <Route path="artist_home" element={<ArtistHome/>}></Route>

            <Route path="/categories" element={<EventCat/>}></Route>
            <Route path="/singleevent" element={<EventSingle/>}></Route>
            <Route path="/payment" element={<Payment/>}></Route>
            <Route path="/success" element={<Success/>}></Route>
            <Route path="/standup" element={<StandupComp/>}></Route>
            <Route path="/drama" element={<DramaComp/>}></Route>
            <Route path="/music" element={<MusicComp/>}></Route>
            <Route path="/dance" element={<DanceComp/>}></Route>
            <Route path="/poetry" element={<PoetryComp/>}></Route>

            <Route path="/view_requests" element={<ArtistRequest/>}></Route>

            <Route path="/addevent" element={<EventForm/>}></Route>
            <Route path="/viewartists" element={<ViewArtists/>}></Route>
            <Route path="/addeventsuccess" element={<AddEveSuccess/>}></Route>
        </Routes>
        <Footer/>
        
        
   
    </div>
  );
}

export default App;
