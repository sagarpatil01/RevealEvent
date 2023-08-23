
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
  
  const mystate = useSelector((state)=>state.logged)
  
  return (

    
    
    <div className="App">
     
       <h1 className='App-logo'>RevealEvent</h1> 
       <div style={{display : mystate.loggedIn?"none":"block"}}>
        <nav className='navbar navbar-expand-sm bg-light mb-3'>
            <div className="container-fluid navbar-dark bg-dark">
              
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/home" className="nav-link px-3">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link px-3">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link px-3">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link px-3">About</Link>
                </li>
              </ul>

            </div>
        </nav> 
        </div>
        
        <Routes>
            <Route path="login" element={<LoginComp/>}></Route>
            <Route path="home" element={<HomeComp/>}></Route>
            <Route path="register" element={<RegForm/>}></Route>
            <Route path="admin_home" element={<AdminHome/>}></Route>
           
            <Route path="customer_home" element={<CustomerHome/>}></Route>
            <Route path="organizer_home" element={<OrganizerHome/>}></Route>
            <Route path="artist_home" element={<ArtistHome/>}></Route>
            <Route path="/logout" element={<LogoutComp/>}></Route>
        </Routes>
        
        
   
    </div>
  );
}

export default App;
