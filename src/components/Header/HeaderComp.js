import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header(){
    const mystate = useSelector((state)=>state.logged)
    return (
    <div>
        <div style={{display : mystate.loggedIn?"none":"block"}}>
        <nav className='navbar navbar-expand-sm bg-light mb-3'>
            <div className="container-fluid">
              
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link to="/" className="nav-link px-3">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link px-3">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link px-3">Register</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link px-3">About</Link>
                </li>
              </ul>
             <h1 className='App-logo  text-black'>RevealEvent</h1> 
            </div>
        </nav> 
        </div>
    </div>

    )
}