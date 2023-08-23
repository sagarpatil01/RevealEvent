import { Link } from "react-router-dom";

export default function ArtistHome(){
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light mb-3">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="home" className="nav-link px-3">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="viewevent" className="nav-link px-3">View Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="viewbooking" className="nav-link px-3">View Booking</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="createevent" className="nav-link px-3">Create Event</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link px-3">Log Out</Link>
                        </li>
                    </ul>
                    <h3>Welcome Artist</h3>

                </div>
            </nav>
       
    </div>

    )
    
}