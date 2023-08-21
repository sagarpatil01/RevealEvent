
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import LoginComp from './components/LoginComp';
import HomeComp from './components/HomeComp';
import RegForm from './components/RegisterComp';
import AdminHome from './components/AdminHomeComp';


function App() {
  
  
  
  return (
    <div className="App">
       <h1 className='App-logo'>RevealEvent</h1> 
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
        
        
        
        
        <Routes>
            <Route path="login" element={<LoginComp/>}></Route>
            <Route path="home" element={<HomeComp/>}></Route>
            <Route path="register" element={<RegForm/>}></Route>
            <Route path="admin_home" element={<AdminHome/>}></Route>
        </Routes>
        
        
      
    </div>
  );
}

export default App;
