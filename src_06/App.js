
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



function App() {
  
  
  
  return (

    
    
    <div className="App">
     
       
       
       <Header/> 
        <Routes>
            
            <Route path="login" element={<LoginComp/>}></Route>
            <Route path="/" element={<HomeComp/>}></Route>
            <Route path="register" element={<RegForm/>}></Route>
            <Route path="admin_home" element={<AdminHome/>}></Route>
           
            <Route path="customer_home" element={<CustomerHome/>}></Route>
            <Route path="organizer_home" element={<OrganizerHome/>}></Route>
            <Route path="artist_home" element={<ArtistHome/>}></Route>
            <Route path="/logout" element={<LogoutComp/>}></Route>
        </Routes>
        <Footer/>
        
        
   
    </div>
  );
}

export default App;
